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
                    
                    <p>Titulo:{item.title}</p>
                    <p>Cantidad de objetos: {item.count}</p>
                    <p>Precio: ${item.price} </p>
                    <p>{item.price * item.count}</p>
                </div>
            ))}
        </div>
    );
}

export default CartView;