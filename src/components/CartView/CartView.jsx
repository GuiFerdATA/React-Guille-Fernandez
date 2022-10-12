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
        return <div>
            <p>Tu carrito está vacio...</p>
            <Link to="/">
            <Button>Seguir navegando</Button>
            </Link>
            </div>;
    }
    return (
        <div>
            {cart.map((item) => (
                <div>
                    <h4>Cantidad de objetos: {item.count}</h4>
                    <h4>Nombre de objeto:{item.title}</h4>
                    <h4>Precio: ${item.price} </h4>
                    <h4>Total: ${item.price * item.count}</h4>
                    
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