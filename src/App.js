import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import CartWidget from './components/CartWidget/CartWidget';
import CartProvider from './context/CartProvider';


function App() {
  return (
  

    <BrowserRouter>
      <CartProvider>
      <NavBar/>
        <Routes>
            <Route path="/" element={<ItemsListContainer/>}/>
            <Route path="/category/:categoryName" element={<ItemsListContainer/>}/>
            <Route path='/cart' element={<Cart />} />
            <Route path="/data/:id" element={<ItemDetailContainer/>}/>
            <Route path="/CartWidget" element={<CartWidget/>}/> 
        </Routes>

      </CartProvider>


    </BrowserRouter>

  
);
 
};

export default App;
