export default (theme) => ({
  arrow: {
    cursor: "pointer",
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "8%",
    display: "flex",
    alignItems: "center",
    background: "rgba(0,0,0,.5)",
    color: theme.palette.common.white,
    zIndex: 1,
    "&.prevArrow": {
      left: 0,
      justifyContent: "center",
    },
    "&.nextArrow": {
      right: 0,
      justifyContent: "center",
    },
  },
  sliderStyles: {
    "& .slick-dots": {
      bottom: 5,
      "& li": {
        "&.slick-active button:before": {
          color: theme.palette.error.dark,
        },
        "& button:before": {
          fontSize: "15px",
          color: "#ffffff",
        },
      },
    },
  },
});
