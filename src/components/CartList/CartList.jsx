import React from 'react'
import { useCartContext } from '../../contexts/cartContext';


function CartList({ item }) {
    const { removeItem } = useCartContext()

    return (
        <tr>
            <th scope="col">
                <button className='btn btn-danger' onClick={e => removeItem(item.id)}>x</button>
            </th>
            <th scope="col">{item.nombre}</th>
            <th scope="col">${item.precio}</th>
            <th scope="col">{item.cantidad}</th>
            <th scope="col">${item.precio * item.cantidad}</th>
        </tr>
    )
}

export default CartList