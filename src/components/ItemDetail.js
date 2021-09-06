import cosmeticos from "./Cosmeticos";
import { ItemCount } from "./ItemCount"



const ItemDetail=({cosmeticonuevo})=>{
    return (
        <section class="mb-5 container card">
    <div class="row">
        <div class="col-md-6 mb-4 mb-md-0"><img src={cosmeticonuevo.imagen} alt="cosmetico" class="container" />
        </div>
            <div class="col-md-6">
            <h5>{cosmeticonuevo.nombre}</h5>
            <p><span class="mr-1"><strong>${cosmeticonuevo.precio}</strong></span></p>
            <p class="pt-1">{cosmeticonuevo.descripcion}</p>
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
                            <div class="def-number-input number-input safari_only mb-0">
                            <ItemCount stock={cosmeticonuevo.stock}/>
                            <br />
                            <a href="#"  class="btn btn-color btn-primary btn-comprar">Comprar</a>
                            </div>
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