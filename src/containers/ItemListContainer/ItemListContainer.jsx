import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import ItemList from '../../components/ItemList/ItemList'
import { getFetch } from '../../components/helpers/getFetch'
import Loading from '../../components/Loading/Loading'

function ItemListContainer({ saludo }) {

  const [hamburguesas, setHamburguesas] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoriaId } = useParams()

  console.log(categoriaId)

  useEffect(() => {
    if (categoriaId) {
      getFetch()
        .then((resp) => {
          setHamburguesas(resp.filter(producto => producto.categoria == categoriaId))
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    } else {
      getFetch()
        .then((resp) => {
          setHamburguesas(resp)
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }
  }, [categoriaId])

  return (
    <div>
      <h3 style={{ color: "white", backgroundColor: "#17202A", textAlign: "center" }}>{saludo}</h3>

      {loading ?
        <Loading />
        :
        <ItemList hamburguesas={hamburguesas} />
      }
    </div>
  )
}

export default ItemListContainer