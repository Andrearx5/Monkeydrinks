import Products from "../Products/Products"

const ProductsList = ({products}) => {
  return (
    <>
    {products.map((product) => (<Products product={product} key={product.id}/>
    ))}
    </>
  )
};

export default ProductsList
