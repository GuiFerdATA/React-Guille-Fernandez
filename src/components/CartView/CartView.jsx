import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import "./cartview.css"
import CheckoutForm from "../CheckoutForm/CheckoutForm";

function CartView() {
    const context = useContext(CartContext);
    const { cart, deleteItem, getItemPrice,  emptyCart } = context;

    if (cart.length === 0) {
        return <div className="divContainer_cartview">
            <p>¡Ohps!...tu carrito está vacio,necesitas comprar un objeto</p>
            <Link to="/"><button className="button_cartView">Seguir navegando</button></Link></div>;
    }


    return (
        <div className="divContainer_carrito">
            <h3 className="title_cart">Carrito de compras</h3>
            <table className="table">
                <thead className="tablet_thead">
                    <tr className="tr">
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Eliminar</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => {
                        return (
                            <tr key={item.id} className="">
                                <td>
                                    <img height={50} src={item.img} alt={item.title} />
                                </td>
                                <td>{item.title}</td>
                                <td>$ {item.price}</td>
                                <td>{item.count}</td>
                                <td>
                                    <button className="button_cartView_delete" onClick={() => deleteItem(item.id)}>X</button>
                                </td>
                                <th>$ {item.price * item.count}</th>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <h3 className ="title_cart">El total de tu compra es de $ {getItemPrice()}</h3>
            <CheckoutForm />
            <Link to="/"><button className="button_cartView">¡Segui navegando!</button></Link>
            <button className="button_cartView" onClick={emptyCart}>¡Vaciá tu carrito!</button>
        </div>

    );
}
export default CartView;

