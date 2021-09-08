import cosmeticos from './Cosmeticos';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';

let tarea = new Promise((resolve) => {
    setTimeout(()=>{
    resolve (cosmeticos);}, 2000) ;
})


const ItemListContainer =() =>{
    const [estadoCosmetico , setEstadoCosmetico] = useState([])
    const {category}= useParams()
    useEffect(() => {
        if(category===undefined)
    {tarea
    .then((respuesta)=>{
        setEstadoCosmetico(respuesta);})}
    else{
        tarea
        .then((respuesta)=> 
        setEstadoCosmetico(respuesta.filter( cosmetico => category===cosmetico.categoria)) ) 
    }
    }, [category])
    

    return(
        <div class="contenedor">
            <ItemList items={estadoCosmetico}/>
        </div>
    )
}


export default ItemListContainer