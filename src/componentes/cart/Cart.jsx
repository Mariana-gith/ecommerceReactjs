import { useCartContext } from "../../context/CartContext"
import Table from "react-bootstrap/Table"





const Cart = () =>{
  
    const {cart,remCArt,borrarItem}= useCartContext()
    
    return(
        <div>
           {cart.map (p=>         
             <div className="d-flex" >
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>           
                      <th>Nombre</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                      <th></th>  
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{p.producto.nombre}</td>
                      <td>{p.producto.price}</td>
                      <td>{p.count}</td>
                      <td><button onClick= {()=> borrarItem()} >x</button></td>
                    </tr>
                  </tbody>
                </Table>
             </div>)
           }
          <button onClick= {() =>remCArt()}>Limpiar carrito</button>
        </div>
    )
}


export default Cart