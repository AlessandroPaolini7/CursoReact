import { getFirestore,addDoc,collection } from 'firebase/firestore';
import React from 'react'
import {useState, useContext} from 'react'
import {CartContext} from './CartContextProvider'
import {Button} from 'react-bootstrap'
import 'react-bootstrap'
import {Link} from 'react-router-dom'

function Formulario() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const {cart,buyAll} = useContext(CartContext)
    const [band,setBand] = useState(false)


    let total = 0;
    cart.forEach(item => {
        total += item.price * item.count;
    })

    const terminarCompra = () => {
        let date = new Date();
        const order = {
            buyer: {name:{name}, email:{email}, phone:{phone}},
            items:{cart},
            date:{date},
            total:{total}
        }
        const db = getFirestore();
        const ordersCollection = collection(db, "compras");
        addDoc(ordersCollection, order).then(({id}) => console.log(id));
    }


return (
    <>
    <h3 className='d-flex justify-content-center '>Felicitaciones! Ya estás en el final de tu proceso de compra.</h3>
    <h4 className='d-flex justify-content-center '>Por favor, ingresa tus datos para finalizar tu compra.</h4>
    <br />
    <div className='d-flex justify-content-center container-form'>
        <h5>Formulario de contacto</h5>
        <br />
        <div className='d-flex justify-content-center '>
            <input type={"text"} placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <br />
        <div className='d-flex justify-content-center '>
            <input type={"text"} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <br />
        <div className='d-flex justify-content-center '>
            <input type={"number"} placeholder="Telefono" value={phone} onChange={(e) => setPhone(e.target.value)}/>
        </div>
        <br />
        <div className='d-flex justify-content-center '>
        <Button variant='dark' type='submit' onClick={()=>{
            terminarCompra();
            buyAll();
        }}>Comprar</Button>
        </div>
        <br />
    </div>
    </>
)
}

export default Formulario