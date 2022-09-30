import React, { useState, useEffect } from "react";
import { getItem } from "../Services/mockAPI";
import "./itemdatailcontainer.css"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  let [data, setData] = useState({});

const {id} = useParams();


  useEffect(() => {
    getItem(id).then((respuestaDatos) => setData(respuestaDatos));
  },[id]);

  return (
    <div>
      <ItemDetail
        img={data.img}
        title={data.title}
        description={data.description}
        price={data.price}
/>
    </div>
  );
}

export default ItemDetailContainer;
 