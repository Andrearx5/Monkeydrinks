import React from "react";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Link } from 'react-router-dom'
import { useCartContext } from "../../context/CartProvider";
import ItemCart from '../ItemCart/ItemCart';
import swal from 'sweetalert2'

const Cart = () => {
    const { cart, totalPrice } = useCartContext();


    const order = {
        buyer: {
            name: 'Andrea',
            email: 'andrearx@gmail.com',
            phone: '1158020044',
            address: 'Avenida Cazon 1157, Tigre'
        },
        
        items: cart.map(product => ({ id: product.id, name: product.name, price: product.price, quantity: product.quantity })),
        total: totalPrice(),
       
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'Orders');
        addDoc(ordersCollection, order)
            .then(({ id }) => console.log(id))
        swal.fire({
            title: '¡Usted a emitido una orden de Compra!'
        });
    }

    if (cart.length === 0) {
        return ( 
            <>
                <p >No hay productos en el carrito.</p>
                <Link to='/'>Realizar una compra</Link>
            </>
        );
    }

    return (
        <>
            <div>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            
            </div>
            <div>
                <p>TOTAL: ${totalPrice()}</p>
                <button onClick={handleClick}>Emitir Compra</button>
            </div>
        </>
    )
}

export default Cart;