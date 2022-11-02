import React from 'react'
import { useParams } from "react-router-dom";

import "./checkout.css"


function Checkout() {
    const {orderid} = useParams();


    return (
        <div className="divContainer_checkout">
            <h3>¡¡Gracias por tu compra!!</h3>
            <p>El número de comprobante de tu compra es:</p>
  
            <p className="orderId">{orderid}</p>
        </div>
    )
}

export default Checkout