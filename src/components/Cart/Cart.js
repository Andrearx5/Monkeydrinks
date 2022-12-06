import React from "react";
import { addDoc, collection, getFirestore, doc, updateDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom'
import { useCartContext } from "../../context/CartProvider";
import { useState } from "react";
import ItemCart from '../ItemCart/ItemCart';
import swal from 'sweetalert2'
import moment from 'moment';

const Cart = () => {
    const { cart, totalPrice } = useCartContext();
    const [formValues, setFormValues] = useState({
        name: '',
        phone: '',
        email: '',
      });


    const order = {
        buyer: {
            name: formValues.name,
            email: formValues.email,
            phone: formValues.phone,
            address: formValues.address
            
        },
        
        date: moment().format('DD/MM/YYYY'), 
        items: cart.map(product => ({ id: product.id, tittle: product.tittle, price: product.price, quantity: product.quantity })),
        total: totalPrice(),
       
    }

    const createOrder = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'Order');
        addDoc(ordersCollection, order)
        .then((response) => {
            alert(`Felicidades tu orden fue creada con el id ${response.id}`);
            return response;
          })
        .then((response) => {
            cart.forEach((product) => {
              const query = doc(db, 'Products', product.id);
              updateDoc(query, {
                stock: product.stock - product.quantity,
              })
            });
    }) 
        swal.fire({
            title: '¡Gracias por comprar en Monkey Drinks!'
        });
    }
    const handleInputChange = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        setFormValues({
          ...formValues,
          [event.target.name]: event.target.value,
        });
      };

    if (cart.length === 0) {
        return ( 
            <>
                <p className="totalCart">No hay productos en el carrito.</p>
                <Link className="btnBack" to='/'>Ver productos</Link>
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
                <p className="totalCart">TOTAL: ${totalPrice()}</p>
                <div className="form">
                <div className="cartProducts">
                    <h2 className="tittleCart">Dejanos tus datos</h2>
                        <input
                            name="name"
                            type="text"
                            placeholder="Nombre"
                            value={formValues.name}
                            onChange={handleInputChange}
                        />
                        <input
                            name="phone"
                            type="text"
                            placeholder="Telefono"
                            value={formValues.phone}
                            onChange={handleInputChange}
                        />
                        <input
                            name="email"
                            type="text"
                            placeholder="Email"
                            value={formValues.email}
                            onChange={handleInputChange}
                         />

                        <input
                            name="address"
                            type="text"
                            placeholder="Direccion"
                            value={formValues.address}
                            onChange={handleInputChange}
                         />
                </div>

                </div>
                

                <button className='buy' onClick={createOrder}>Realizar Compra</button>
            </div>
        </>
    )
}

export default Cart;