import { useState } from "react";
import CategoryList from "../src/components/products/CategoryList";
import ProductsList from "../src/components/products/ProductsList";
import Navbar from "./components/header/Navbar";
import Promotion from "./components/header/Promotion";

const App = () => {
  const [categorySelected, setCategorySelected] = useState("");
  return (
    <div>
      <Navbar />
      <Promotion />
      <CategoryList
        categorySelected={categorySelected}
        setCategorySelected={setCategorySelected}
      />
      {categorySelected !== "" && <h2>Categoría: {categorySelected}</h2>}
      <ProductsList categorySelected={categorySelected} />
    </div>
  );
};

export default App;
