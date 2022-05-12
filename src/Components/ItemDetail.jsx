import React from 'react';

import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import {useState,useContext} from 'react';
import { CartContext } from './CartContextProvider';
import { Button } from 'react-bootstrap';


function ItemDetail({producto}) {

  const {addToCart} = useContext(CartContext);
  const [band,setBand] = useState(false);

  //Una vez que se agrega el producto al carrito, se cambia el estado de la bandera, facilitando
  //el acceso a la sección del carrito.
  function onAdd({cant}){
    setBand(true);
    addToCart(producto,cant)
  }

  return (
    <>
    <div className="row-fluid d-flex justify-content-center" style={{width:"100%", overflow:'hidden'}}>
                    <div className="card-image">
                        <img src={producto.image} alt={producto.name} style={{width: "100%", height: "100%"}}/>
                    </div>
                    <div className="card-right">
                        <h3 className="item-title">{producto.name}</h3>
                        <h2 className="item-price"><b>${producto.price}</b></h2>
                        <p className="item-desc">{producto.detail}</p>

                        {
          band ? <Link to='/cartdetail' className='text-white'><Button id='buttonDetail' variant='dark'>Ir al carrito</Button></Link> : <ItemCount  stock={5} initial={1} onAdd={onAdd}/>
        }
                    </div>
                </div>
    </>
  )
}

export default ItemDetail