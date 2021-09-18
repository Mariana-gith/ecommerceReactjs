import { createContext, useContext, useState } from "react"


 const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) =>{

   const [cart, setCart]= useState([{producto: {}, count:0}])

   function addToCart( producto, count){ 

    const index = cart.findIndex(p=>p.producto.id === producto.id)
    console.log('produc', producto)
    console.log('cart', cart)
    if(index !== -1){ //encontre un producto en el carrito con el mismo id que quiero agregar
        console.log('encontr un prod', index)
        const newCart= [...cart] // hago una copia para poder modificarla
        newCart[index].count +=count // al producto que encontre le sumo la cantidad que voy a agregar
        setCart(newCart) // seteo mi estado con la copia modificada
    }else{
        setCart([...cart,{producto, count}])
    }
   }


   function remCArt(){
       setCart([])
   }

   const borrarItem = (producto) =>{
       const borrarUno = cart.filter((i)=>i.producto.id !== producto.producto.id);
       setCart([...borrarUno]);
   }

    

   console.log(cart)
    return(
        <CartContext.Provider value={{
            cart,
            addToCart,
            remCArt ,
            borrarItem     
        }}>
            {children}
        </CartContext.Provider>
    )
}

