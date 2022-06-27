import React from 'react'
import { useCartContext } from '../../contexts/cartContext'
import CartList from '../CartList/CartList'

function Cart() {
  const { cart, clearCart } = useCartContext()
  let tot = 0
    for (let i = 0; i < cart.length; i++) {
        tot += cart[i].precio*cart[i].cantidad
    }

  return (
    <div className='container'>
      <h2 style={{ color: "white", textAling: "center" }}>Carrito</h2>
      <div className='card' style={{background: "none", border:"none", margin:"2%", color:"white"}} >
        {
          cart.length < 1 ?
            <h5 scope="row" colspan="5" style={{ color: "white"}}>Carrito vacío - comience a comprar!</h5>
            :
            <div><h5>Tenes estos productos en tu carrito:</h5> 
              {
                cart.map(item => <CartList key={item.id} item={item} />)
              }
              <div>
                <div style={{textAlign:"center"}}> 
                  <h3>Total a pagar: ${tot}</h3>
                  <button className='btn btn-danger' onClick={clearCart}>Vaciar carrito</button>
                  <button className='btn btn-primary' onClick={e => alert('Terminaste la compra')} style={{marginLeft: "25px"}}>Finalizar compra</button>
                </div>
              </div>
            </div>
        }
      </div>
    </div>
  )
}

export default Cart