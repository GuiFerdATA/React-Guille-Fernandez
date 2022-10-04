import React from 'react'
import Button from '../Button/Button';
import "./card.css";
import { Link } from 'react-router-dom';


function Card(props) {

  const urlDetalle = `/producto/${props.id}`; 

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
      
      
      <div>
        <Link to={urlDetalle}>
        <Button>Ver más</Button>
        </Link>
      </div>
      
    </div>
  )
}

export default Card;


