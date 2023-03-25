import React from "react";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CategoryMenu from "./CategoryMenu";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  border: "1px solid black",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "grey",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
    backgroundColor: "transparent",
  },
}));

const IconContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: 2,
});

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: "white",
          borderBottom: "1px solid grey",
          flexGrow: 1,
          paddingTop: "30px",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Typography
            variant="h3"
            component="h1"
            sx={{ color: "black", fontWeight: "bold" }}
          >
            BENEDYCTINA
          </Typography>
          <IconContainer sx={{ marginLeft: 2 }}>
            <AccountCircleOutlinedIcon
              sx={{
                color: "black",
                width: 40,
                height: 40,
                marginRight: 2,
              }}
            />
            <ShoppingCartOutlinedIcon
              sx={{ color: "black", width: 40, height: 40, marginLeft: 2 }}
            />
          </IconContainer>
        </Toolbar>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "20px",
            paddingBottom: "10px",
          }}
        >
          <CategoryMenu />
        </Box>
      </AppBar>
    </Box>
  );
};

export default Navbar;
