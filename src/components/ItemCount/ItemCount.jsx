import React from 'react'
import { useState } from 'react'
import './ItemCount.css';

function ItemCount({ stockTot, initial }) {

    const [count, setCount] = useState(1)
    const [stock, setStock] = useState(10)

    const decrement = () => count > initial && setCount(count - 1)
    const increment = () => count < stockTot && setCount(count + 1)

    function onAdd() {
        if(stock - count >= 0){
            console.log("Agregado " + count + " al carrito")
            setStock(stock-count)
        }else {
            console.log("No hay stock del producto.")
        }
    }

    return (
        <div className="card" style={{ width: "18rem", margin:"5rem" }}>
            <div className='card-body'>
                <img className="card-img-top" src="https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg" alt="Card image cap"/>
                <h5 className="text-center">Hamburgesa simple</h5>
                <p className="text-center">Descripcion de la hamburgesa</p>
                <p className="text-center">Disponible {stock}</p>
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
                    <button type="button" className="btn btn-primary" onClick={onAdd}>Ver detalles</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount
