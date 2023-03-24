const Product = ({ product }) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.images[0]} alt={product.title} />
      <p>{product.brand}</p>
      <p>{product.description}</p>
      <h3>Price: {product.price}</h3>
    </div>
  );
};

export default Product;
