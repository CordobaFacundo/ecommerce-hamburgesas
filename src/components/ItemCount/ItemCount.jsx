import React from 'react'
import { useState } from 'react'
import './ItemCount.css';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function ItemCount({ stockTot, initial, onAdd }) {

    const [count, setCount] = useState(1)
    const [stock, setStock] = useState(stockTot)

    const decrement = () => count > initial && setCount(count - 1)
    const increment = () => count < stockTot && setCount(count + 1)

    const agregar = () => {
        if (stock - count >= 0) {
            onAdd(count)
            setStock(stock - count)
        } else {
            toast.error('No hay stock disponible :c', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }

    return (
        <div>
            <p style={{textAling: "center"}}>Disponible: {stock}</p>
            <div className="input-group input-number-group">
                <div className="input-group-button">
                    <span className="input-number-decrement" onClick={decrement}>-</span>
                </div>
                <h4 className="input-number">{count}</h4>
                <div className="input-group-button">
                    <span className="input-number-increment" onClick={increment}>+</span>
                </div>
            </div>
            <div style={{ textAlign: "center" }}>
                <button type="button" className="btn btn-primary" onClick={agregar}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount
