import React from "react";
import { useCartContext } from '../../context/CartProvider';


const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (

<div>
  <img src={`/data/${product.img}`} alt={product.name}/>
  <div>
    <h2>Título: {product.tittle}</h2>
    <p>Cantidad: {product.quantity}</p>
      <p>Precio por unidad: ${product.price}</p>
      <p>Subtotal: ${product.quantity * product.price}</p>
      <p>Cantidad: {product.quantity}</p>
    <div>
    <button onClick={() => removeProduct(product.id)} className="boton_cart">Eliminar</button>
    </div>
  </div>
</div>



    )
}

export  default ItemCart;