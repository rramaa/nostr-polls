import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Shantell Sans", sans-serif',
  },
  palette: {
    primary: {
      main: "#FAD13F", // Set your primary color here
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "50px", // adjust the value as needed for your desired roundness
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
