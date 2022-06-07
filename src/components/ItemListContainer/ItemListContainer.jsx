import React from 'react'
import { getFecth } from '../helpers/getFetch'
import { useEffect, useState } from 'react'
import './ItemListContainer.css'
/* import ItemCount from '../ItemCount/ItemCount' */

function ItemListContainer({ saludo }) {

  const [hamburguesas, setHamburguesas] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getFecth()
      .then((resp) => {
        setHamburguesas(resp)
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [])

  console.log(hamburguesas)

  return (
    <div>
      <h3 style={{ color: "white", backgroundColor: "#17202A", textAlign: "center" }}>{saludo}</h3>
      {/* <ItemCount stockTot="10" initial='1'/> */}

      {loading ?

        <div style={{ textAlign: "center" }}>
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>

        :

        hamburguesas.map(burger =>
          <div style={{ margin: "3% 3%" }} key={burger.id} >
            <div className="col-md-4 p-1" >
              <div className="card w-100 mt-3">
                <img className="card-img-top" src="https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{burger.nombre}</h5>
                  <p className="card-text">{burger.descripcion}</p><hr/>
                  Precio:
                  <h3>$ {burger.precio}</h3>
                  <a href="#" className="btn btn-primary">Ver detalles</a>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default ItemListContainer