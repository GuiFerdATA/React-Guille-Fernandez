import React from 'react'
import "../NavBar/navbar.css"
//2 - Importar componente FontAwsomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// 3 - Importar icono deseado de alguna de la libreria de iconos gratuitos
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";


function CartWidget() {
    return (
        <div className='icon-cart'>
            <FontAwesomeIcon icon={faCartArrowDown} />
            <span>0</span>
        </div>
    )
}

export default CartWidget