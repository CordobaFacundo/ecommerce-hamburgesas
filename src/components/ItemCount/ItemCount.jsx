import React from 'react'
import { useState } from 'react'
import './ItemCount.css';

function ItemCount({ stockTot, initial }) {

    const [count, setCount] = useState(1)
    const [stock, setStock] = useState(stockTot)

    const decrement = () => count > initial && setCount(count - 1)
    const increment = () => count < stockTot && setCount(count + 1)

    function onAdd() {
        if (stock - count >= 0) {
            console.log("Agregado " + count + " al carrito")
            setStock(stock - count)
        } else {
            console.log("No hay stock del producto.")
        }
        console.log(stock)
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
                <button type="button" className="btn btn-primary" onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount
