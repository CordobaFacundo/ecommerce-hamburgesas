import React from 'react'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'

function CartWidget() {
    return (
        <>
            <Nav>
                <Link to={'/Cart'} title="Carrito" className="navbar-nav ms-auto">
                    <img src="https://cdn.pixabay.com/photo/2013/07/12/17/01/shopping-cart-151685_960_720.png" width="50px" alt="carrito" height="50px" className="nav-item nav-link" />
                </Link>
            </Nav>

        </>
    )
}

export default CartWidget