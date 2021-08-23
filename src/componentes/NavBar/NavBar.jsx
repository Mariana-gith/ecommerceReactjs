
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import Widget from "../widget"
import './index.scss';


function NavBar() {
    return(
        <div>
           <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand className="logo" href="#home">Musilandia</Navbar.Brand>
                <Nav className="navSty">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Tieneda</Nav.Link>
                    <Nav.Link href="#pricing">Contacto</Nav.Link>
                </Nav>
                </Container>
                <Widget/>
            </Navbar>        
 

        </div>
    )
}

export default NavBar 