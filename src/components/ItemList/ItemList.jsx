import React from 'react'
import { useEffect, useState } from 'react'
import { getFecth } from '../helpers/getFetch'
import Item from '../Item/Item'

function ItemList() {

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
      {loading ?

        <div style={{ textAlign: "center" }}>
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>

        :

        hamburguesas.map((burger) => (
          <Item item={burger} key={burger.id} />
        ))

      }
    </div>
  )
}

export default ItemList