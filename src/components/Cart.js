import { UseCartContext } from "./CartContext";

const cart =()=>{
    const {borrarListado,cosmeticos}= UseCartContext()
    return(<>
    <br />
        <a class="btn btn-color btn-primary btn-comprar" onClick={borrarListado}>Borrar Carrito</a>
        <div class="container-fluid row justify-content-md-center">
            {cosmeticos.map(cosmetico => <><p>Nombre: {cosmetico.item.nombre} Cantidad: {cosmetico.quantity}  </p>  </>)}
        </div>
        </>
    );
}

export default cart