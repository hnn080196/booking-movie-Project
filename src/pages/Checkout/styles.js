const drawerWidth = 300;
export default (theme) => ({
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
