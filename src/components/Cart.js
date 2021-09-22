import { Link, NavLink } from "react-router-dom";
import { UseCartContext } from "./CartContext";
import ItemCart from "./ItemCart";

const cart =()=>{
    const {borrarListado,cosmeticos}= UseCartContext()
    console.log(cosmeticos)
    function totalArticulos(){
        var totalCompra = 0
        for (const cosmetico of cosmeticos) {
            totalCompra = totalCompra + (cosmetico.quantity*cosmetico.item.price);
        }
        return totalCompra;
    }
    function totalIva(){
        var totalCompra = 0
        for (const cosmetico of cosmeticos) {
            totalCompra = totalCompra + (cosmetico.quantity * cosmetico.item.price);
        }
        var iva = totalCompra * 0.16;
        var totalConiva = iva + totalCompra;
        return Math.round(totalConiva);
    }

    return( cosmeticos.length===0 ?<div> <br /> <h1>No tienes articulos en tu carrito</h1> <Link class="btn btnColor  btn-color color " type="button" to='/'>Seguir Comprando</Link> </div>:
    <>
            <a class="btn btn-color btn-primary btn-comprar" onClick={borrarListado}>Borrar Carrito</a>
    <div id="carritoDetalle" class="contenedorCade container-fluid">
    <br />
        <div class="container-fluid row justify-content-md-center">
            {cosmeticos.map(cosmetico => <ItemCart cosmeticonuevo={cosmetico.item} cantidad={cosmetico.quantity} /> )}
        </div>
        <div class="mb-3">
            <div class="pt-4">
                <h5 class="mb-4">Paga con:</h5>
                <img class="mr-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg" alt="Visa" />
                <img class="mr-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg" alt="American Express" />
                <img class="mr-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg" alt="Mastercard" />
                <img class="mr-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png" alt="PayPal acceptance mark" />
            </div>
        </div>
        <div class="col-lg-5">
            <div class="mb-3">
                <div class="pt-4">
                    <h5 class="mb-3">Carrito</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">Sub Total<span id="subTotal">{totalArticulos()}</span></li>
                        <li class="list-group-item d-flex justify-content-between align-items-center px-0">Envio<span>Gratis</span></li>
                        <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                            <div>
                                <strong>Total {totalIva()}</strong>
                                <strong><p class="mb-0">(Ya incluye el IVA)</p></strong>
                            </div>
                            <span id="totalIva"></span>
                        </li>
                    </ul>
                    <button type="button" class="btn btn-primary btn-block" data-toggle="modal" data-target="#myModal">
                    Confirmar Pedido
                    </button>
                            <div class="modal fade" id="myModal">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <a href="../index.html" type="button" id="limpiar" class="color" >&times;</a>
                                        </div>
                                        <div class="modal-body textoNotificacion">
                                        ¡Tu Compra Fue Exitosa!
                                        </div>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
        </div>
<div class="mb-3 container-fluid">
    <div class="pt-4">
    <h5 class="mb-4">Entrega Estimada</h5>
    <p class="mb-0"> Martes 30 de Noviembre del 2021</p>
    </div>
</div>
</div>

        </>
    );
}



export default cart