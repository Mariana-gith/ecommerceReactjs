import { useEffect, useState } from "react"
import { mostrar } from "../../utils/Promesas"
import Items from "../Items/Items"






function ItemListContainer () {
    const [producto,setProducto] = useState([])
  useEffect(()=>{
    mostrar
    .then(resp =>{
      setProducto(resp)
    })
    
  })
  
  return(
      <>
      <Items producto = {producto}/>
      </>
  )
}

export default ItemListContainer