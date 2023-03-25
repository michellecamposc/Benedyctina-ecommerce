import { useState, useEffect } from "react";

const CategoryList = ({ categorySelected, setCategorySelected }) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    // Fetch request
    async function fetchData() {
      const response = await fetch("https://dummyjson.com/products/categories");
      const data = await response.json();
      setCategory(data);
    }
    fetchData();
  }, []);

  // Select category product
  const handleSelect = (e) => {
    setCategorySelected(e.target.value);
  };

  return (
    // Filter to select a category
    <select onChange={handleSelect}>
      <option key={-1} value={""}>
        Filtrar producto
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

export default CategoryList;
