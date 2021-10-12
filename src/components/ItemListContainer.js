import cosmeticos from './Cosmeticos';
import ItemList from './ItemList';
import {getFirestore} from '../service/getFirebase'
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
        if(category===undefined){
            const db= getFirestore()
        const queryDB = db.collection('items').get()
        .then(data => {
            
            setEstadoCosmetico (data.docs.map(cosmetico => ({id:cosmetico.id, ...cosmetico.data()})))
        })
        }
        else{
            const db= getFirestore()
        const queryDB = db.collection('items').where('categoryId', '==', category ).get()
        .then(data => {
            
            setEstadoCosmetico (data.docs.map(cosmetico => ({id:cosmetico.id, ...cosmetico.data()})))
        })
        }
        
    }
        , [category])
    

    return(
        <div class="contenedor">
            <ItemList items={estadoCosmetico}/>
        </div>
    )
}


export default ItemListContainer