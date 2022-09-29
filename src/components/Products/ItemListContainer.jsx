
import React, { useState } from 'react'
import getItems from '../Services/mockAPI';
import { useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import {getItemsByCategory} from "../Services/mockAPI"


function ItemListContainer(props) {
    let [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        if (id === undefined) {
            getItems().then((respuestaDatos) => setData(respuestaDatos));
        } else {
            getItemsByCategory(id).then((respuestaDatos) => setData(respuestaDatos));
        }
    }, [id]);


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