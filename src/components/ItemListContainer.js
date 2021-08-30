export const ItemListContainer=({cosmeticonuevo})=>{
    return (
    <div>
        <br />
        <br />
        <br />
        <div class="col-4">
            <div class="card">
    <img src={cosmeticonuevo.imagen} class="card-img-top trans imagenContenedor bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid" alt="cosmetico" />
                <div class="card-body">
            <h5 class="card-title">{cosmeticonuevo.nombre}</h5>
            <p class="card-text">{cosmeticonuevo.descripcion}</p>
            <p class="card-text">Color {cosmeticonuevo.color}</p>
            <h2 class="card-title"> Precio $ {cosmeticonuevo.precio} </h2> 
            <a href="#"  class="btn btn-color btn-primary btn-comprar">Comprar</a>
                </div>
            </div>
        </div>
    </div>
    );

}

export const cosmetico ={
    nombre:'Labial Graduable Mate Studio Look',
    descripcion:'¡Tú decides la intensidad! Labial en barra con acabado mate de textura ultra ligera',
    color:'wine',
    precio:109.90,
    imagen:'https://cyzone.tiendabelcorp.com/cdn-cgi/image/width=1200,fit=contain,f=auto/https://belc-bigdata-mdm-images-prd.s3.amazonaws.com/images/FotoProductoFondoBlancoWebRedes/200098795_fotofondoblanco.jpg'
}
