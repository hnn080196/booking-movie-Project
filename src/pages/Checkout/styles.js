const drawerWidth = 300;
export const mainStyles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    // width: `calc(100% - ${drawerWidth}px)`,
    // marginRight: drawerWidth,
    backgroundColor: "#0a1e5e",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    backgroundColor: "#032055",
    width: drawerWidth,
  },
  toolbarContainer: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
  },
  stepper: {
    backgroundColor: theme.palette.primary.main,
    color: "#444",
  },
  stepLabel: {
    color: "rgba(255,255,255,0.5)",
  },
  button: {
    marginRight: theme.spacing(1),
    background: `linear-gradient(to right, #5560ff 17%, #aa52a1 63%, #ff4343 100%)`,
    fontWeight: "700",
    fontSize: "14px",
    letterSpacing: "1px",
  },
  tenPhim: {
    fontWeight: "700",
    color: "rgba(255,255,255,0.8)",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  hide: {
    display: "none",
  },
});
export const chonGheStyles = (theme) => ({
  row: {
    textAlign: "center",
  },
  seat: {
    minWidth: "40px",
    height: "40px",
    padding: "0",
    margin: "3px",
    cursor: "pointer",
    backgroundColor: "rgb(65, 66, 70)",
    "&.vip-seat": {
      backgroundColor: "rgb(14, 151, 218)",
    },
    "&:hover": { backgroundColor: "#0adc98" },
    "&.booking-seat": {
      backgroundColor: "#0adc98",
    },
    "&.booked-seat": {
      backgroundColor: "#999",
    },
    "&.gheKhachDat": {
      backgroundColor: "#ff01f7",
      cursor: "no-drop",
      color: "#000",
    },
    [theme.breakpoints.down(620)]: {
      minWidth: "30px",
      marginBottom: "5px",
      height: "30px",
    },
    [theme.breakpoints.down("xs")]: {
      minWidth: "28px",
      height: "28px",
    },
  },
  boughtSeat: {
    backgroundColor: "#999",
  },
  note: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  screenArea: {
    perspective: "100px",
    margin: "0 auto 50px",
    // width: "500px",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto 30px",
    },
  },
  screen: {
    backgroundColor: "#fff",
    height: "80px",
    width: "80%",
    margin: "15px 0",
    transform: "rotateX(-15deg)",
    boxShadow: "0 10px 20px rgba(255, 255, 255, 0.7)",
  },
});

export const colorlibStepIconStyles = (theme) => ({
  root: {
    backgroundColor: "#31d7a9",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  },
});
