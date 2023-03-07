import { useEffect, useState } from "react";
import Product from "../products/Product";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://dummyjson.com/products?limit=0");
      const data = await response.json();
      setProducts(data.products);
    }
    fetchData();
  }, []);

  return (
    <div>
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductsList;
