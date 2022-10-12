import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import Button from "../Button/Button";

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
                    <h2>Cantidad de objetos: {item.count}</h2>
                    <h4>Nombre de objeto:{item.title}</h4>
                    <h2>Precio: ${item.price} </h2>
                    <h2>Total: ${item.price * item.count}</h2>
                    
                    <Link to="*">
                        <Button>Finalizar compra</Button>
                    </Link>
                    <Link to="/">
                        <Button>Seguir navegando</Button>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default CartView;