import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"

function ItemListContainer() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams();

    //Se cargan los items de la colección "productos".
    //Luego, si selecciono una categoría, se filtran los items por el id de dicha categoría. 
    //Esto se hace porque, en la base de datos, los items tienen un campo "category" que es un array de strings.
    useEffect(()=>{
        setLoading(true);
        const db = getFirestore();
        if (!categoryId){
            const itemsCollection = collection(db, "productos");
            getDocs(itemsCollection).then(item =>{
                setItems(item.docs.map(doc => ({id: doc.id, ...doc.data()})));
            })
        } 
        else{
            const itemsCollectionFiltered = query(collection(db, "productos"), where("category", "==", categoryId));
            getDocs(itemsCollectionFiltered).then(item =>{
                setItems(item.docs.map(doc => ({id: doc.id, ...doc.data()})));
            })
        }
        setLoading(false);
    }, [categoryId]);

    if(loading){
        return <h1>Cargando...</h1>
    }

return(
    <div className="container-fluid row justify-content-around">
    <ItemList productos={items}/>
    </div>
    )
    
}
export default ItemListContainer