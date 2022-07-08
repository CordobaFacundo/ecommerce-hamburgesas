import React from 'react'

function TyforBuying({ orderId }) {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h4 className="display-4">Gracias por tu compra!</h4>
                    <p className="lead">Este es el codigo de tu pedido:  "{orderId}"</p>
                </div>
            </div>
        </div>
    )
}

export default TyforBuying