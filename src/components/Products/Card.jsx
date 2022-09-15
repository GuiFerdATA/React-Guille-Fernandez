import React from 'react'
import "./card.css";

function Card() {
  return (
    <div className="card">
        <div className="card-img">
            <img src="" alt="card img" />
        </div>    
        <div className="card-detail">
            <h3>Productos</h3>
            <p>Descripcion</p>
            <h4>$ 780</h4>
        </div>
        <a href="-">Ver más</a>
    </div>
  )
}

export default Card;