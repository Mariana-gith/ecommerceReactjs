import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { mostrar } from "../../utils/Promesas"
import Items from "../Items/Items"






function ItemListContainer () {
    const [productos,setProducto] = useState([])

    const {categoria} = useParams()

  useEffect(()=>{
    if (categoria === undefined){
      mostrar()
      .then(resp =>{
        setProducto(resp)
      })
    } else{
      mostrar()
      .then(resp =>{        
        setProducto(resp.filter( cat=> categoria === cat.categoria))
      })
    }    
  }, [categoria]) 



  return(
      <>
      <Items productos = {productos}/>
      </>
  )
}

export default ItemListContainer