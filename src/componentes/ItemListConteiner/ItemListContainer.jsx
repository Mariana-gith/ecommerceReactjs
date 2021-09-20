import { useEffect, useState } from "react"
import  Spinner  from "react-bootstrap/Spinner"
import { useParams } from "react-router"
import { mostrar } from "../../utils/Promesas"
import Items from "../Items/Items"






function ItemListContainer () {
    const [productos,setProducto] = useState([])
    const [load,setLoad]= useState(true)

    const {categoria} = useParams()

  useEffect(()=>{
    if (categoria === undefined){
      mostrar()
      .then(resp =>{
        setProducto(resp)
        setLoad(false)
      })
    } else{
      mostrar()
      .then(resp =>{        
        setProducto(resp.filter( cat=> categoria === cat.categoria))
        setLoad(false)
    })
      }
  }, [categoria]) 



  return(
      <>
      
      {load&&
        <div>
          <Spinner animation="border" role="status" variant="info">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <p>Cargando productos...</p>
        </div>
      }
      
      {!load&&
        <Items productos = {productos}/>
      }
      
      </>
  )
}

export default ItemListContainer