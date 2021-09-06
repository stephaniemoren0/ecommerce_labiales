import ItemDetail from './ItemDetail';
import { useState, useEffect} from 'react';


let tarea = new Promise((resolve) => {
    const cosmetico = { id: 1, nombre: "Labial Studio Look Mate", descripcion: "El favorito de todas. Labial líquido Studio Look mate de larga duración, un must-have para combinar todos tus looks. 6ml / 0.17fl.oz.", imagen: "https://cyzone.tiendabelcorp.com/cdn-cgi/image/width=1200,fit=contain,f=auto/https://belc-bigdata-mdm-images-prd.s3.amazonaws.com/images/FotoProductoFondoBlancoWebRedes/200103920_fotofondoblanco.jpg", color: "LATTE", precio: 109.9, stock: 30}
    setTimeout(()=>{
    resolve (cosmetico);}, 2000) ;
})

const ItemDetailContainer =() =>{
    const [estadoCosmetico , setEstadoCosmetico] = useState([])
    const [loading, setloading] = useState(true)
    useEffect(() => {
        tarea
        .then((respuesta)=>{
            setEstadoCosmetico(respuesta);
            setloading (false);})
        }, [])
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