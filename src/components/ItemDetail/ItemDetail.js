import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({productSelected}) => {

  return (
    <div>
        <img src={productSelected.img} />
        <h1>{productSelected.tittle}</h1>
        <h2>{productSelected.category}</h2>
        <p>{productSelected.description}</p>
        <h2> Precio ${productSelected.price}</h2>
    </div>
  )
};

export default ItemDetail