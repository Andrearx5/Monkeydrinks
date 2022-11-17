import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({productSelected}) => {

  return (
    <div className="cardProduct">
    
        <img src={`/${productSelected.img}`} alt={productSelected.name} />
        <h1>{productSelected.tittle}</h1>
        <h3>{productSelected.category}</h3>
        <p>{productSelected.description}</p>
        <h3> Precio $: {productSelected.price}</h3>
    <ItemCount/>
    </div>


  )
};

export default ItemDetail