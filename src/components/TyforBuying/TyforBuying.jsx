import React from 'react'

function TyforBuying({orderId}) {
    return (
        <div>
            <h3>Gracias por tu compra!</h3>
            <h4>Este es tu codigo de tu pedido:<hr /> {orderId}</h4>
        </div>
    )
}

export default TyforBuying