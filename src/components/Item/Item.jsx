import React from 'react'
import {Link} from 'react-router-dom'
import ItemDetailContainer from '../../containers/ItemDetailContainer/ItemDetailContainer'
import { getFecth, useEffect } from '../helpers/getFetch'

function getId(id){
  console.log(id)
}


function Item({ prod }) {
  
  return (
    <div className="col-sm-3"> 
      <div className="card" style={{width : '18rem', margin:'5%'}}>
        <img className="card-img-top" src={prod.imagen} alt="Card image cap" width="300" height="200"/>
          <div className="card-body"> {prod.categoria}
            <h3 className="card-title">{prod.nombre.toUpperCase()}</h3>
            <div className="card-text">{prod.descripcion}</div><hr/>
              Precio:
              <p style={{fontSize: '40px'}}>${prod.precio}</p>
              <Link to={`/detalle/${prod.id}`}>
                <button type="button" className="btn btn-primary btn-adminbutton">Ver detalle</button>
              </Link>
          </div>
      </div>
    </div>
  )
}

export default Item