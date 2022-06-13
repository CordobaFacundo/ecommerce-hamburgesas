import React from 'react'
import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../../components/ItemList/ItemList'
import { getFecth } from '../../components/helpers/getFetch'
import Loading from '../../components/Loading/Loading'
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
        <Loading />
        :
        <ItemList hamburguesas={hamburguesas} />
      }
    </div>
  )
}

export default ItemListContainer