import React, {useState} from 'react';
import "./itemdatailcontainer.css";
import {Link} from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';



function ItemDetail(props) {



const [showItemsCount, setShowItemsCount] = useState(true);

function onAddToCart(count){
    alert(`Agregaste ${count} productos a tu carrito de compras! `);
    setShowItemsCount(false);
    
}
    return (
        <div className='cCs'>
            <div className="main-container">
            <h3>{props.title}</h3>
                <img src={props.img} alt="card-img" />
            </div>
            <div className="card-detail">
                <p>{props.description}</p>
                <h4>$ {props.price}</h4>
                {showItemsCount === true? <ItemCount initial={1} stock={6}  onAddToCart={onAddToCart}/>: <Link to="/cart"> <button>Finalizar compra</button></Link>}
                
            </div>
        </div>
    );
}

export default ItemDetail;