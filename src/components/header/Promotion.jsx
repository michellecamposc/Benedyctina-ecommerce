import { Button, Typography } from "@mui/material";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#ffffff",
      contrastText: "black",
    },
  },
  typography: {
    h2: {
      fontSize: "50px",
      fontWeight: 300,
      color: "#E4E4E4",
      textAlign: "center",
    },
  },
});

const Promotion = () => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="/promotion.png"
        alt="promotion"
        style={{ width: "100%", height: "auto" }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          zIndex: 1,
          marginTop: "100px",
        }}
      >
        <ThemeProvider theme={theme}>
          <Typography variant="h2">
            LA BELLEZA VIVE DENTRO DE TI,
            <br /> DEMUÉSTRALA AL MUNDO
          </Typography>
          <Button
            variant="contained"
            sx={{
              width: "150px",
              height: "40px",
              backgroundColor: "#E4E4E4",
              fontSize: "17px",
              fontWeight: "500",
              marginTop: "30px",
              color: "black",
              "&:hover": {
                backgroundColor: "#B6A1EF",
              },
            }}
          >
            VER MÁS
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Promotion;
