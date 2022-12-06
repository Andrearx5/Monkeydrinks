import React from "react";
import './ItemCart.css'
import { useCartContext } from '../../context/CartProvider';


const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();

    return (

      <div className="cart">      
      <div className="cartProducts">
      <img src={`/${product.imageId}`} alt={product.name}/>
      <h2 className="tittleCart">Estas comprando: {product.tittle}</h2>
      <p className="subtittleCart">Cantidad: {product.quantity}</p>
      <p className="subtittleCart">Precio por unidad: ${product.price}</p>
      <button onClick={() => removeProduct(product.id)} className="boton_cart">Eliminar</button>
  </div>
</div>



    )
}

export  default ItemCart;