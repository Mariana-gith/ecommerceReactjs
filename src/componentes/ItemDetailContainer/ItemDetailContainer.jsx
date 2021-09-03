import { useState } from "react"
import { useEffect } from "react"
import { mostrarUno } from "../../utils/Promesas"
import ItemDetail from "./ItemDetail"



const ItemDetailContainer = () =>{
    const [producto,setProducto] = useState({})
    const [cargando, setCargando]= useState (true)

    useEffect (()=>{
        mostrarUno
        .then(resp=> {
            setProducto(resp)
            setCargando(false)
        })
    }, [])
    console.log(producto)
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