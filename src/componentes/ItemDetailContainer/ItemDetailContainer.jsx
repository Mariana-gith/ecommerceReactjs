import { useState } from "react"
import { useEffect } from "react"
import Spinner  from "react-bootstrap/Spinner"
import { useParams } from "react-router"
import { mostrar} from "../../utils/Promesas"
import ItemDetail from "./ItemDetail"



const ItemDetailContainer = () =>{
  const [producto,setProducto] = useState({})
  const [cargando, setCargando]= useState (true)

  const {id}= useParams()
   
  useEffect (()=>{
    mostrar(id)
    .then(resp=> {
          setProducto(resp)
          setCargando(false)
          console.log('log producto', resp)
       
      })
  }, [id],2000)
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