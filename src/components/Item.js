import { Link } from "react-router-dom";
import { ItemCount } from "./ItemCount"


const Item=({cosmeticonuevo})=>{
    return (
        <div class="col-4 ">
            <div class="card separacion">
    <img src={cosmeticonuevo.imagenId} class="card-img-top trans imagenContenedor bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid" alt="cosmetico" />
                <div class="card-body">
            <h5 class="card-title">{cosmeticonuevo.title}</h5>
            <p class="card-text">{cosmeticonuevo.description}</p>
            <p class="card-text">Color {cosmeticonuevo.color}</p>
            <h2 class="card-title"> Precio $ {cosmeticonuevo.price} </h2> 
            <br />
            <Link class="btn btn-color btn-primary btn-comprar" to={`/item/${cosmeticonuevo.id}`}> Ver Detalle</Link>
                </div>
            </div>
        </div>
        
    );

}

export default Item