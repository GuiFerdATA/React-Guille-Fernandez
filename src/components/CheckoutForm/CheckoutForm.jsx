import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import { createBuyOrder } from '../Services/firestore';

function CheckoutForm() {
    const [dataForm, setDataForm] = useState({
        name: "",
        phone: "",
        email: "",
    });


    const navigate = useNavigate()
    const context = useContext(CartContext)
    const { cart, getItemPrice} = context;


    function handleCheckout(event){
        event.preventDefaul();
        const orderData = {
            buyer:{
                buyer: dataForm,
                items: cart,
                total: getItemPrice(),
            },
            items:cart,
            total: getItemPrice(),
        }
        createBuyOrder(orderData).then(orderid=>{
            alert(orderid);
            navigate(`/checkout/${orderid}`)
            
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
                <p>Completa los siguientes datos para poder finalizar</p>

                <div className="form-item">
                    <label htmlFor="name">Nombre</label>
                    <input
                        value={dataForm.name}
                        onChange={inputChangeHandler}
                        name="name"
                        type="text"
                        placeholder="Nombre"
                        required
                    />
                </div>

                <div className="form-item">
                    <label htmlFor="telefono">Telefono</label>
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
            
            </form>
        </div>
    )
}

export default CheckoutForm;


