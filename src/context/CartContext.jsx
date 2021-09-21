import { createContext, useContext, useState } from "react"


 const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) =>{

   const [cart, setCart]= useState([{producto: {}, count:0}]) 
  


   function addToCart( producto, count){ 
    const index = cart.findIndex(p=>p.producto.id === producto.id)
   /*  console.log('produc', producto)
    console.log('cart', cart) */
    if(index !== -1){ //encontre un producto en el carrito con el mismo id que quiero agregar
        console.log('encontr un prod', index)
        const newCart= [...cart] // hago una copia para poder modificarla
        newCart[index].count +=count // al producto que encontre le sumo la cantidad que voy a agregar
        setCart(newCart) // seteo mi estado con la copia modificada
       
    }else{
        setCart([...cart,{producto, count}])
    }
   }


   const borrarItem = (producto) =>{
       const borrarUno = cart.filter((i)=>i.producto.id !== producto.id);
       setCart(borrarUno)
   }

   function remCArt(){
    setCart([])
    }
    
    const countTotal =() =>{
        const counts = cart.map((item) => item.count)
        return counts.reduce((acum , value)=> acum+ value,0 )       
    }


    const precioTotal = () =>{
        const totalParcial = cart.map((item)=> item.producto.price * item.count)
        return totalParcial.reduce((acum,value)=> acum + value,0)
    }

   console.log(cart)
    return(
        <CartContext.Provider value={{
            cart,
            addToCart,
            remCArt,
            borrarItem,
            countTotal,
            precioTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}

