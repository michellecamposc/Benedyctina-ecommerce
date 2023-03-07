import { useState } from "react";

const CategoriesList = () => {
  const [category, setCategory] = useState([]);

  async function fetchData() {
    const response = await fetch("https://dummyjson.com/products/categories");
    const data = await response.json();
    setCategory(data);
  }
  fetchData();

  return (
    <select>
      <option value={-1}>Seleccione Categoria</option>
      {category.map((option) => {
        return (
          <option key={option.id} value="option">
            {" "}
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default CategoriesList;
