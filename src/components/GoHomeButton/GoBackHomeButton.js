import React from "react";
import { Box, IconButton } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  location: {
    position: "absolute",
    left: "10px",
    top: "0",
  },
}));
const GoBackHomeButton = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.location} component={Link} to="/" exact={true}>
      <IconButton aria-label="home">
        <HomeIcon style={{ color: green[500] }} fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default GoBackHomeButton;
