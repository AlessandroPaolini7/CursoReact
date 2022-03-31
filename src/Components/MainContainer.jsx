import React from "react";
import Main from "./Main";

export default function MainContainer(){
    const mediosPago = ["USDT","ETH","BTC","MercadoPago","Transferencia Bancaria"];
    return(
        <>
        <Main formaPago={mediosPago}/>
        </>
    )
}