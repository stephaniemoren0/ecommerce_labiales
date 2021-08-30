import { useState } from "react";

export const ItemCount=(props)=>{
    const [itemCount, setItemCount] = useState(1)
    return (
    <div class="container-fluid">
    <a href="#" onClick={()=>{
        if (itemCount>1){
        setItemCount(itemCount-1)}
    }}  class="btn btn-color btn-dark">-</a>
    <a class="col-sm-8">{itemCount}</a>
    <a href="#" onClick={()=>{ 
        if (itemCount<props.stock){
        setItemCount(itemCount+1)}
    }} class="btn  btn-color btn-dark">+</a>
    </div>
    );
}