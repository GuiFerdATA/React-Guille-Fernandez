import React, { useState } from "react";
import Button from "../Button/Button";
import swal from "sweetalert";
import "./itemcount.css";



function ItemCount({ stock, initial, onAddToCart }) {
    const [count, setCount] = useState(1);

    function handleAdd() {
        if(count === stock){
            swal({
                title:"¡Ohoh!",
                text:"¡Máximo de Stock disponible!",
                icon:"warning",
                button:"Aceptar"
            });
    } else {
        setCount(count + 1)
        if (count < stock) setCount(count + 1);
    }
    initial = stock - count;
}

    function handleSubstract() {
        if(count === 1) {
            swal({
                title:"¡Ups!",
                text:"¡Necesitas tener al menos, un objeto de compra en tu carrito!",
                icon:"warning",
                button:"Aceptar"
        });
    }else{
        setCount(count - 1)
        console.log("ok");
        if (count > 1) setCount(count - 1);
    }
}

    return (
        <div className="itemcount_container">
            <div className="itemcount_control">
                <Button color="#14A44D" onClick={handleSubstract}>-</Button>
                <span>{count}</span>
                <Button color="#14A44D" onClick={handleAdd}>+</Button>
            </div>
            <div className="itemcount_btns">
                <Button color="#14A44D" onClick={() => { onAddToCart(count); }} > Agregar al carrito</Button>
            </div>
        </div>
    );
}

export default ItemCount;