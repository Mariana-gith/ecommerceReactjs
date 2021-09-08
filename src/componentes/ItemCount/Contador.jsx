import { useState } from "react";
import './index.scss';




export const onAdd = (count)=> {
    alert( `Compraste ${count} productos`)     
  }

const Contador = ({initial, stock, onAdd})=> {

    const [count , setCount] = useState (initial)

    const handlerSumar = ()=> {
       if (count === 10){
           alert('stock no diponible')
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
      
    }
    

    return(
        <div>
            <button onClick={handlerSumar}>+</button>
            <label>  {count}  </label>
            <button onClick={handlerRestar}>-</button> <br/>
            <button className = "btn btn-outline-primary btn-block" onClick={handlerOnAdd}>Add</button>
            <button className = "btn btn-outline-primary btn-block" onClick={handlerReset}>Reset</button>

        </div>
    )
}


export default Contador 