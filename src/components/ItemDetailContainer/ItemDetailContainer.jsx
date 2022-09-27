import React, { useState, useEffect } from "react";
import { getItem } from "../Services/mockAPI";
import "./itemdatailcontainer.css"
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  let [data, setData] = useState({});

  useEffect(() => {
    getItem(2).then((respuestaDatos) => setData(respuestaDatos));
  }, []);

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
