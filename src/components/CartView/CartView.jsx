import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import Button from "../Button/Button";


function CartView() {
    const context = useContext(CartContext);
    const { cart, deleteItem} = context;

    

    if (cart.length === 0) {
        return <div>
            <p>¡Ohps!...tu carrito está vacio,necesitas comprar un objeto</p>
            <Link to="/"><Button>Seguir navegando</Button></Link></div>;
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
                    <Button className="btn" onClick={deleteItem}>Vaciar Carrito</Button>
                </div>
            ))}
        </div>
    );
}

export default CartView;