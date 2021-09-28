import { useCartContext } from "../../context/CartContext"
import Table from "react-bootstrap/Table"
import  Form  from "react-bootstrap/Form"
import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import { getFirestore } from "../../service/getfirebase"

const Cart = () =>{
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

      const nuevaOrden = {
        buyer : formulario,
        items : cart,
        total : precioTotal()
      }
      console.log('esto es nuevaOrden', nuevaOrden)
      
      const db = getFirestore()
      const orden = db.collection('orden')

      orden.add(nuevaOrden)
      .then(resp => console.log(resp))
      .catch(err => console.log(err))
      
    }
  
   const cargarFgormulario = (e) =>{
     setFormulario ({
       ...formulario,
       [e.target.name]: e.target.value
     })
   }

   
    
 console.log('esto es mensaje', mensaje)
 console.log('esto es formul', formulario)
 


  
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
           <form    
                   onSubmit= {cargarOrden} 
                   onChange = {cargarFgormulario}
                   >
              <div class="row">
                <div class="col">
                    <input type="text" placeholder="ing nombre" name="nombre" value={formulario.nombre}/>
                </div>
                <div class="col">
                  <input type="text" placeholder="ing tel" name="tel" value={formulario.tel} />
                </div>
                <div class="col">
                  <input type="text" placeholder="ing email" name="email" value={formulario.email} />
                </div>
              </div>
              <br />
                <button className = "btn btn-outline-primary btn-block" >Terminar Compra</button>  
            </form>
            <br />
           </div>
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