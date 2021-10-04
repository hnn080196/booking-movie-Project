export default (theme) => ({
  news: {},
  root: {
    "& .MuiButtonBase-root": {
      backgroundColor: "transparent",
      borderRadius: "40px",
      margin: "15px 10px",
      padding: "10px 20px",
      minHeight: "50px",
      border: "1px solid #11326f",
      color: "#fff",
      [theme.breakpoints.down("sm")]: {
        margin: "10px 5px",
        padding: "10px 0px",
      },
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
      fontSize: "16px",
      fontWeight: "700",
      textTransform: "uppercase",
    },
    "& .MuiAvatar-root": {
      marginRight: "6px",
    },
  },
  tab: {
    minWidth: "100px",
    "&:hover": {
      boxShadow: "0px 10px 15px 0px rgba(59,55, 188, 0.5)",
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
  },
});
