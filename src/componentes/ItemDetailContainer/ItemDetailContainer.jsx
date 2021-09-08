import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router"
import { getProduct } from "../../utils/Promesas"
import ItemDetail from "./ItemDetail"



const ItemDetailContainer = () =>{
    const [producto,setProducto] = useState({})
    const [cargando, setCargando]= useState(true)
    const {products} = useParams()

    useEffect (()=>{
        if (products=== undefined){
            console.log('producto no encontrado')
        }else{
            getProduct
            .then((res)=> setProducto(res.filter(p=>products === p.id)))
            setCargando(false)
           
        }
     
    }, [products])
    
    console.log(producto)
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