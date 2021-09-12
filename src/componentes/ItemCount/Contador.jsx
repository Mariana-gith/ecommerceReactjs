import { Modal } from "bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import './index.scss';




export const onAdd = (count)=> {
    alert( `Compraste ${count} productos`) 
   
  }

const Contador = ({initial, stock, onAdd})=> {

    const [count , setCount] = useState (initial)
    const [cambiar, setCambiar] = useState(false)

    const handlerSumar = ()=> {
       if (count === 10){
           alert('stock no diponible')
           setCount(initial)
       }else{
        setCount(count +1)}
    }
    const handlerRestar = ()=> {
       if (count > initial){
        setCount(count -1)}
    } 

    const handlerReset = ()=> {
        setCount(initial)        
    }

    const handlerOnAdd = ()=> {
        onAdd(count)        
        setCambiar (true)
    }
    

    return(
        <div>
            <button onClick={handlerSumar}>+</button>
            <label>  {count}  </label>
            <button onClick={handlerRestar}>-</button> <br/>

            {
                cambiar ?  
                    <div>
                        <Link to='/cart'>
                            <button className = "btn btn-outline-primary btn-block" >Terminar Compra</button>
                        </Link>
                        <Link to='/'>
                            <button className = "btn btn-outline-primary btn-block" >Seguir Comprando</button>
                          
                        </Link>
                    </div>
                :
                    <div>
                        <button className = "btn btn-outline-primary btn-block" onClick={handlerOnAdd}>Agregar al Carro</button><br/>
                        <button className = "btn btn-outline-primary btn-block" onClick={handlerReset}>Borrar</button>
                    </div>
                   
            }


        </div>
    )
}


export default Contador 