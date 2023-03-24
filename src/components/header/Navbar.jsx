import React from "react";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
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
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const IconContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: 2,
});

const NavigationBar = styled(AppBar)({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  bgcolor: "white",
  borderBottom: "1px solid grey",
  height: 100,
  paddingTop: "14px",
  boxShadow: "none",
});

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: "white",
          borderBottom: "1px solid grey",
          height: 100,
          paddingTop: "14px",
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40%",
            }}
          >
            <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{ color: "black" }}
            >
              BENEDYCTINA
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40%",
            }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Buscar…"
                inputProps={{ "aria-label": "search", color: "black" }}
              />
            </Search>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "20%",
            }}
          >
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
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
