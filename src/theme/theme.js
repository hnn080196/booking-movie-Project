import { createTheme } from "@material-ui/core";
import palette from "./palette";
import typography from "./typography";
const breakpointCustom = {
  xs: 0,
  sm: 414,
  md: 768,
  lg: 992,
  xl: 1200,
};
const theme = createTheme({
  palette: palette,
  typography,
  mixins: {
    toolbar: {
      minHeight: "80px",
    },
  },
  breakpoints: {
    values: breakpointCustom,
  },
});

export default theme;
