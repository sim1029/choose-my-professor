import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@fontsource/mulish/300.css";
import "@fontsource/mulish/400.css";
import "@fontsource/mulish/500.css";
import "@fontsource/mulish/700.css";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Mulish",
  },
  palette: {
    primary: {
      main: "#F6F6F6",
      dark: "#979797",
    },
    secondary: {
      main: "#16151A",
    },
    info: {
      main: "#2B2DA7",
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        label: {
          fontFamily: "inherit",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        message: {
          fontFamily: "inherit",
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
