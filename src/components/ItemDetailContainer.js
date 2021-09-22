import ItemDetail from './ItemDetail';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {getFirestore} from '../service/getFirebase'





const ItemDetailContainer =() =>{
    const [estadoCosmetico , setEstadoCosmetico] = useState([])
    const [loading, setloading] = useState(true)
    const {id}= useParams()
    useEffect(() => {
        const db= getFirestore()
        const queryDB = db.collection('items').get()
        .then(data => {
            if (data.size===0){
                console.log('no hay nada')
            }
            var cosmeticos = data.docs.map(cosmetico => ({id:cosmetico.id, ...cosmetico.data()}))
            setEstadoCosmetico(cosmeticos.find( cosmetico => id===cosmetico.id)) 
            setloading(false)
        })
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