import  {useContext} from 'react';
import "./itemdatailcontainer.css";
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../Context/CartContext';



function ItemDetail(props) {

const { addItem } = useContext(CartContext)
function onAddToCart(count){
    
    addItem(ItemCount, count)

    
    
}
    return (
        <div className='cCs'>
            <div className="main-container">
            <h3>{props.title}</h3>
                <img src={props.img} alt="card-img" />
            </div>
            <div className="card-detail">
                <p>{props.description}</p>
                <h4>$ {props.price}</h4>
                <ItemCount initial={1} stock={6}  onAddToCart={onAddToCart}/>
                
            </div>
        </div>
    );
}

export default ItemDetail;