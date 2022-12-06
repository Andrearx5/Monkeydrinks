import './ItemDetail.css'
import { useState } from 'react'
import { useCartContext } from '../../context/CartProvider'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';



  export const ItemDetail = ({data}) => {

    const [goToCart, setGoToCart]  = useState(false);
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
        <div> 
          
          <div className='btCart'><Link className='styletext' to='/cart'>Ver mi carrito</Link></div> 
          <div className='btCart'><Link className='styletext'to='/'>Agregar mas productos</Link></div>

        </div>  

        : <ItemCount initial={1} stock={20} onAdd={onAdd}/>
          
      }
        </div>     
               
    
  );
};

export default ItemDetail;