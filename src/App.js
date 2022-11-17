import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';


function App() {
  return (
  
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemsListContainer/>}/>
        <Route path="/category/:categoryName" element={<ItemsListContainer/>}/>
        <Route path="/data/:id" element={<ItemDetailContainer/>}/>
        <Route path="CartWidget" element={<CartWidget/>}/>
      </Routes>
    </BrowserRouter>
 
  
);
 
};

export default App;
