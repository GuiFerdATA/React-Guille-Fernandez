import { useContext } from 'react';
import "./itemdatailcontainer.css";
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../Context/CartContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';



function ItemDetail(props) {
    const [isInCart, setIsInCart] = useState(false);
    const { addItem } = useContext(CartContext)


    function onAddToCart(count) {
        addItem(ItemCount, count);
        setIsInCart(true);
    }

    return (

        <div className='cCs'>
            <div className="main-container">
            {props.offer === true && <span style={{ color: "#14A44D" }}>Producto  EN OFERTA</span>}

                <h3>{props.title}</h3>
                <img src={props.img} alt="card-img" />
            </div>
            <div className="card-detail">
                {props.stock === 0 && <span style={{ color: "#DC4C64" }}>Producto SIN STOCK</span>}
                <p>{props.description}</p>
                <h4>${props.price}</h4>
                {
                    !isInCart ?
                        <ItemCount initial={1} stock={6} onAddToCart={onAddToCart} />
                        :
                        <Link to="/cart">Ir al carrito</Link>
                }
            </div>
        </div>
    );
}

export default ItemDetail;