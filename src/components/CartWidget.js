import { UseCartContext } from "./CartContext";
import { Link } from "react-router-dom";


function CartWidget(){
    const {cosmeticos}= UseCartContext()
    function totalCosmeticos() {
        var totalCompra = 0;
        for (const cosmetico of cosmeticos) {
            totalCompra += cosmetico.quantity;
        }
        return totalCompra;
    }
    return( cosmeticos.length===0 ? <> </>:
        <div>
            <Link class="btn btnColor btn-color color" type="button" to='/cart'>
            🛒 Carrito <span id="notificacionCarrito" class="badge badge-dark">{totalCosmeticos()}</span>
            </Link>
            <div id="productosCarrito">
            </div>
        </div>
    )
}

export default CartWidget