import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router"
import { getProduct } from "../../utils/Promesas"
import ItemDetail from "./ItemDetail"



const ItemDetailContainer = () =>{
    const [producto,setProducto] = useState({})
    const [cargando, setCargando]= useState(true)
    const {id} = useParams()

    useEffect (()=>{

        if (id=== undefined){
    
          console.log('producto no encontrado')
    
        }else{
    
          getProduct
    
          .then((res)=> setProducto(res.filter(p=>parseInt(id) === p.id)))
    
          setCargando(false)
    
          
    
        }
    
       
    
      }, [id])
    
    console.log()
    return (
        <>
             {  
                cargando?
                    <p>Cargando Producto...</p>
                :             
                < ItemDetail p={producto} />
             }
           
            
        </>
    )
}

export default ItemDetailContainer