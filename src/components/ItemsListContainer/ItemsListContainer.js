import { useState, useEffect } from 'react';
import ProductsList from '../ProductsList/ProductsList'
import { useParams } from 'react-router-dom'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

 const ItemsListContainer = () => {


   const [products, setProducts] = useState([]);
   const {categoryName} = useParams();

   const getProducts = () => {

    const db = getFirestore();
    const queryCollection = collection(db, "Products");

    if (categoryName) { 
        const queryFilter = query(queryCollection, where('category', '==', categoryName));
        getDocs(queryFilter)
        .then((response) => {
            const data = response.docs.map((product) => {
                return {id: product.id, ...product.data()}
            });

            setProducts(data);

        })
        .catch((error) => {
            console.log(error);
        });
      } else {
        getDocs(queryCollection)
        .then((response) => {
            const data = response.docs.map((product) => {
                return {id: product.id, ...product.data()}
            });

            setProducts(data);

        })
        .catch((error) => {
            console.log(error);
        });

      }

   };
   useEffect(() => {
    getProducts();
   }, [categoryName]);



  return  (
    <div><ProductsList products={products}/></div>
    );


  
};


export default ItemsListContainer;
