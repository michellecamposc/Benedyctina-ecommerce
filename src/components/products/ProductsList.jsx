import { useEffect, useState } from "react";
import Product from "../products/Product";

const ProductsList = ({ categorySelected }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const baseURL = "https://dummyjson.com";
      let productsURL = `${baseURL}/products`;
      if (categorySelected !== "") {
        productsURL = `${productsURL}/category/${categorySelected}`;
      }
      const response = await fetch(productsURL);
      const data = await response.json();
      setProducts(data.products);
    }
    fetchData();
  }, [categorySelected]);

  return (
    <div>
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductsList;
