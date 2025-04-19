import { ThemeOptions } from "@mui/material/styles";

const theme = (mode: "light" | "dark"): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: { main: "#1976d2" },
          background: {
            default: "#f5f5f5",
            paper: "#ffffff",
          },
        }
      : {
          primary: { main: "#90caf9" },
          background: {
            default: "#121212",
            paper: "#1e1e1e",
          },
        }),
  },
  typography: {
    fontFamily: "Roboto, Arial",
  },
});

export default theme;
