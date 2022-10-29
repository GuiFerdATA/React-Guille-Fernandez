import React, { useState, useEffect } from "react";
import { getSingleItem } from "../Services/firestore";
import "./itemdatailcontainer.css"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { DotSpinner } from '@uiball/loaders'



function ItemDetailContainer() {
  const [data, setData] = useState({});

  const [error, setError] = useState(false)
  const { id } = useParams();


  useEffect(() => {
    getSingleItem(id)
      .then((respuestaDatos) => setData(respuestaDatos))
      .catch((errormsg) => {
        setError(errormsg.message);
      });
  }, [id]);

  if (!data.title) {
    return <>
      {error ?
        <div>
          <h3>{error}</h3>
        </div>
        :
        <DotSpinner className="dot_spinner"
          size={60}
          speed={0.9}
          color="#01579B"
        />}
    </>
  }


  return (
    <div>
      <ItemDetail
        key={data.id}
        id={data.id}
        img={data.img}
        title={data.title}
        description={data.description}
        price={data.price}
        stock={data.stock}
        offer={data.offer}
      />
    </div>
  );
}

export default ItemDetailContainer;
