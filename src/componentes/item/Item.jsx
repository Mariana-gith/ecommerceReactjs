
import  Button  from "react-bootstrap/Button"
import  Card  from "react-bootstrap/Card"
import  Container  from "react-bootstrap/Container"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import './Item.scss'

const Item= ({p})=>{    


    const {cart} = useCartContext()
    console.log(cart)
     

    return(
        <>
         <div className= " col-6 col-md-4 col-lg-4 col-xl-4">    
                    <Container className='d-flex ' >
                        <Card className='card-ecomerce' key={p.id}>
                            <Card.Img variant="top" src={p.img} />
                            <Card.Body>
                                <Card.Title >{p.nombre}</Card.Title>
                                <Card.Text>
                                    {p.descripcion}                
                                </Card.Text>
                                <Card.Text>
                                    $ {p.price}
                                </Card.Text>
                               <Link to={`/product/${p.id}`}>
                                <Button variant="success">Detalle</Button>
                               </Link>
                            </Card.Body>
                        </Card>
                    </Container>
                    
             
            </div>
        </> 
    )
}

export default Item