

const ItemDetail =({p}) =>{

    const {id,img,nombre, descripcion, price}=p
    return(
        <>            
            <div className="card container ">
                <div className="row">
                    <div >
                        <div className="card-header "key={id}>
                          <label >{nombre}</label>
                         </div>
                        <div className="card-body ">
                         <img src={img} alt=""/>
                         <div className="">{descripcion}</div>
                        </div>
                        <div className="card-footer">
                           $ {price}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ItemDetail