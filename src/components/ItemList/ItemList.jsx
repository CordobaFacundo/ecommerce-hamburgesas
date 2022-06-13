import React from 'react'
import Item from '../Item/Item'

function ItemList({hamburguesas}) {

  return (
    <div className='row'>
      {hamburguesas.map(prod =>  <Item key={prod.id} prod={prod} />)}
    </div>
  )
}

export default ItemList