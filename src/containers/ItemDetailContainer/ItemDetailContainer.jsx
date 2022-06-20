import React from 'react'
import { useState, useEffect } from 'react'
import { getFetch } from '../../components/helpers/getFetch'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import Loading from '../../components/Loading/Loading'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        getFetch(id)
            .then((resp) => setProducto(resp))
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