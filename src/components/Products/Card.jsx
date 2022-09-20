import React from 'react'

import ItemCount from '../ItemCount/ItemCount';
import Button from '../Button/Button';
import "./card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.img} alt="card img" />
      </div>
      <div className="card-detail">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <h4>$ {props.price}</h4>
      </div>
      <ItemCount initial={1} stock={6}/>
      
      <div>
        <Button text="Ver más" />
      </div>
      
    </div>
  )
}

export default Card;