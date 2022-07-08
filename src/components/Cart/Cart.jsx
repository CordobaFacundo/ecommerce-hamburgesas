import { React, useState } from 'react'
import { useCartContext } from '../../contexts/cartContext'
import CartList from '../CartList/CartList'
import { Link } from 'react-router-dom'
import { addDoc, collection, doc, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch } from "firebase/firestore"
import Form from '../Form/Form'
import TyforBuying from '../TyforBuying/TyforBuying'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function Cart() {
  const { cart, clearCart, totalPrice } = useCartContext()
  let tot = totalPrice()
  const [orderId, setOrderId] = useState("")
  const [datos, setDatos] = useState({
    nombre: '',
    email: '',
    telefono: ''
  })


  const handleCallback = (childData) => {
    setDatos(childData)
  }

  async function generarOrden(e) {
    e.preventDefault()
    let orden = {}

    orden.buyer = datos
    orden.total = totalPrice()

    orden.items = cart.map(cartItem => {
      const id = cartItem.id
      const nombre = cartItem.nombre
      const precio = cartItem.precio * cartItem.cantidad
      const cantidad = cartItem.cantidad

      return { id, nombre, precio, cantidad }
    })

    if (datos.nombre == '' && datos.email == '' && datos.telefono == '') {
      toast.warning(`🚀 Formulario incompleto. `, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const db = getFirestore()
      //Generar orden de compra
      const orderCollection = collection(db, 'orders')
      addDoc(orderCollection, orden)
        .then(resp => setOrderId(resp.id))
        .then(resp => console.log(resp.id))

      //Actualizar stock
      const queryCollectionStock = collection(db, 'productos')
      const queryActulizarStock = await query(
        queryCollectionStock,
        where(documentId(), 'in', cart.map(it => it.id))
      )

      const batch = writeBatch(db)
      await getDocs(queryActulizarStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
          stock: res.data().stock - cart.find(item => item.id === res.id).cantidad
        })))
        .finally(() => clearCart())

      batch.commit()
    }
  }

  return (
    <div className='container'>
      <h2 style={{ color: "white", textAling: "center" }}>Carrito</h2>
      <div className='card' style={{ background: "none", border: "none", margin: "2%", color: "white" }} >
        {
          cart.length < 1 ?
            <div>
              <h5 scope="row" colspan="5" style={{ color: "white" }}>Tu carrito esta vacio!</h5>
              <Link to={'/'}>
                <button className="btn btn-primary">Volver al inicio</button>
              </Link>
              {orderId ? <TyforBuying orderId={orderId} /> : <></>}
            </div>
            :
            <div><h5>Tenes estos productos en tu carrito:</h5>
              <div>
                <table className="table" style={{ color: "white" }}>
                  <thead>
                    <tr>
                      <th scope="col">Quitar</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Precio</th>
                      <th scope="col">Cantidad</th>
                      <th scope="col">Precio Tot</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cart.map(item => <CartList key={item.id} item={item} />)
                    }
                  </tbody>
                </table>
              </div>
              <div>
                <div style={{ textAlign: "center" }}>
                  <h3>Total a pagar: ${tot}</h3>
                  <button className='btn btn-danger' onClick={clearCart}>Vaciar carrito</button>
                  <Form inputCallback={handleCallback} />
                  <button className='btn btn-primary' onClick={generarOrden} style={{ marginLeft: "25px" }}>Finalizar compra</button>
                </div>
              </div>
            </div>
        }
      </div>
    </div>
  )
}

export default Cart