import React from 'react';
import styles from './ItemDetail.module.css';

function ItemDetail({producto}) {
  return (
    <>
      <div className={styles.containerDetail}>
        <div className={styles.photoDetail}>
          <img src={producto.imagen} alt={producto.nombre}/>
        </div>
        <div className='row'>
          <h2>{producto.nombre}</h2>
          <p>{producto.detalle}</p>
          <h4>{producto.precio}</h4>
        </div>
        <br/>
        <br />
      </div>
    </>
  )
}

export default ItemDetail