export default (theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  toolbar: {
    padding: "0",
    justifyContent: "space-between",
    minHeight: theme.mixins.toolbar.minHeight,
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
    backgroundColor: "#0a1e5e",
  },
  paperRoot: {
    backgroundColor: "#0e2a85",
  },
  loginButton : {
    display : "flex",
    
  }
});
