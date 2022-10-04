import React from 'react'
import "./itemdatailcontainer.css"
import ItemCount from '../ItemCount/ItemCount';



function ItemDetail(props) {

function onAddToCart(count){
    alert(`Agregaste ${count} productos a tu carrito de compras! `);
}
    return (
        <div className='cCs'>
            <div className="main-container">
            <h3>{props.title}</h3>
                <img src={props.img} alt="card-img" />
            </div>
            <div className="card-detail">
                <p>{props.description}</p>
                <h4>$ {props.price} 
                <ItemCount initial={1} stock={6}  onAddToCart={onAddToCart}/>
                </h4>
                
            </div>
        </div>
    );
}

export default ItemDetail;