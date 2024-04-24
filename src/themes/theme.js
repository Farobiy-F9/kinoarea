import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    color1: {
      main: "#008763",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 368,
      md: 660,
      lg: 850,
      xl: 1430,
    },
  },
});
