import React from 'react'
import Item from '../Item/Item'

function ItemList({hamburguesas}) {

  return (
    <div className='row' style={{ marginLeft: 0, marginRight: 0 }}>
      {hamburguesas.map(prod =>  <Item key={prod.id} prod={prod} />)}
    </div>
  )
}

export default ItemList