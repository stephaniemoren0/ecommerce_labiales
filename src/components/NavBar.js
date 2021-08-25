export function NavBar(){
    return(
        <header>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark" >
            <hi class="color">Lyzone</hi>
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">Home</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="html/labiales.html">Labiales</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="html/paletas.html">Paletas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="html/bases.html">Bases</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="html/delineadores.html">Delineadores</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="html/otros.html">Otros</a>
                        </li>
                    </ul>
                    <div class="col-4">
                        <form class="d-flex" id="miBusqueda">
                            <input id="filtrado" onkeyup="buscarProducto()" class="form-control me-2" type="search" placeholder="Estoy buscando..." aria-label="Search" /></form>
                    </div>
                    <div>
                    <Carrito />
                    </div>
                </div>
            </div>
                </nav>
                </header>
    )
}

export function Carrito(){
    return(
        <div class="dropdown">
            <button class="btn btnColor dropdown-toggle color" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            🛒 Carrito <span id="notificacionCarrito" class="badge badge-dark">0</span>
            </button>
            <div id="productosCarrito" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            </div>
        </div>
    )
}


