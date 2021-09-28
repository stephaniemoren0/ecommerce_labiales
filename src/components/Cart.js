import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { getFirestore } from "../service/getFirebase";
import { UseCartContext } from "./CartContext";
import ItemCart from "./ItemCart";
import firebase from "firebase/app";
import "firebase/firestore";

const Cart =()=>{
    const {borrarListado,cosmeticos}= UseCartContext()
    const [formData, setFormData] = useState(initalState)
    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        const newOrder={
            buyer: formData,
            items: cosmeticos,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: totalIva()
        }
        console.log(newOrder)
        const db = getFirestore()
        const orders = db.collection('orders')

        orders.add(newOrder)
        .then(respuesta => alert(`la orden de compra es ${respuesta.id}`))
        .catch(error => console.log(error))
        .finally(() => {
            setFormData (initalState)
            borrarListado()
        })
    }
    console.log(formData)
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

                    <form onChange={handleChange}>
                        <input type="text" placeholder="nombre" name="nombre" value={formData.nombre} />
                        <input type="text" placeholder="tel" name="tel" value={formData.tel} />
                        <input type="email" placeholder="email" name="email" value={formData.email} />
                        </form>
                    <button type="button" class="btn btn-primary btn-block" data-toggle="modal" onClick={handleSubmit} data-target="#myModal">
                    Confirmar Pedido
                    </button>
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



export default Cart

const initalState ={
    nombre: '',
    email:'',
    tel:''
}