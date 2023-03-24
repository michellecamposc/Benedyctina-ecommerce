import { useEffect, useState } from "react";
import Product from "../products/Product";

const ProductsList = ({ categorySelected }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const baseURL = "https://dummyjson.com";
      const productsURL =
        categorySelected !== ""
          ? `${baseURL}/products/category/${categorySelected}`
          : `${baseURL}/products`;
      const { products } = await fetch(productsURL).then((res) => res.json());
      setProducts(products);
    };
    fetchProducts();
  }, [categorySelected]);

  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
