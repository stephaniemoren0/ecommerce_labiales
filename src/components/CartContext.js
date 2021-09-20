import { createContext, useState, useContext } from "react";


const CartContext = createContext();

export const UseCartContext = () =>  useContext(CartContext)

function CartContextProvider ({children}){
    const[cosmeticos, setCosmeticos] = useState([]);
    function IsInCart (id){
        const cosmeticoEncontrado = cosmeticos.find(cosmetico=>cosmetico.item.id==id)
        if(cosmeticoEncontrado==null){
            return false;
        }
        else{
            return true;
        }
    }
    function agregarAlCarrito(cosmeticoNuevo, cantidad){
        const isInCart = IsInCart(cosmeticoNuevo.id);
        if(isInCart){
            var cosmeticoEncontrado = cosmeticos.find(cosmetico=>cosmetico.item.id==cosmeticoNuevo.id)
            cosmeticoEncontrado.quantity = cosmeticoEncontrado.quantity + cantidad;
            setCosmeticos([...cosmeticos])
        }
        else{
            setCosmeticos([...cosmeticos, {item: cosmeticoNuevo, quantity:cantidad}])
        }
    }
    const borrarListado=()=>{
        setCosmeticos([])
    }
    const borrarItem=(id)=>{
        const borrarCosmetico = cosmeticos.filter((cosmetico) => cosmetico.item.id !== id);        
        setCosmeticos([...borrarCosmetico]);
    }

    console.log(cosmeticos)

    return(
        <CartContext.Provider value={{
            cosmeticos,
            agregarAlCarrito,
            borrarListado,
            borrarItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider