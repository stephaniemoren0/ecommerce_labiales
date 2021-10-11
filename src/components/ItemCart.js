import { UseCartContext } from "./CartContext";


const ItemCart=({cosmeticonuevo, cantidad})=>{
    const { borrarItem}= UseCartContext()
    function onDelete(){
        borrarItem(cosmeticonuevo.id)
    }
    return (
        <div class="row">
            <div class="col-lg ">
                <div class="mb-3 row contenedorArticulos">
                    <div class="pt-2">
                        <div class="col row mb-4">
                            <div class="d-flex col-md-5 col-lg-3 col-xl-3">
                                <div class="   z-depth-1 rounded mb-3 mb-md-0 ">
                                    <img class="img-fluid w-100 estiloImagen" src={cosmeticonuevo.imagenId} alt="Sample" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pt-2">
                        <div class="col row mb-4">
                            <div class="d-flex justify-content-between col-lg elDetalle">
                                <div class="col-lg">
                                    <h5>{cosmeticonuevo.title}</h5>
                                    <p class="mb-2 text-muted text-uppercase small">Color: {cosmeticonuevo.color}</p>
                                </div>
                                <div class="col-lg-5">
                                    <div class="def-number-input number-input safari_only mb-0 w-100 row">
                                        <button  class="bordeBoton btn-agregar">+</button>
                                        <p class="textoDentro mb-0" >{cantidad}</p>
                                        <button  class="btn-quitar bordeBoton">-</button>
                                        <button  class="bordeBoton btn-eliminar  btn-danger" onClick={onDelete} >x</button>
                                    </div>                 
                                </div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <a href="#!" type="button" class="card-link-secondary small text-uppercase mr-3"><i class="fas fa-trash-alt mr-1"></i></a>
                                    <a href="#!" type="button" class="card-link-secondary small text-uppercase"><i class="fas fa-heart mr-1"></i></a>
                                </div>
                                <p class="mb-0"><span><strong>$ {cosmeticonuevo.price}</strong></span></p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
    );
}

export default ItemCart