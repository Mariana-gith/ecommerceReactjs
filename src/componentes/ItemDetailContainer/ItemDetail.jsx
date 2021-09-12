import Contador from "../ItemCount/Contador"




const ItemDetail =(props) =>{

const {producto} = props 

const onAdd = (count)=> {
    alert( `Compraste ${count} productos`)     
  }

  console.log(producto)
    return(
        <>            
            <div className="card container ">
                <div className="row">
                    <div >
                        <div className="card-header ">
                          <label >{producto.nombre}</label>
                         </div>
                        <div className="card-body ">
                         <img src={producto.img} alt=""/>
                         <div className="">{producto.descripcion}</div>
                        </div>
                        <div className="card-footer">
                           $ {producto.price}
                        </div>
                    </div>
                </div>
                <div>
                    <Contador initial={1} stock={10} onAdd={onAdd} /> 
                </div>
            </div>
        </>
    )
}


export default ItemDetail