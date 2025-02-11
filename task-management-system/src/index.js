import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Use createRoot instead of render
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import theme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Correct way in React 18
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
