import { useState } from "react";
import CategoriesList from "../src/components/products/CategoriesList";
import ProductsList from "../src/components/products/ProductsList";
import Navbar from "./components/header/Navbar";

const App = () => {
  const [categorySelected, setCategorySelected] = useState("");

  return (
    <div>
      <Navbar></Navbar>
      <h1>Lista de Productos</h1>

      <CategoriesList
        categorySelected={categorySelected}
        setCategorySelected={setCategorySelected}
      />
      {categorySelected !== "" && <h2>Categoría: {categorySelected}</h2>}
      <ProductsList categorySelected={categorySelected} />
    </div>
  );
};

export default App;
