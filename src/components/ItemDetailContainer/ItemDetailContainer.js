
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { data } from "../Data/Data";

const ItemDetailContainer = () => {

    const [productSelected, setProductSelected] = useState();
    const {id} = useParams();

    const getProduct = () => {
        const productFilter = data.find((product) => {

            return product.id == id;
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