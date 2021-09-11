

const ItemDetail =({p}) =>{

  console.log(p)
    return(
        <>            
            <div className="card container ">
                <div className="row">
                    <div >
                        <div className="card-header "key={p.id}>
                          <label >{p.nombre}</label>
                         </div>
                        <div className="card-body ">
                         <img src={p.img} alt=""/>
                         <div className="">{p.descripcion}</div>
                        </div>
                        <div className="card-footer">
                           $ {p.price}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ItemDetail