const white = "#FFF";
const black = "#000";
const arcPrimary = "#001232";
const arcSecondary = "#0a1e5e";
export default {
  type: "light",
  common: {
    black,
    white,
    contrastText: white,
  },
  primary: {
    contrastText: white,
    main: arcPrimary,
  },
  secondary: {
    main: arcSecondary,
    contrastText: white,
  },
  text: {
    primary: white,
    secondary: black,
    link: white,
  },
  background: {
    default: arcPrimary,
    paper: white,
  },
  divider: "#DFE3E8",
  text: {
    primary: white,
    secondary: black,
  },
 
};
