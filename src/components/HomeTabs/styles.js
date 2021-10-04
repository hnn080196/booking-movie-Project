export default (theme) => ({
  root: {
    "& .MuiButtonBase-root": {
      backgroundColor: "#7d78ff",
      borderRadius: "40px",
      margin: "0px 10px",
      padding: "5px 5px",
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
    "& .MuiTab-root": {
      minHeight: "50px",
    },
    "& .MuiTab-wrapper": {
      flexDirection: "row",
    },
    "& .MuiAvatar-root": {
      marginRight: "6px",
    },
  },
  tab: {
    minWidth: "100px",
  },
});
