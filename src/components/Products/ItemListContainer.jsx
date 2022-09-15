
import React from 'react'
import Card from './Card';
import "./card.css";


function ItemListContainer() {
  return (
    <div>
        <h1>Productos</h1>
        <div className="main container">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}

export default ItemListContainer