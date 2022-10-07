import React, { useState } from "react";
import Button from "../Button/Button";
import "./itemcount.css";



function ItemCount({ stock, initial, onAddToCart }) {
    const [count, setCount] = useState(1);

    function handleAdd() {
        if(count === stock){
            alert("Máximo de Stock disponible!")
    } else {
        setCount(count + 1)
        if (count < stock) setCount(count + 1);
    }
    initial = stock - count;
}

    function handleSubstract() {
        if(count === 1) {
            alert("Necesitas tener un objeto de compra en tu carrito");
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