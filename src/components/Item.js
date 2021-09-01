import cosmeticos from './ItemList';
import ItemListContainer from './ItemListContainer';

const Cosmetico =() =>{
    return(
        <div class="contenedor">
        <div class="container-fluid row justify-content-md-center">
            {cosmeticos.map(cosmetico => <ItemListContainer cosmeticonuevo={cosmetico} />)}
        </div>
        </div>
    )
}


export default Cosmetico