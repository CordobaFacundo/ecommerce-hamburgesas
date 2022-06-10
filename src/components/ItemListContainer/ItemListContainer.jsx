import React from 'react'
import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { getFecth } from '../helpers/getFetch'
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


  return (
    <div>
      <h3 style={{ color: "white", backgroundColor: "#17202A", textAlign: "center" }}>{saludo}</h3>
      {/* <ItemCount stockTot="10" initial='1'/> */}

      {loading ?

        <div style={{ textAlign: "center" }}>
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>

        :

        <div>
          <ItemList hamburguesas={hamburguesas} />
        </div>
      }

    </div>
  )
}

export default ItemListContainer