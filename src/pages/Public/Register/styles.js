export default (theme) => ({
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textfield: {
    "& .MuiInputBase-input": {
      color: "#000",
    },
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#000 !important",
    },
  },
  menuPaper: {
    color: "#000",
  },
  menuList: {
    "& .MuiListItem-button:hover": {
      backgroundColor: "rgba(0,0,0,0.5)",
    },
  },
});
