import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from '../CartWidget/CartWidget'
import {NavLink, Link} from 'react-router-dom'

function NavBar() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link to='/'>Tata Burger </Link> 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/categoria/Carne">Carne</NavLink> 
                        <NavLink to="/categoria/Vegana">Veganas</NavLink>
                        {/* <Nav.Link href="#link">Extras</Nav.Link>
                        <Nav.Link href="#link">Salsas</Nav.Link> */}
                        <NavDropdown title="Bebidas" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Gaseosas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Cerbezas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Especiales</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBar