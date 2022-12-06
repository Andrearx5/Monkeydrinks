import { Link } from "react-router-dom"
import './Products.css'

const Products = ({product}) => {
  
    return (
    
    <Link to={`data/${product.id}`}>
    <div className="images_style">

        <img alt= '{product.tittle}' src={product.imageId} />
        <h2 className="font_tittle"> {product.tittle} </h2>
        <h3 className="font_styles"> {product.category} </h3>
        <h3 className="font_styles"> Precio: ${product.price} </h3>
        <h3 className="font_styles"> Stock actual: {product.stock} unidades </h3>
        <div >
          <Link to={`/data/${product.id}`}><button className="boton">Comprar</button></Link>
        </div>

      </div>
      </Link>
    );
  };
  
  export default Products;
  