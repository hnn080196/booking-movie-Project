import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    background: (props) =>
      props.leftColor
        ? `linear-gradient(to left, #5560ff 17%, #aa52a1 63%, #ff4343 100%)`
        : `linear-gradient(to right, #5560ff 17%, #aa52a1 63%, #ff4343 100%)`,
    borderRadius: 30,
    border: 0,
    color: "white",
    height: (props) => (props.heightButton ? props.heightButton : "48px"),
    padding: (props) => (props.smallButton ? "0 15px" : "0 50px"),
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    marginLeft: (props) => (props.ml ? props.ml : 0),
    "&:hover": {
      boxShadow: "0px 10px 15px 0px rgb(59 55 188 / 50%)",
    },
  },
  label: {
    textTransform: "capitalize",
    fontSize: "14px",
  },
}));
const GlobalButton = (props) => {
  const classes = useStyles(props);
  const { nameButton, smallButton, heightButton, leftColor } = props;
  return (
    <Button
      classes={{
        root: classes.root,
        label: classes.label,
      }}
      {...props}
    >
      {nameButton}
    </Button>
  );
};
export default GlobalButton;

//
