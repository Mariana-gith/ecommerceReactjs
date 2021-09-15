import { useCartContext } from "../../context/CartContext"


const Cart = () =>{
    const {remCArt}= useCartContext()
    return(
        <div>
            <h2>Cart</h2>
            <button onClick= {remCArt}>Limpiar carrito</button>
        </div>
    )
}


export default Cart