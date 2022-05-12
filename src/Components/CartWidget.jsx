import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContextProvider";



export default function CartWidget(){
    let {cart} = useContext(CartContext);

    //Calcula el total de items del carrito, los muestra en su widget.
    let total = 0;
    cart.forEach(item => { 
        total+=item.count
    });
    return(
    <>
        🛒({total})
    </>)
}