
import React, { useState } from 'react'
import getItems from '../Services/mockAPI';
import { useEffect } from 'react';
import ItemList from './ItemList';


function ItemListContainer(props) {
    let [data, setData] = useState([]);

    useEffect(() => {
        getItems().then((respuesta) => {
            setData(respuesta);
        });
    }, []);


    return (
        <div>
            <h1>{props.greeting}</h1>
            <div className="main container">
                <ItemList data={data} />
            </div>
        </div>
    )
}

export default ItemListContainer;