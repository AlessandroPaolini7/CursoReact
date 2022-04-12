import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import  traerProducto from '../util/traerProducto'



function ItemDetailCointainer() {

    const [producto, setProducto] = useState({})
    
    useEffect(() => {
      traerProducto()
        .then((res) => {
          setProducto(res);
        })
    },[])


  return (
    <>
      <div className='row'>
        <ItemDetail producto={producto}/>
      </div>
    </>
  )
}

export default ItemDetailCointainer