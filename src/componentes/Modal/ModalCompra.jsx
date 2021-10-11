import React, {useState, useContext} from 'react';
import Modal from "react-bootstrap/Modal";
import { useCartContext } from "../../context/CartContext"
import { getFirestore } from "../../service/getfirebase"

const ModalCompra = (props) => {
    
    const { cart,borrarItem ,precioTotal } = useCartContext;
    const [nuevaOrden, setNUevaOrden]=useState({
        buyer : "",
        items :"" ,
        total : ""
    })
    const [formulario, setFormulario]=useState({
        nombre: '',
        email :'',
        tel:''
      })
const cargarOrden = (e) =>{
    e.preventDefault()

    setNUevaOrden = {
      buyer : formulario,
      items : cart,
      total : precioTotal()
    }
    console.log('esto es nuevaOrden', nuevaOrden)
    
    const db = getFirestore()
    const orden = db.collection('ordenes')

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

    return (

        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title>Ingrese los datos para generar su orden de compra</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <fieldset>
                    <form    
                    onSubmit= {cargarOrden} 
                    onChange = {cargarFgormulario}
                    >
                <div class="row">
                    <div class="col">
                        <input  type="text" placeholder="ing nombre" name="nombre" value={formulario.nombre}/>
                    </div>
                    <div class="col">
                    <input  type="text" placeholder="ing tel" name="tel" value={formulario.tel} />
                    </div>
                    <div class="col">
                    <input  type="text" placeholder="ing email" name="email" value={formulario.email} />
                    </div>
                </div>
                <br />
                    <button className = "btn btn-outline-primary btn-block" >Terminar Compra</button>  
                </form>
                </fieldset>
            </Modal.Body>
            <Modal.Footer>
                <button variant="outline-info" type="submit" className="mt-auto" onClick={borrarItem}>
                    cerrar
              </button>
            </Modal.Footer>
           {/*  <small>{idOrden ? ` Su orden fue generada con el ID: ${idOrden}` : null}</small> */}
        </Modal>
    );
}

export default ModalCompra;