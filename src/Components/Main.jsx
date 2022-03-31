import React from "react";



export default function Main(formaPago){
    
    return(
        <>
            <h2 className="text-align-center">Medios de pago</h2>
            {formaPago.map((item) => <h3>{item}</h3>)}
        </>
    )


}