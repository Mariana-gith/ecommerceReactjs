import { useEffect, useState } from "react"
import  Spinner  from "react-bootstrap/Spinner"
import { useParams } from "react-router"
import { getFirestore } from "../../service/getfirebase"
import Items from "../Items/Items"






function ItemListContainer () {
    const [productos,setProducto] = useState([])
    const [load,setLoad]= useState(true)

    const {categoria} = useParams()
    
    
    
    useEffect(()=>{
      const db = getFirestore()

      const condicionR = categoria ?
        db.collection('items').where('categoria', '==', categoria)
      :
        db.collection('items')
        setLoad(false) 

        condicionR.get()
        .then(resp =>{
          if(resp.size === 0){
            console.log('vacio')
          } 
          setProducto(resp.docs.map(prod => ({id : prod.id, ...prod.data()})))
          setLoad(false) 
        })
  }, [categoria],2000) 

console.log(productos)

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