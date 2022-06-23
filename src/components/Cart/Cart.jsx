import React from 'react'
import { useCartContext } from '../../contexts/cartContext'

function Cart() {
  const { cart, clearCart } = useCartContext()

  return (
    <div className='container'>
      <h2 style={{ color: "white", textAling: "center" }}>Carrito</h2>
      <div className='card'>
        {
          cart.length < 1 ?
            <h4>Tu carrito esta vacio. Comprate algo!</h4>
            :
            <div> Tenes estos productos en tu carrito:
              <ul>
                {
                  cart.map(item => <li key={item.id}>{item.nombre} x {item.cantidad} Precio: ${item.precio}</li>)
                }
              </ul>
              <div>
                <button className='btn btn-primary' onClick={clearCart}>Vaciar carrito</button>
              </div>
            </div>
        }
      </div>
    </div>
  )
}

export default Cart