import React from 'react';
import styles from './ItemDetail.module.css';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import {useState,useContext} from 'react';
import { CartContext } from './CartContextProvider';


function ItemDetail({producto}) {

  const {addToCart} = useContext(CartContext);
  const [band,setBand] = useState(false);

  function onAdd({cant}){
    setBand(true);
    producto.count = cant;
    addToCart(producto)
  }



  return (
    <>
      <div className={styles.containerDetail}>
        <div className={styles.photoDetail}>
          <img src={producto.image} alt={producto.name}/>
        </div>
        <div className={styles.productDetail}>
          <h2>{producto.name}</h2>
          <p>{producto.detail}</p>
          <h4>{producto.price}</h4>
          <h5>#{producto.category}</h5>
          {
          band ? <Link to='/cartdetail'>Ir al carrito</Link> : <ItemCount  stock={5} initial={1} onAdd={onAdd}/>
        }
        </div>
        <br/>
        <br />
      </div>
    </>
  )
}

export default ItemDetail