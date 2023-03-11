import { useState, useEffect } from "react";

const CategoriesList = ({ categorySelected, setCategorySelected }) => {
  const [category, setCategory] = useState([]);

  async function fetchData() {
    const response = await fetch("https://dummyjson.com/products/categories");
    const data = await response.json();
    setCategory(data);
  }

  const handleSelect = (e) => {
    console.log(e.target.value);
    setCategorySelected(e.target.value);
  };
  if (categorySelected !== "") {
    console.log("categorySelected", categorySelected);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <select onChange={handleSelect}>
      <option key={-1} value={-1}>
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
