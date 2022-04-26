import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContextProvider";



export default function CartWidget(){
    let {cart} = useContext(CartContext);

    let total = 0;
    cart.forEach(item => { 
        total+=item.count
    });
    return(
    <>
        🛒({total})
    </>)
}