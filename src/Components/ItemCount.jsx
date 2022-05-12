import { useState } from "react";
import Button from "react-bootstrap/Button";


export default function ItemCount({stock,initial,onAdd}) {
    
    //Seteo la cantidad del producto a adquirir en su mínimo, 1.
    const[cant,setCant] = useState(initial);


    function agregar(){
        if(cant<stock){
            setCant(cant + 1);
        }
    }
    function quitar(){
        if(cant>initial){
            setCant(cant - 1);
        }
    }
    
    
    
    return(
        <>
            <div className="d-flex ">
                <Button id='buttonDetail' variant="dark" onClick={()=> agregar()}><strong>+</strong></Button>
                <p><strong>{cant}</strong></p>
                <Button id='buttonDetail' variant="dark" onClick={()=> quitar()}><strong>-</strong></Button>
                <br />
                <br />
                
            </div>
            <br />
            <div className="d-flex ">
                <Button id='buttonDetail' variant="dark" onClick={()=> onAdd({cant})}>Agregar al carrito</Button>
            </div>
        </>
    )
}