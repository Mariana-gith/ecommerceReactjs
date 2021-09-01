
import  Button  from "react-bootstrap/Button"
import  Card  from "react-bootstrap/Card"
import  Container  from "react-bootstrap/Container"
import './Item.scss'






const Item= ({p})=>{
   
    return(
        <>
            <div className= " col-6 col-md-4 col-lg-4 col-xl-4">    
                <Container className='d-flex ' >
                    <Card className='card-ecomerce'>
                        <Card.Img variant="top" src={p.img} />
                        <Card.Body>
                            <Card.Title >{p.nombre}</Card.Title>
                            <Card.Text>
                                {p.descripcion}                
                            </Card.Text>
                            <Card.Text>
                                $ {p.price}
                            </Card.Text>
                            <Button variant="success">Comprar</Button>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        </> 
    )
}

export default Item