import CategoriesList from "../src/components/products/CategoriesList";
import ProductsList from "../src/components/products/ProductsList";

const App = () => {
  return (
    <div>
      <h1>Lista de Productos</h1>
      <CategoriesList />
      <ProductsList />
    </div>
  );
};

export default App;
