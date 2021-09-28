import { useState } from "react"
import { useEffect } from "react"
import Spinner  from "react-bootstrap/Spinner"
import { useParams } from "react-router"
import ItemDetail from "./ItemDetail"
import { getFirestore } from "../../service/getfirebase"


const ItemDetailContainer = () =>{
  const [producto,setProducto] = useState({})
  const [cargando, setCargando]= useState (true)

  const {id}= useParams()

  
  
  useEffect (()=>{
    const db = getFirestore()
    const productosDB = db.collection('items').doc(id).get()
    productosDB.then(resp=> {
          setProducto( {id : resp.id, ... resp.data()})
          setCargando(false)
          console.log('log producto', resp)
      })
  }, [id], 2000)
  console.log(producto)
  return (
      <>
          {cargando &&
           <div>
              <Spinner animation="border" role="status" variant="info">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
              <p>Cargando tu pedido...</p> 
            </div>
          }          
           {!cargando &&   < ItemDetail producto={producto}/>}
            
        </>
    )
}

export default ItemDetailContainer