import React from 'react'

function ItemCount(props) {
    let [count, setCount] = React.useState(props.initial)

    function handleAdd() {
        if(count === props.stock){
            alert("Máximo de Stock disponible!")
    } else {
        setCount(count + 1)
    }
    props.initial = props.stock - count;
}

    function handleSubstract() {
        if(count === 1) {
            alert("Necesitas tener un objeto de compra en tu carrito");
    }else{
        setCount(count - 1)
    }
}
    return (
        <div>
            <button onClick={handleAdd}>+</button>
            <span>{count}</span>
            <button onClick={handleSubstract}>-</button>
        </div>
    )
}

export default ItemCount 