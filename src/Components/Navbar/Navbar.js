import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import marca from './assets/ecommerce.png'
import Button from '../Button/Button'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
 

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className='contenedorGeneral'>
      <Container className='container'>
        <Link className='imglogo' to='/'><img src={marca} alt='marca'></img></Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link ><Button /></Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link ><CartWidget /></Nav.Link>
              </Nav>
            </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;







