
import React, { useState } from 'react'
import getItems from '../Services/mockAPI';
import { useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import { getItemsByCategory } from "../Services/mockAPI"
import { DotSpinner } from '@uiball/loaders'




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
            getItemsByCategory(id).then((respuestaDatos) => setData(respuestaDatos))
                .finally(() => setIsLoading(false))
        }
    }, [id]);


    return (
        <div>
            {
                isLoading && <DotSpinner
                    size={60}
                    speed={0.9}
                    color="#01579B"
                />
            }
            <h1>{props.greeting}</h1>
            <div className="main container">
                <ItemList data={data} />
            </div>
        </div>
    )
}

export default ItemListContainer;