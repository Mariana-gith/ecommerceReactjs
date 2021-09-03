import { useEffect, useState } from "react"
import { mostrar } from "../../utils/Promesas"
import Items from "../Items/Items"






function ItemListContainer () {
    const [productos,setProducto] = useState([])
  useEffect(()=>{
    mostrar
    .then(resp =>{
      setProducto(resp)
    })
    
  })
  
  return(
      <>
      <Items productos = {productos}/>
      </>
  )
}

export default ItemListContainer