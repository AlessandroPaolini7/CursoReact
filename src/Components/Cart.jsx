import {React, useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from './CartContextProvider';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';


function Cart() {

  const {cart, removeFromCart, buyAll} = useContext(CartContext);
  let total = 0;
  cart.forEach(item => {
    total+=item.price*item.count;
  });

  return (
    <>
        <h2 className='d-flex justify-content-center'>Carrito</h2>
        {cart.length !==0 ?
        <div>
            <div className='d-flex justify-content-around'>
              <h3>Producto</h3>
              <h3>Cantidad</h3>
              <h3>Imagen</h3>
            </div>
            {cart.map((item) => 
                  <div className='d-flex justify-content-around'>
                    <h4>{item.name}</h4>
                    <h4>{item.count}</h4>
                    <h4>${item.price * item.count}</h4>
                    <div>
                      <img src={item.image} style={{ width: '50px' ,height: '100px'}}/> 
                      <Button variant='btn btn-danger' onClick={() => removeFromCart(item.id)}>Eliminar</Button>
                    </div>
                  </div>
                )}
                <br>
                </br>
            <h3 className='d-flex justify-content-center'>Total: ${total}</h3>
              <div className="d-flex justify-content-center">
                <br/><br/>
                <Button variant='dark' onClick={() => buyAll()}>Comprar</Button>
          </div>
        </div>
        : <div >
            <h4 className='d-flex justify-content-center'>No hay productos en el carrito</h4>
            <Link to = '/' className='d-flex justify-content-center text-white'><Button variant='dark' >Volver</Button></Link>
          </div>}
    </>
  )
}

export default Cart