import React from 'react'
import {Link,Outlet} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavLayout() {
  return (
    <div>
        {/* <Link to="product">Product</Link>
        <Link to="about">About</Link>
         */}
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home">CRC</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="first">Day 1</Nav.Link>
                <Nav.Link href="about">Day 2</Nav.Link>
                <Nav.Link href="like">Day 3</Nav.Link>
                <Nav.Link href="product">Day 4</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        <Outlet/>
        
        
    </div>
  )
}
