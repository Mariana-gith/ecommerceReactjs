
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"

function NavBar() {
    return(
        <div>
           <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Musilandia</Navbar.Brand>
                <Nav className="me-auto ">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Tieneda</Nav.Link>
                <Nav.Link href="#pricing">Contacto</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
 

        </div>
    )
}

export default NavBar 