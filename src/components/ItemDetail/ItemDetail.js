import './ItemDetail.css'
import { useState } from 'react'
import { useCartContext } from '../../context/CartProvider'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';


  export const ItemDetail = ({data}) => {

    const { goToCart, setGoToCart} = useState(false);
    const {addProduct} = useCartContext()

    const onAdd = (quantity) => {
      setGoToCart(true);
      addProduct(data, quantity);
  }

  return (
    <div className="cardProduct">
    
        <img alt={data.tittle} src={`/${data.imageId}`} />
        <h1>{data.tittle}</h1>
        <h3>{data.category}</h3>
        <p>{data.description}</p>
        <h3> Precio: ${data.price}</h3>

        {
             goToCart
             ? 
                <div className='boton_bt'>
      
                   <div><Link to='/cart'>Ver mi carrito</Link></div>
                   <div><Link to='/'>Seguir comprando</Link></div>
                              
                </div>
      
              : <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            }
           
               
    </div>
  );
}

export default ItemDetail;