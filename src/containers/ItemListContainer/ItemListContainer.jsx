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

  //Consulta productos a firebase
  useEffect(() => {
    const db = getFirestore()
    const queryCollection = collection(db, 'productos')
    const queryCollectionFilter = categoriaId ? query(queryCollection, where('categoria', '==', categoriaId)) : queryCollection

    getDocs(queryCollectionFilter)
      .then(data => setHamburguesas(data.docs.map(item => ({ id: item.id, ...item.data() }))))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))

  }, [categoriaId])

  return (
    <div>
      <h3 style={{ color: "white", backgroundColor: "#17202A", textAlign: "center" }}>{saludo}</h3>

      { loading ? <Loading /> : <ItemList hamburguesas={hamburguesas} /> }
    </div>
  )
}

export default ItemListContainer