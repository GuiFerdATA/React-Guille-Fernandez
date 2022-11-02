import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import { createBuyOrder } from "../Services/firestore";
import "./checkoutform.css";

function CheckoutForm() {

    const [dataForm, setDataForm] = useState({
        email: "",
        name: "",
        phone: "",
        
    });
    
    const navigate = useNavigate();
    const context = useContext(CartContext);
    const { cart, getItemPrice} = context;

    function handleCheckout(event) {
        event.preventDefault();
        console.log(dataForm);
        const orderData = {
                buyer: dataForm,
                items: cart,
                date: new Date(),
                total: getItemPrice(),
        };
        console.log(orderData);
        createBuyOrder(orderData).then((orderid)=>{
            navigate(`/checkout/${orderid}`);
            console.log(orderid)
        });
    }

    function inputChangeHandler(event) {
        let inputName = event.target.name;
        let value = event.target.value;

        const newDataForm = { ...dataForm };
        newDataForm[inputName] = value;
        setDataForm(newDataForm);
    }

    return (
        <div className="form-container">
            <form onSubmit={handleCheckout}>
                <p className="parrafo_form">Completa los siguientes datos para poder finalizar</p>
                <div className="form-item">

                    <label htmlFor="name">Nombre</label>
                    <input
                        value={dataForm.name}
                        onChange={inputChangeHandler}
                        name="name"
                        type="text"
                        placeholder="Name"
                        required
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="phone">Telefono</label>
                    <input
                        value={dataForm.phone}
                        onChange={inputChangeHandler}
                        name="phone"
                        type="text"
                        placeholder="Telefono"
                        required
                    />
                </div>

                <div className="form-item">
                    <label htmlFor="email">Email</label>
                    <input
                        value={dataForm.email}
                        onChange={inputChangeHandler}
                        name="email"
                        type="text"
                        placeholder="Correo"
                        required
                    />
                </div>
                
                <button className="button-submit_form" type="submit">¡Finalizá tu compra!</button> 
            </form>
        </div>
    )
}

export default CheckoutForm;



