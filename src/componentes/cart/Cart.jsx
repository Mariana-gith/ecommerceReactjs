import { useCartContext } from "../../context/CartContext"
import Table from "react-bootstrap/Table"
import { useEffect, useState } from "react"
import {Link} from "react-router-dom"






const Cart = () =>{

  const {cart,remCArt,borrarItem,precioTotal}= useCartContext()
  console.log('esto es cart', cart.length)
  const [mensaje, setMensaje] = useState(true)


  useEffect(() => {      
    if (cart.length === 0 ){
      setMensaje(false)
    }
    },)

 console.log('esto es mensaje', mensaje)
  
  return(       
    <>
      {   mensaje ?
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
                     <td><button onClick={()=>borrarItem(p.producto)}>x</button></td>
                   </tr>
                 </tbody>
               </Table>
             </div>)}         
             <div> 
               Total: $ {precioTotal()}
             </div>                
           <button className = "btn btn-outline-primary btn-block"
             onClick= {() =>remCArt()}>Limpiar carrito
           </button>
           <div>
             <Link to='/'>
                 <button className = "btn btn-outline-primary btn-block" >Volver a la tienda</button>              
             </Link>
           </div>
         </div> 
          :
          <div>
            <p>No hay pruductos</p>
            <Link to='/'>
              <button>volver</button>
            </Link>
          </div>

      }
       
    </>

  )
}



export default Cart