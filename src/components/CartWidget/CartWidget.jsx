import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../contexts/cartContext'

function CartWidget() {

    const { cart } = useCartContext()
    let x=0
    for (let i = 0; i < cart.length; i++) {
        x+=cart[i].cantidad
    }

    return (
        <>
            <Nav>
                <Link to={'/Cart'} title="Carrito" className="navbar-nav ms-auto">

                    <img src="https://cdn.pixabay.com/photo/2013/07/12/17/01/shopping-cart-151685_960_720.png" width="50px" alt="carrito" height="50px" className="nav-item nav-link">
                    </img>
                </Link>
                <div>
                    {
                        x == 0 ?
                            <></>
                            :
                            <span className="position-absolute top-50 start-200 translate-middle badge rounded-pill bg-danger">{x}</span>
                    }
                </div>
            </Nav>

        </>
    )
}

export default CartWidget