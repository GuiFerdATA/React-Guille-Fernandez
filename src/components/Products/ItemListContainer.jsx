
import React from 'react'
import Card from './Card';
import "./card.css";


function ItemListContainer(props) {
    return (
        <div>
            <h1>{props.greeting}</h1>
            <div className="main container">
                <Card
                    title="Objecto Ecommerce 1"
                    price={250.00}
                    description="lorem ipsum dolor sit amet, consectetur adipisicing elit"
                    img="https://ibo.pe/blog/wp-content/uploads/2019/12/tipos-de-e-commerce-que-debes-conocer-para-tus-ventas-en-linea.jpg"
                />
                <Card
                    title="Objecto Ecommerce 2"
                    price={250.00}
                    description="lorem ipsum dolor sit amet, consectetur adipisicing elit"
                    img="https://ibo.pe/blog/wp-content/uploads/2019/12/tipos-de-e-commerce-que-debes-conocer-para-tus-ventas-en-linea.jpg"
                />
                <Card
                    title="Objecto Ecommerce 3"
                    price={80.00}
                    description="lorem ipsum dolor sit amet, consectetur adipisicing elit"
                    img="https://ibo.pe/blog/wp-content/uploads/2019/12/tipos-de-e-commerce-que-debes-conocer-para-tus-ventas-en-linea.jpg"
                />
                <Card
                    title="Objecto Ecommerce 4"
                    price={1200.00}
                    description="lorem ipsum dolor sit amet, consectetur adipisicing elit"
                    img="https://ibo.pe/blog/wp-content/uploads/2019/12/tipos-de-e-commerce-que-debes-conocer-para-tus-ventas-en-linea.jpg"
                />
                <Card
                    title="Objecto Ecommerce 5"
                    price={300.00}
                    description="lorem ipsum dolor sit amet, consectetur adipisicing elit"
                    img="https://ibo.pe/blog/wp-content/uploads/2019/12/tipos-de-e-commerce-que-debes-conocer-para-tus-ventas-en-linea.jpg"
                />
                <Card
                    title="Objecto Ecommerce 6"
                    price={620.00}
                    description="lorem ipsum dolor sit amet, consectetur adipisicing elit"
                    img="https://ibo.pe/blog/wp-content/uploads/2019/12/tipos-de-e-commerce-que-debes-conocer-para-tus-ventas-en-linea.jpg"
                />
            </div>
        </div>
    )
}

export default ItemListContainer;