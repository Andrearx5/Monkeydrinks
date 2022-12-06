import React from 'react'
import './CartWidget.css'
import { useCartContext } from "../../context/CartProvider";

export const CartWidget = () => {
  const {totalProducts} = useCartContext();
  return (
    <div className= 'cart_menu_num'>

        <span>{totalProducts() || ''}</span>

    </div>
  )
}

export default CartWidget;
