import React from 'react'
import { useState } from 'react'
import './ItemCount.css';

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
            console.log("No hay stock del producto.")
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
