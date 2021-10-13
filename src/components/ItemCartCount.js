
import { useState } from "react";


const ItemCartCount=({cantidad, stock, onAdd})=>{
    const [añadir, setAñadir] = useState(cantidad)
    const actualizarCompra = () =>{
        onAdd(añadir);
    }
    const agregar = ()=>{
        if (añadir>1){
        setAñadir(añadir-1)
        actualizarCompra()
        }
    }
    const quitar =()=>{ 
        if (añadir<stock){
            setAñadir(añadir+1)
            actualizarCompra()
            }
        }
    return (
    <div class="def-number-input number-input safari_only mb-0">
        <div class="container-fluid">
            <a href="#" class="btnColor bordeBoton" onClick={agregar}  class="btn btnColor btn-dark">-</a>
            <a class="col-sm-8">{añadir}</a>
            <a href="#" class="borderBoton btnColor" onClick={quitar} class="btn  btnColor btn-dark">+</a>
        </div>
    </div>
    );
}

export default ItemCartCount