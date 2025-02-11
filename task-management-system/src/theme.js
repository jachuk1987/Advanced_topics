import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" }, // Blue
    secondary: { main: "#f50057" }, // Pink
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    button: { textTransform: "none" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: "8px", padding: "10px 20px" },
      },
    },
  },
});

export default theme;
