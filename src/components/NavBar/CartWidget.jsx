import React from 'react'
import "../NavBar/navbar.css"
//2 - Importar componente FontAwsomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// 3 - Importar icono deseado de alguna de la libreria de iconos gratuitos
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../Context/CartContext";
import { useContext } from 'react';


function CartWidget() {

    const { getItemQty } = useContext(CartContext);


    return (
        <div className="card-widget">
            <FontAwesomeIcon icon={faCartArrowDown} />
            <span>{getItemQty()}</span>
        </div>
    )
}

export default CartWidget