import React from 'react'

function Item({ prod }) {
  
  return (
    <div className="col-sm-6">
      <div className="card" style={{width : '18rem', margin:'5%'}}>
        <img className="card-img-top" src="https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg" alt="Card image cap" width="300" height="200"/>
          <div className="card-body"> {prod.tipo}
            <h3 className="card-title">{prod.nombre.toUpperCase()}</h3>
            <div className="card-text">{prod.descripcion}</div><hr/>
              Precio:
              <p style={{fontSize: '40px'}}>$ {prod.precio}</p>
              <button type="button" className="btn btn-primary btn-adminbutton">Ver detalle</button>
          </div>
      </div>
    </div>
  )
}

export default Item