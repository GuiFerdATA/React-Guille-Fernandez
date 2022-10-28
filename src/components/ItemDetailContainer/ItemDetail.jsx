import { useContext } from 'react';
import "./itemdatailcontainer.css";
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../Context/CartContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';



function ItemDetail(item) {
    const [isInCart, setIsInCart] = useState(false);
    const { addItem } = useContext(CartContext)


    function handleAddToCart(count) {
        addItem(item, count);
        setIsInCart(true);
    }

    return (

        <div className='cCs'>
            <div className="main-container">
                {item.offer === true && <span style={{ color: "#14A44D" }}>¡PRODUCTO EN OFERTA!</span>}
                <h3>{item.title}</h3>
                <img src={item.img} alt="card-img" />
            </div>
            <div className="card-detail">
                {item.stock === 0 && <span style={{ color: "#DC4C64" }}>Producto SIN STOCK</span>}
                <p>{item.description}</p>
                <h4>${item.price}</h4>
                {
                    !isInCart ? 
                        <ItemCount initial={1} stock={6} onAddToCart={handleAddToCart} />
                    : 
                        <Link to="/cart">
                            <Button>Ir al carrito</Button>
                        </Link>
                    }


            </div>
        </div>
    );
}

export default ItemDetail;