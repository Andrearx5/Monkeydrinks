import React from 'react'
import './CartWidget.css'
import { useCartContext } from "../../context/CartProvider";

export const CartWidget = () => {
  const {totalProducts} = useCartContext();
  
  return (
    <div className='menu_navbar__logo'>

        <span>{totalProducts() || ''}</span>

    </div>
  )
}

export default CartWidget;
