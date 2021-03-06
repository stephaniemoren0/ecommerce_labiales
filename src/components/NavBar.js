import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";


function NavBar(){
    return(
        <header>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark" >
            <h1 class="color">Lyzone</h1>
            <div class="container-fluid">
            
            <Link class="nav-link active"  to="/">
                <NavLink to="/">Home</NavLink>
            </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                        <li class="nav-item">
                            <Link class="nav-link active"  to="/categoria/labial">
                                labial
                            </Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active"  to="/categoria/paleta">
                                paleta
                            </Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active"  to="/categoria/base">
                                bases
                            </Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active"  to="/categoria/delineador">
                                delineadores
                            </Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active"  to="/categoria/otros">
                                otros
                            </Link>
                        </li>
                    </ul>
                    
                    <div class="col">
                    <CartWidget />
                    </div>
                </div>
            </div>
                </nav>
                </header>
    )
}



export default NavBar

