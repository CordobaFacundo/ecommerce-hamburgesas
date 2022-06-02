import React from 'react'
import Nav from 'react-bootstrap/Nav'

function CartWidget() {
    return (
        <>
            <Nav>
                <Nav.Link href="#link" title="Carrito" className="navbar-nav ms-auto">
                    <img src="https://cdn.pixabay.com/photo/2013/07/12/17/01/shopping-cart-151685_960_720.png" width="50px" alt="carrito" height="50px" className="nav-item nav-link" />
                </Nav.Link>
            </Nav>

        </>
    )
}

export default CartWidget