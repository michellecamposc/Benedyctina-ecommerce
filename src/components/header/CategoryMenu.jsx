import React from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const CategoryMenu = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        color: "black",
      }}
    >
      <Tab label="Electrónicos" />
      <Tab label="Alimentos" />
      <Tab label="Para la salud y el hogar" />
      <Tab label="Ropa, zapatos y lentes" />
      <Tab label="Automotriz" />
    </Box>
  );
};

export default CategoryMenu;
