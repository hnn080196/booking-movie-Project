
export default (theme) => ({
  mainPromo: {
    // maxHeight: "350px",
  },
  card: {
    // height: "100%",
  },
  media: {
    height: 0,
    paddingTop: "45%", // 16:9
    [theme.breakpoints.down("md")]: {
      paddingTop: "55%",
    },
  },
  cardContent: {
    padding: "8px 8px 0px 8px",
  },
  title: {
    fontWeight: "700",
    textTransform: "uppercase",
    [theme.breakpoints.down("md")]: {
      // fontSize : ""
    },
  },
  description: {
    textTransform: "lowercase",
  },
});
