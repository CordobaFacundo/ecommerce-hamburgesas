import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import Loading from '../../components/Loading/Loading'
import { collection, doc, getDoc, getDocs, getFirestore, limit, query, where } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const queryItem = doc(db, 'productos', id)
        getDoc(queryItem)
            .then(resp => setProducto({ id: resp.id, ...resp.data() }))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div>
            {loading ?
                <Loading />
                :
                <ItemDetail producto={producto} />
            }
        </div>
    )
}

export default ItemDetailContainer