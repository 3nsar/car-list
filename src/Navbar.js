import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FiShoppingCart} from 'react-icons/fi';

const navbar = () => {
  return (
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Cars</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#WatchList"><FiShoppingCart/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default navbar