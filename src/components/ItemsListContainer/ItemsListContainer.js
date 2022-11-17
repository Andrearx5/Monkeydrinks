import {data} from '../Data/Data'
import { useState, useEffect } from 'react';
import ProductsList from '../ProductsList/ProductsList'
import { useParams } from 'react-router-dom'

const ItemsListContainer = () => {


   const [products, setProducts] = useState([]);
   const {categoryName} = useParams();
   const getProducts = new Promise ((res, rej) => {
    setTimeout (() => {
      res(data);
    }, 1000);
   })

   useEffect(()=>{
    getProducts.then((respuesta)=>{
      if(categoryName){
        setProducts(respuesta.filter((data) => data.category === categoryName ))
      } 
         else {
           setProducts(respuesta)
         }
    });
    setTimeout(()=>{
    }, 1000)
  }, [categoryName]);

  
    return (
      <div>
        <ProductsList products={products} />
      </div>
  );
};

export default ItemsListContainer 
