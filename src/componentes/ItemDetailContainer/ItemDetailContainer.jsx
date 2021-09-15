import { useState } from "react"
import { useEffect } from "react"
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
  }, [id])
  return (
      <>
          {cargando ? 
              <p>Cargando tu pedido...</p> 
              :
              < ItemDetail producto={producto}/>
          }
            
        </>
    )
}

export default ItemDetailContainer