import React from 'react'
import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
/* import ItemCount from '../ItemCount/ItemCount' */

function ItemListContainer({ saludo }) {



  return (
    <div>
      <h3 style={{ color: "white", backgroundColor: "#17202A", textAlign: "center" }}>{saludo}</h3>
      {/* <ItemCount stockTot="10" initial='1'/> */}
      <ItemList/>

    </div>
  )
}

export default ItemListContainer