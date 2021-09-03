import { mostrarUno } from "../../utils/Promesas"



const ItemDetail =({producto}) =>{
    console.log(mostrarUno);
    return(
        <>
            
            <div className="card container">
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
                            {producto.price}
                        </div>
                                               
                       
                    </div>
                </div>
            </div>
        </>
    )
}


export default ItemDetail