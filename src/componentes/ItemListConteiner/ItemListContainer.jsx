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
      const repuestaBD= db.collection('items')
      const guitarraCategoria =repuestaBD.where('categoria','!=','Guitarra').get()
      const bajoCategoria = repuestaBD.where('categoria','!=','Bajo').get()
      const todosProductos = repuestaBD.get()

        bajoCategoria.then(resp =>{
          if(categoria === 'guitarra'){
            setProducto(resp.docs.map(prod => ({id : prod.id, ...prod.data()})))
            setLoad(false) 
          }
        })
        guitarraCategoria.then(respuesta =>{  
          if(categoria=== 'bajo'){
            setProducto(respuesta.docs.map(prod => ({id : prod.id, ...prod.data()})))
          }  
       })
        todosProductos.then(r =>{     
          if(categoria === undefined)     
          setProducto(r.docs.map(prod => ({id : prod.id, ...prod.data()})))
          setLoad(false)
        })  
    
  
  }, [categoria]) 

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