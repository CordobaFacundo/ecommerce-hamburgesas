import React from 'react'
import { useCartContext } from '../../contexts/cartContext';


function CartList({ item }) {
    const { removeItem } = useCartContext()

    return (
        <div>
            <table className="table" style={{color:"white"}}>
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
                    <tr>
                        <th scope="col">
                            <button className='btn btn-danger' onClick={e => removeItem(item.id)}>x</button>
                        </th>
                        <th scope="col">{item.nombre}</th>
                        <th scope="col">${item.precio}</th>
                        <th scope="col">{item.cantidad}</th>
                        <th scope="col">${item.precio * item.cantidad}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CartList