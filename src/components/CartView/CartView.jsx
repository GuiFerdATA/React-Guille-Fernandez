import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import Button from "../Button/Button";
import "./cartview.css"


function CartView() {
    const context = useContext(CartContext);
    const { cart, deleteItem, getItemPrice } = context;



    if (cart.length === 0) {
        return <div>
            <p>¡Ohps!...tu carrito está vacio,necesitas comprar un objeto</p>
            <Link to="/"><Button>Seguir navegando</Button></Link></div>;
    }
    return (
        <>
            <h3>Carrito de compras</h3>
            <table className="">
                <thead className="">
                    <tr className="">
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
                                    <Button onClick={deleteItem}>X</Button>
                                </td>
                                <th>$ {item.price * item.count}</th>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <h3>El total de tu compra es de $ {getItemPrice()}</h3>
            <Link to="/"><Button>¡Segui navegando!</Button></Link>
            <Link to="*"><Button>¡Finalizá tu compra!</Button></Link>
            <Link to=""><Button className="btn" onClick={deleteItem}>¡Vaciá tu carrito!</Button></Link>
        </>
        
    );
}
export default CartView;


