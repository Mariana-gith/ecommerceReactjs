
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import Widget from "../widget"
import './index.scss';
import { Link } from "react-router-dom";


function NavBar() {
    return(
        <div>
           <Navbar bg="dark" variant="dark">
                <Container>
                    <Link to='/'>
                        <Navbar.Brand  href="#home" className="logo">Musilandia</Navbar.Brand>
                    </Link>
                <Nav className="navSty">
                    <Link to='/'>
                    <Nav.Link href="#home">Home</Nav.Link>
                    </Link>
                    <Link to='/category/guitarra'>
                    <Nav.Link href="#features">Guitarras</Nav.Link>
                    </Link>
                    <Link to='/category/bajo'>
                    <Nav.Link href="#features">Bajos</Nav.Link>
                    </Link>
                </Nav>
                <div >
                    <Link to ='/cart'>
                        <Widget/>
                    </Link>                    
                </div>
                </Container>
            </Navbar> 
        </div>
    )
}

export default NavBar 