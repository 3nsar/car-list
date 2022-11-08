import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FiShoppingCart} from 'react-icons/fi';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand >Cars</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link ><Link to="/">Home</Link></Nav.Link>
            <Nav.Link ><Link to="/shoppinglist"><FiShoppingCart/></Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Header