import {React, useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from './CartContextProvider';
import {Button} from 'react-bootstrap'


function Cart() {

  const {cart, removeFromCart, buyAll} = useContext(CartContext);
  
  return (
    <>
        <h2 className='d-flex justify-content-center'>Carrito</h2>
        <div className='d-flex justify-content-around'>
          <h3>Producto</h3>
          <h3>Cantidad</h3>
          <h3>Imagen</h3>
        </div>
        {cart.map((item) => 
              <div className='d-flex justify-content-around'>
                <h4>{item.name}</h4>
                <h4>{item.count}</h4>
                <div>
                  <img src={item.image} style={{ width: '50px' ,height: '100px'}}/> 
                  <Button variant='btn btn-danger' onClick={() => removeFromCart(item.id)}>Eliminar</Button>
                </div>
              </div>
            )}
          <div className="d-flex justify-content-center">
            <br/><br/>
            {cart.length !==0 ? <Button variant='dark' onClick={() => buyAll()}>Comprar</Button> : <h4>No hay productos en el carrito</h4>}
          </div>
    </>
  )
}

export default Cart