import React from 'react'
import "./card.css";
import { Link } from 'react-router-dom';


function Card(props) {
let {price, title, description, img, id, stock,} = props;

const urlDetalle = `/producto/${id}`; 


  return (
    <div className="card">
      {props.offer === true && <span style={{ color: "#14A44D" }}>¡¡OFERTA!!</span>}
      <div className="card-img">
        <img src={img} alt="card img" />
      </div>
      <div className="card-detail">
        <h3>{title}</h3>
        <p>{description}</p>
        <h4>$ {price}</h4>
        {props.stock === 0 && <span style={{ color: "#DC4C64" }}>Producto SIN STOCK</span>}

        <h5>Stock Disponible {stock}</h5>        
      </div>
      <div>
        <Link to={urlDetalle}>
        <button className="button_cardSeeMore">Ver más</button>
        </Link>
      </div>
      
    </div>
  )
}

export default Card;


