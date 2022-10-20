import { createContext, useState } from "react";

export const CartContext = createContext();

const { Provider } = CartContext
const MyProvider = ({ children }) => {
const [cart, setCart] = useState([]);


    const addItem = (item, count) => {
        const newItem = {
            ...item,
            count
        }

        if (isInCart(newItem.id)) {
            const findProduct = cart.find(x => x.id === newItem.id);
            const productIndex = cart.indexOf(findProduct);
            const auxArray = [...cart];
            auxArray[productIndex].count += count;
            setCart(auxArray);
        } else {
            setCart([...cart, newItem]);
        }

    }


    const emptyCart = () => {
        setCart([])
    }
    

    const deleteItem = (id) => {
        return setCart(cart.filter(item => item.id !== id));
    }


    const getItemQty = () => {
        return cart.reduce((acc, item) => acc += item.count, 0);                     
    }


    const getItemPrice = () => {
        return cart.reduce((acc, item) => acc += item.count * item.price, 0);
    }



    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }



    return <Provider value={{cart, isInCart, addItem, emptyCart, deleteItem, getItemQty, getItemPrice }}> {children} </Provider>

}

export default MyProvider;

