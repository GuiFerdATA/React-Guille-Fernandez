import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

function CartView() {
    const context = useContext(CartContext);
    const { cart } = context;

    let carritovacio = false;

    if (carritovacio) {
        return <div>Tu carrito está vacio...</div>;
    }
    return (
        <div>
            {cart.map((item) => (
                <div>
                    
                    <h5>Titulo:{item.title}</h5>
                    <p>Cantidad de objetos: {item.count}</p>
                    <p>Suma total: $ </p>
                    <h3>{item.title}</h3>
                    
                </div>
            ))}
        </div>
    );
}

export default CartView;