import banner from "../../../../assets/img/banner01.jpg";
import ticketBg from "../../../../assets/img/ticket-bg01.jpg";

export default (theme) => ({
  //class
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
  search: {
    height: "500px",
    background: `linear-gradient(to right,rgba(0, 18, 50, 0.6),rgba(0, 18, 50, 0.6)) ,url(${banner}) `,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      height: "600px",
    },
  },
  search__tab: {
    padding: "40px 30px",
    background: `linear-gradient(to right,rgba(15 ,90 ,224,0.2),rgba(116 ,0 ,186,.8)) ,url(${ticketBg}) no-repeat center center`,
    backgroundSize: "cover",
  },
  search__bar: {
    marginTop: "20px",
    padding: "15px",

    backgroundColor: "rgba(255, 255, 255, 0.3)",
    backdropFilter: " blur(5px)",

    border: " 1px solid rgba(255, 255, 255, 0.18)",
    boxShadow: "rgba(142, 142, 142, 0.19) 0px 6px 15px 0px",
    borderRadius: "12px",
    color: "#fff",
    alignItems: "center",
  },
  tab: {
    minWidth: "100px",
  },
  search__position: {
    position: "absolute",
    top: "50%",
    left: 0,
    right: 0,
    transform: "translateY(-50%)",
  },
  selectRoot: {
    "&:not([multiple]) option": {
      backgroundColor: theme.palette.secondary.main,
      [theme.breakpoints.down("md")]: {
        fontSize: "12px",
      },
      "&:not([multiple]) optgroup": {
        maxWidth: "200px",
        maxHeight: "150px",
      },
    },
  },
});
