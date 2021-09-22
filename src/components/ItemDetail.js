import { ItemCount } from "./ItemCount"
import { useState } from "react";
import { Link } from "react-router-dom";
import { UseCartContext } from "./CartContext";




const ItemDetail=({cosmeticonuevo})=>{
    const [count, setCount] = useState(0)
    const {agregarAlCarrito} = UseCartContext()
    function onAdd(cantidadCompra){
        agregarAlCarrito(cosmeticonuevo, cantidadCompra);
        setCount(cantidadCompra);
    }
    return (
        <section class="mb-5 container card">
    <div class="row">
        <div class="col-md-6 mb-4 mb-md-0"><img src={cosmeticonuevo.imagenId} alt="cosmetico" class="container" />
        </div>
            <div class="col-md-6">
            <h5>{cosmeticonuevo.title}</h5>
            <p><span class="mr-1"><strong>${cosmeticonuevo.price}</strong></span></p>
            <p class="pt-1">{cosmeticonuevo.description}</p>
                <div class="table-responsive">
                    <table class="table table-sm table-borderless mb-0">
                    <tbody>
                        <tr>
                        <th class="pl-0 w-25" scope="row"><strong>Color</strong></th>
                        <td>{cosmeticonuevo.color}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div class="table-responsive mb-2">
                    <table class="table table-sm table-borderless">
                    <tbody>
                        <tr>
                        <td class="pl-0 pb-0 w-25">Cantidad</td>
                        </tr>
                        <tr>
                        <td class="pl-0">
                            {count>0 ? 
                            <Link class="btn btn-color btn-primary btn-comprar" to='/cart'> Terminar mi Compra</Link>:
                            <ItemCount onAdd={onAdd} stock={cosmeticonuevo.stock}/>}
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
    </div>
</section>
    );

}

export default ItemDetail