import { UseCartContext } from "./CartContext";
import ItemCart from "./ItemCart";

const cart =()=>{
    const {borrarListado,cosmeticos}= UseCartContext()
    console.log(cosmeticos)
    return(<>
    <br />
        <a class="btn btn-color btn-primary btn-comprar" onClick={borrarListado}>Borrar Carrito</a>
        <div class="container-fluid row justify-content-md-center">
            {cosmeticos.map(cosmetico => <ItemCart cosmeticonuevo={cosmetico.item} /> )}
        </div>

        </>
    );
}

export default cart