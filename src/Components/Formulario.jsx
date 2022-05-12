import { getFirestore,addDoc,collection } from 'firebase/firestore';
import React from 'react'
import {useState, useContext} from 'react'
import {CartContext} from './CartContextProvider'
import {Button} from 'react-bootstrap'
import 'react-bootstrap'
import FinCompra from './FinCompra';


function Formulario() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const {cart,buyAll} = useContext(CartContext);
    const [id,setId] = useState('');
   

    let total = 0;
    cart.forEach(item => {
        total += item.price * item.count;
    })


    const terminarCompra = () => {
        if (name === '' || email === '' || phone === '') {
            alert('Por favor, rellene todos los campos');
        }else{
            if(email.includes('@') && email.includes('.') && email.length > 4){
                if(phone.length > 9){
                    let date = new Date();
                    const order = {
                        buyer: {name:{name}, email:{email}, phone:{phone}},
                        items:{cart},
                        date:{date},
                        total:{total}
                    }
                    const db = getFirestore();
                    const ordersCollection = collection(db, "compras");
                    addDoc(ordersCollection, order).then(({id}) => setId(id));
                    buyAll();
                }else{
                    alert('Por favor, ingrese un telefono válido');
                    }
            }else{
                alert('Por favor, ingrese un email válido')
            }
        }
    }


return (
    <>
    { id==="" ?     
    <div>
        <h3 className='d-flex justify-content-center '>Felicitaciones! Ya estás en el final de tu proceso de compra.</h3>
        <h4 className='d-flex justify-content-center '>Por favor, ingresa tus datos para finalizar tu compra.</h4>
        <br />
        <div className='d-flex justify-content-center container-form'>
            <h5>Formulario de contacto</h5>
            <br />
            <div className='d-flex justify-content-center '>
                <input type={"text"} placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} required/>
            </div>
            <br />
            <div className='d-flex justify-content-center '>
                <input type={"text"} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <br />
            <div className='d-flex justify-content-center '>
                <input type={"number"} placeholder="Telefono" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
            </div>
            <br />
            <div className='d-flex justify-content-center '>
            <Button variant='dark' type='submit' onClick={()=>{
                terminarCompra();
            }}>Comprar</Button>
            </div>
            <br />
        </div>
    </div>  : <FinCompra  name={name} email={email} phone={phone} id={id} />
}
    </>
)
}

export default Formulario