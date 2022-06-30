import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import ItemList from '../../components/ItemList/ItemList'
import Loading from '../../components/Loading/Loading'
import { collection, doc, getDoc, getDocs, getFirestore, limit, query, where } from 'firebase/firestore'

function ItemListContainer({ saludo }) {

  const [hamburguesas, setHamburguesas] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoriaId } = useParams()

  useEffect(() => {
    if (categoriaId) {
      const db = getFirestore()
      const queryCollection = collection(db, 'productos')
      const queryCollectionFilter = query(queryCollection, where('categoria', '==', categoriaId))

      getDocs(queryCollectionFilter)
        .then(data => setHamburguesas(data.docs.map(item => ({ id: item.id, ...item.data() }))))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    } else {
      const db = getFirestore()
      const queryCollection = collection(db, 'productos')
      getDocs(queryCollection)
        .then(data => setHamburguesas(data.docs.map(item => ({ id: item.id, ...item.data() }))))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }
  })

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