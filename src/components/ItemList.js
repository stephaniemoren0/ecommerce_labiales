import cosmeticos from './Cosmeticos';
import Item from './Item';
import { useState, useEffect} from 'react';


let tarea = new Promise((resolve) => {
    setTimeout(()=>{
    resolve (cosmeticos);}, 2000) ;
})

const ItemList =() =>{
    const [estadoCosmetico , setEstadoCosmetico] = useState([])
    useEffect(() => {
    tarea
    .then((respuesta)=>{
        setEstadoCosmetico(respuesta);})
    }, [])
    return(
        <div class="container-fluid row justify-content-md-center">
            {estadoCosmetico.map(cosmetico => <Item cosmeticonuevo={cosmetico} />)}
        </div>
    )
}


export default ItemList