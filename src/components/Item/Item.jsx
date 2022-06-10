import React from 'react'

function Item({ item }) {
  return (
    <div style={{ display: 'flex', margin: '3% 3%' }}>
      <div className="col-md-4 p-1" >
        <div className="card w-100 mt-3">
          <img className="card-img-top" src="https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{item.nombre}</h5>
            <p className="card-text">{item.descripcion}</p><hr />
            Precio:
            <h3>$ {item.precio}</h3>
            <a href="#" className="btn btn-primary">Ver detalles</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item