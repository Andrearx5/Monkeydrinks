import { Link } from "react-router-dom"
import ProductsList from "../ProductsList/ProductsList";
import './Products.css'

const Products = ({product}) => {
  
    return (
    
    <Link to={`data/${product.id}`}>
    <div className="images_style">
        <img src={product.img} />
        <h2> {product.tittle} </h2>
        <h3> {product.category} </h3>
        <h3> Precio: ${product.price} </h3>
        <div className="card-actions justify-center">
          <Link to={`/Data/${product.id}`}><button className="btn btn-primary">Comprar</button></Link>
        </div>

      </div>
      </Link>
    );
  };
  
  export default Products
  