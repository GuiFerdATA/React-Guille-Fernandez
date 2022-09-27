import React from 'react'



function ItemDetail(props) {

    return (
        <div>
            <div className="main container">
                <img src={props.img} alt="card img" />
            </div>
            <div className="card-detail">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <h4>$ {props.price}</h4>
            </div>
        </div>
    );
}

export default ItemDetail;