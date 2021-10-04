export default (theme) => ({
  root: {
    "& .MuiButtonBase-root": {
      backgroundColor: "transparent",
      borderRadius: "40px",
      margin: "5px 5px 15px",
      padding: "10px 20px",
      minHeight: "50px",
      border: "1px solid #11326f",
      color: "#fff",
      minWidth: "170px",
    },
    "& .MuiTabs-indicator": {
      backgroundColor: "transparent",
    },
    "& .Mui-selected": {
      background:
        "linear-gradient(to left, #ff4343 0%, #aa52a1 37%, #5560ff 83%)",
    },
    "& .MuiTab-textColorInherit": {
      opacity: 1,
    },
    "& .MuiTab-wrapper": {
      fontSize: "1rem",
      fontWeight: "700",
      textTransform: "uppercase",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.8rem",
        fontWeight: "500",
      },
    },
    "& .MuiAvatar-root": {
      marginRight: "6px",
    },
    "& .MuiTabs-flexContainer": {
      flexWrap: "wrap",
    },
  },
  movieCarousel__right: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    "& .MuiTabs-root": {
      width: "100%",
    },
  },
  movieCarousel__left: {
    padding: "1rem",
    [theme.breakpoints.down("xs")]: {
      padding: "0",
    },
  },
  tab: {
    "&:hover": {
      boxShadow: "0px 10px 15px 0px rgba(59,55, 188, 0.5)",
    },
  },
  movieCarousel: {
    //
  },
});
