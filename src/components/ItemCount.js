import { useState } from "react";

export const ItemCount=({stock, onAdd})=>{
    const [itemCount, setItemCount] = useState(1)
    const comprar = () =>{
        onAdd(itemCount);
    }
    return (
        <div class="def-number-input number-input safari_only mb-0">
    <div class="container-fluid">
    <a href="#" onClick={()=>{
        if (itemCount>1){
        setItemCount(itemCount-1)}
    }}  class="btn btn-color btn-dark">-</a>
    <a class="col-sm-8">{itemCount}</a>
    <a href="#" onClick={()=>{ 
        if (itemCount<stock){
        setItemCount(itemCount+1)}
    }} class="btn  btn-color btn-dark">+</a>
    <br />

    <br />
    <a href="#" onClick={comprar} class="btn btnColor btn-color color btn-comprar">Comprar</a>
    </div>
</div>
    );
}