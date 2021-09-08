import Item from './Item';

const ItemList =({items}) =>{
    
    return(
        <div class="container-fluid row justify-content-md-center">
            {items.map(cosmetico => <Item cosmeticonuevo={cosmetico} />)}
        </div>
    )
}


export default ItemList