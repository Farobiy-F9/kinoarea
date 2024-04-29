// import { TextField } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  // overrides: {
  //   TextField: {
  //     input: {
  //       "&::placeholder": {
  //         color: "white",
  //       },
  //       color: "white",
  //     },
  //   },
  // },
  palette: {
    color1: {
      main: "#008763",
    },
    textFieldColor: {
      main: "rgba(255,255,255, 0.6)",
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
