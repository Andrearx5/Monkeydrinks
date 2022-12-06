import { useEffect, useState } from "react";

export const ItemCount = ({initial, stock, onAdd}) => {
  const [contador, setContador] = useState(parseInt(initial));

  const addItem = () => {
    setContador(contador + 1);
  }

  const removeItem = () => {
    setContador(contador - 1);
  }

  useEffect(() => {
    setContador(parseInt(initial));
}, [initial])


  return (
 
      <div>
        <button disabled={contador <= 1} className='boton_cart' onClick={removeItem}>-</button>
        <span>{ contador }</span>
        <button disabled={contador >= stock} className='boton_cart' onClick={addItem}>+</button>
        <button disabled={stock <=0} onClick={() => onAdd(contador)} className='boton_cart'>Agregar al carrito</button>
        
          
      </div>
    );
}

export default ItemCount;



