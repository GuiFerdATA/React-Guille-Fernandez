
import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import { DotSpinner } from '@uiball/loaders'
import { getItems, getItemsByCategory } from "../Services/firestore";
import "./card.css"



function ItemListContainer(props) {
    const [data, setData] = useState([]);
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true);
        if (id === undefined) {
            getItems().then((respuestaDatos) => setData(respuestaDatos))
            .finally(() => setIsLoading(false));
        } else {
            getItemsByCategory(id).then((respuestaDatosFiltrados) => setData(respuestaDatosFiltrados))
                .finally(() => setIsLoading(false))
        }
    }, [id]);


    return (
        <div className='div-itemList-Container'>
            <h1 className='titleGreting'>{props.greeting}</h1>
            <div className="dotSpinner">
            {
                isLoading && <DotSpinner
                    size={90}
                    speed={0.9}
                    color="#01579B"
                />
            }
            </div>
            <div className="main container">
                <ItemList data={data} />
            </div>
        </div>
    )
}

export default ItemListContainer;