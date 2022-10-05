import React, {useState} from 'react';
import "./itemdatailcontainer.css";
import {Link} from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';
import Button from "../Button/Button";




function ItemDetail(props) {



const [attItemsCount, setItemsCount] = useState(true);

function onAddToCart(count){
    alert(`Agregaste ${count} productos a tu carrito de compras! `);
    setItemsCount(false);
    
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
                {attItemsCount === true? <ItemCount initial={1} stock={6}  onAddToCart={onAddToCart}/>: <Link to="/cart"> <Button>Finalizar compra</Button></Link>}
                
            </div>
        </div>
    );
}

export default ItemDetail;