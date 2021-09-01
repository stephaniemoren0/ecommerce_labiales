import cosmeticos from './ItemList';
import ItemListContainer from './ItemListContainer';
import { useState, useEffect} from 'react';


let tarea = new Promise((resolve) => {
    setTimeout(()=>{
    resolve (cosmeticos);}, 2000) ;
})

const Cosmetico =() =>{
    const [estadoCosmetico , setEstadoCosmetico] = useState([])
    useEffect(() => {
    tarea
    .then((respuesta)=>{
        setEstadoCosmetico(respuesta);})
    }, [])
    return(
        <div class="contenedor">
        <div class="container-fluid row justify-content-md-center">
            {estadoCosmetico.map(cosmetico => <ItemListContainer cosmeticonuevo={cosmetico} />)}
        </div>
        </div>
    )
}


export default Cosmetico