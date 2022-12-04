import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/logo.png'
import{ Link, NavLink } from 'react-router-dom';
import shopping from '../../assets/shopping.png'
import './NavBar.css'
 

const NavBar = () => {
  return (
    <div className='menu-navbar-container'>
        <Link to="/" ><img className='navbar-logo'src={logo} alt="logotype"/></Link>
        <h1 className='menu-tittle'>Monkey Drinks Market</h1>
        <ul>
            <div className='menu-items' >
                
                <li>
                   <Link className='menu-list' to="/">Inicio</Link>
                </li>
                <li>
                    <Link className='menu-list' to="/category/Licores">Licores</Link>
                </li>
                <li>
                    <Link className='menu-list' to="/category/Cervezas">Cervezas</Link>
                </li>
                <li>
                    <Link className='menu-list' to="/category/Vinos">Vinos</Link>
                </li>


            </div>
        </ul>
        
        <Link to="/Cart" ><img className='menu-navbar__img'src={shopping} alt="cart "/></Link>
        <CartWidget/>
    </div>

  );
}

export default NavBar;
