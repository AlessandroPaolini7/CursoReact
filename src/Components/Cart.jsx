import {React, useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from './CartContextProvider';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';


function Cart() {

  const {cart, removeFromCart} = useContext(CartContext);
  let total = 0;
  cart.forEach(item => {
    total+=item.price*item.count;
  });

  return (
    <>
        <h2 className='d-flex justify-content-center'>Carrito</h2>
        {cart.length !==0 ?
        <div>
            {cart.map((item) => 
              <div>
                  <div className='row no-gutters py-2 cart-item'>
                    <div className="col-sm-2 p-2"> 
                      <img src={item.image} style={{margin: "0 auto", maxHeight: "50px"}} alt={item.name} className="img-fluid d-block"/>          
                    </div>
                    <div className="col-sm-4 p-2">
                      <h5 className="mb-1">{item.name}</h5>
                      
                      <p className="mb-1">${item.price }</p>
                    </div>
                    <div className="col-sm-4 p-2">
                      <p className="mb-0">Cant: {item.count}</p>
                    </div>
                    <div className="col-sm-1 p-2">
                      <div className='btn btn-danger btn-sm mb-1'>
                        <Button variant='btn btn-danger' onClick={() => removeFromCart(item.id)}>Eliminar</Button>
                      </div>
                    </div>
                  </div>
                  <br />
              </div>
                )}
                <br>
                </br>
            <h3 className='d-flex justify-content-center'>Total: ${total}</h3>
              <div className="d-flex justify-content-center">
                <br/><br/>
                <Link to='/form'><Button id='buttonDetail' variant='dark'>Comprar</Button></Link>
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