import { createContext, useContext, useState } from "react"


 const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) =>{

   const [cart, setCart]= useState([{}])

   function addToCart(prod){
       setCart([...cart,prod])
   }

   function remCArt(){
       setCart([])
   }

   console.log(cart)
    return(
        <CartContext.Provider value={{
            cart,
            addToCart,
            remCArt      
        }}>
            {children}
        </CartContext.Provider>
    )
}

