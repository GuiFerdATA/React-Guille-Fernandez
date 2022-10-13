import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import Button from "../Button/Button";
import "./cartview.css"


function CartView() {
    const context = useContext(CartContext);
    const { cart, deleteItem, getItemPrice} = context;

    

    if (cart.length === 0) {
        return <div>
            <p>¡Ohps!...tu carrito está vacio,necesitas comprar un objeto</p>
            <Link to="/"><Button>Seguir navegando</Button></Link></div>;
    }
    return (
        <div>
            {cart.map((item) => (
                <div className="div-general">
                <div>
                    <div>
                    <img className='cartview-img' src={item.img} alt={item.title} />
                </div>
                <div>
                    <h4>{item.id}</h4>
                    <h4>Cantidad de objetos: {item.count}</h4>
                    <h4>Nombre de objeto:{item.title}</h4>
                    <h4>Precio: ${item.price} </h4>
                </div>
                </div>
                <h2 className='cartview-total'>Total: ${getItemPrice()}</h2>
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