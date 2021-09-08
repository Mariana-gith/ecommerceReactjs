
import  Button  from "react-bootstrap/Button"
import  Card  from "react-bootstrap/Card"
import  Container  from "react-bootstrap/Container"
import { Link } from "react-router-dom"
import './Item.scss'

const Item= ({p})=>{    
    
const {id,img,nombre, descripcion, price}=p
     
    return(
        <>
         <div className= " col-6 col-md-4 col-lg-4 col-xl-4">    
                    <Container className='d-flex ' >
                        <Card className='card-ecomerce' key={id}>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title >{nombre}</Card.Title>
                                <Card.Text>
                                    {descripcion}                
                                </Card.Text>
                                <Card.Text>
                                    $ {price}
                                </Card.Text>
                               <Link to={`/products/${id}`}>
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