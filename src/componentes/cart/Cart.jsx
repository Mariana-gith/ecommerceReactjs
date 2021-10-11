import { useCartContext } from "../../context/CartContext"
import Table from "react-bootstrap/Table"
import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import { getFirestore } from "../../service/getfirebase"
import Modal from '../Modal/ModalCompra'

const Cart = () =>{
  const [showModal, setShowModal] = useState(false);
  const [nuevaOrden,setNuevaOrden]=useState({
    buyer : "",
    items : [],
    total : ""
  })
  const [formulario, setFormulario]=useState({
          nombre: '',
          email :'',
          tel:''
        })
  
  const {cart,remCArt,borrarItem,precioTotal}= useCartContext()
  const [mensaje, setMensaje] = useState(true)
  console.log('esto es cart', cart.length)

  useEffect(() => {      
    if (cart.length === 0 ){
      setMensaje(false)} 
    },)
     
  const cargarOrden = (e) =>{
      e.preventDefault()
      setNuevaOrden({
        buyer : formulario,
        items : cart,
        total : precioTotal()
      })
      
      const db = getFirestore()
      const orden = db.collection('ordenes')
  
      orden.add(nuevaOrden)
      .then(resp => alert(`Tu orden de compra es${resp.id}`))
      .catch(err => console.log(err))
    }
  
   const cargarFgormulario = (e) =>{
     setFormulario ({
       ...formulario,
       [e.target.name]: e.target.value
     })
   }
   
  
   console.log('esto es nuevaOrden', [nuevaOrden])
   console.log('esto es formulario', formulario)
    
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
           <br />
           {/* <button onClick={() => setShowModal(true)}>Generar orden de compra</button>
            <Modal show={showModal} onHide={() => setShowModal(false)}/>   */}
            <br />
           </div>
           <div>
           <form    
                    onSubmit= {cargarOrden} 
                    onChange = {cargarFgormulario}
                    >
                <div class="row">
                     <p> ingresa tus datos</p>
                    <div class="col">
                        <input  type="text" placeholder=" nombre" name="nombre" value={formulario.nombre}/>
                    </div>
                    <div class="col">
                    <input  type="text" placeholder=" tel" name="tel" value={formulario.tel} />
                    </div>
                    <div class="col">
                    <input  type="text" placeholder=" email" name="email" value={formulario.email} />
                    </div>
                </div>
                <br />
                <Link to='/'>
                 <button className = "btn btn-outline-primary btn-block" >Volver a la tienda</button>              
                </Link> 
                </form>
           </div>
           <div>
                <Table striped bordered hover size="sm">
                  <tr>
                    <th>Comprador</th>
                    <th>Total</th>
                    <th>Email</th>
                  </tr>
                  <tr>
                    <td>{nuevaOrden.buyer.nombre}</td>
                    <td>${nuevaOrden.total}</td>
                    <td>{nuevaOrden.buyer.email}</td>
                  </tr>
                </Table>
            </div>
           <div>
              <button  onClick= {cargarOrden}  className = "btn btn-outline-primary btn-block" >Terminar Compra</button> 
           </div>
           <div>
             
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