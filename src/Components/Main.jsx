import React from "react";



export default function Main({formaPago}){
    
    return(
        <>
            <h2>Medios de pago</h2>
            <ul>
            {formaPago.map((item) => <li>{item}</li>)}
            </ul>
        </>
    )


}