import React from 'react'
import Card from './Card'
function ItemList(props) {
    return (
        <div>
            
            {
                props.data.map((item) => {
                    return <Card
                        key={item.id}
                        id={item.id}
                        offer={item.offer}
                        title={item.title}
                        img={item.img}
                        description={item.description}
                        price={item.price}
                        stock={item.stock}
                    />
                })
            }
        </div>
    )
}

export default ItemList;