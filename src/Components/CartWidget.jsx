import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContextProvider";



export default function CartWidget(){
    const {cart} = useContext(CartContext);
    return(
    <>
        🛒({cart.length})
    </>)
}