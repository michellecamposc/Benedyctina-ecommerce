import { useState, useEffect } from "react";

const CategoriesList = ({ categorySelected, setCategorySelected }) => {
  const [category, setCategory] = useState([]);

  const handleSelect = (e) => {
    setCategorySelected(e.target.value);
  };
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://dummyjson.com/products/categories");
      const data = await response.json();
      setCategory(data);
    }
    fetchData();
  }, []);
  return (
    <select onChange={handleSelect}>
      <option key={-1} value={""}>
        Seleccione Categoria
      </option>
      {category.map((option, index) => {
        return (
          <option key={index} value={option}>
            {" "}
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default CategoriesList;
