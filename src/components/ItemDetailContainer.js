import ItemDetail from './ItemDetail';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import cosmeticos from './Cosmeticos';


let tarea = new Promise((resolve) => {
    setTimeout(()=>{
    resolve (cosmeticos);}, 2000) ;
})

const ItemDetailContainer =() =>{
    const [estadoCosmetico , setEstadoCosmetico] = useState([])
    const [loading, setloading] = useState(true)
    const {id}= useParams()
    useEffect(() => {
        if(id===undefined)
    {tarea
    .then((respuesta)=>{
        setEstadoCosmetico(respuesta);
        setloading (false);})}
    else{
        tarea
        .then((respuesta)=>{
            setEstadoCosmetico(respuesta.find( cosmetico => id===cosmetico.id)) 
            setloading (false);}) 
    }
    }, [id])
    

    return(
        <>
        {loading ? 
                    <h2>Cargando Productos...</h2>
                : 
                    <div class="contenedor">
                    <ItemDetail cosmeticonuevo={estadoCosmetico} />
                    </div>}
        </>
    )
}


export default ItemDetailContainer