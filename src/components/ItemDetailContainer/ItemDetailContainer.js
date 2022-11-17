
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { data } from "../Data/Data";
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {

    const [productSelected, setProductSelected]= useState();
    const {id} = useParams();

    const getProduct = () => {
        const productFilter = data.filter((producto) => {

            return producto.id==id;
        })
        setProductSelected(productFilter)
    }

    useEffect (() => {
        getProduct();
    }, [id])

    return (
        <> 
            {productSelected &&
            <ItemDetail productSelected={productSelected}/>
            }
        </>
  )
}

export default ItemDetailContainer