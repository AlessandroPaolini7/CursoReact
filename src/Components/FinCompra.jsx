import React from 'react';
import { CartContext } from './CartContextProvider';
import { useContext } from 'react';

function FinCompra({name,email,phone,id}) {
  return (
    <>
        <h2 className='d-flex justify-content-center '>Felicitaciones!</h2>
        <br />
        <h3 className='d-flex justify-content-center '>Su orden se registró de manera exitosa.</h3>
        <br />
        <div className='d-flex justify-content-cente col-sm-12 col-md-4 mb-2 container-form'>
            <h5>Ticket</h5>
            <br />
            <div className='d-flex justify-content-center '>
            <h5 className='d-flex justify-content-center '>Código de orden: {id}</h5>
            </div>
            <br />
            <div className='d-flex justify-content-center '>
            <h5 className='d-flex justify-content-center '>Nombre: {name} </h5>
            </div>
            <br />
            <div className='d-flex justify-content-center '>
            <h5 className='d-flex justify-content-center '>Email: {email} </h5>
            </div>
            <br />
            <div className='d-flex justify-content-center '>
            <h5 className='d-flex justify-content-center '>Telefono: {phone}</h5>
            </div>
            <br />
            <h5 className='d-flex justify-content-center '>Gracias por su compra!</h5>
        </div>
    </>
  )
  
}

export default FinCompra