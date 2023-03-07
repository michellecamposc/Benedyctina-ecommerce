const Product = ({ product }) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.images[0]} alt={product.title} />
      <p>{product.brand}</p>
      <p>{product.category}</p>
      <p>{product.description}</p>
      <p>% descuento: {product.discountPercentage}</p>
      <h3>precio: {product.price}</h3>
      <p>stock: {product.stock}</p>
    </div>
  );
};

export default Product;
