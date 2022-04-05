import React from "react";
import Main from "./Main";
import ItemCount from "./ItemCount"

export default function ItemListContainer(){
    const mediosPago = ["USDT","ETH","BTC","MercadoPago","Transferencia Bancaria"];
    
    function onAdd(cant){
        if(cant>0){
            alert("Agregaste " + cant + " items al carrito");
        }
    }
    
    
    
    return(
        <>
        <Main formaPago={mediosPago}/>
        <ItemCount onAdd={onAdd} stock={5} initial={1}/>
        </>
    )
}