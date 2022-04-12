import React, { useEffect, useState } from "react";
import Main from "./Main";
import ItemCount from "./ItemCount"

// export default function ItemListContainer(){
//     const mediosPago = ["USDT","ETH","BTC","MercadoPago","Transferencia Bancaria"];
    
//     function onAdd(cant){
//         if(cant>0){
//             alert("Agregaste " + cant + " items al carrito");
//         }
//     }
    
    
    
//     return(
//         <>
//         <Main formaPago={mediosPago}/>
//         
//         </>
//     )
// }

import ItemList from "./ItemList";
import customFetch from "../util/customFetch";
import productos from "../util/productos";

function ItemListContainer() {
    const [items, setItems] = useState([]);

    useEffect(()=>{
        customFetch(2000,productos)
        .then(resultado => setItems(resultado))
        .catch(error => console.log(error));
    },[items])

return (
    <div className="container-fluid row justify-content-around">
    <ItemList productos={items}/>
    </div>
)
}

export default ItemListContainer