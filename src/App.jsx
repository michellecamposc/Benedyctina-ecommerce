import { useState } from "react";
import CategoriesList from "../src/components/products/CategoriesList";
import ProductsList from "../src/components/products/ProductsList";

const App = () => {
  const [categorySelected, setCategorySelected] = useState("");

  return (
    <div>
      <h1>Lista de Productos</h1>
      <h2>{categorySelected}</h2>
      <CategoriesList
        categorySelected={categorySelected}
        setCategorySelected={setCategorySelected}
      />
      <ProductsList categorySelected={categorySelected} />
    </div>
  );
};

export default App;
