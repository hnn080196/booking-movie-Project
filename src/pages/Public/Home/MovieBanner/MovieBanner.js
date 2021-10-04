import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
    height: "80vh",
    [theme.breakpoints.down("md")]: {
      height: "60vh",
    },
    [theme.breakpoints.down("sm")]: {
      height: "50vh",
    },
    [theme.breakpoints.down("xs")]: {
      height: "40vh",
    },
  },
}));
const MovieBanner = (props) => {
  const classes = useStyles();
  const { srcImage } = props;
  return (
    <div>
      <img src={srcImage} alt="logo" className={classes.image} />
    </div>
  );
};
MovieBanner.defaultProps = {
  srcImage:
    "https://s3img.vcdn.vn/123phim/2021/04/lat-mat-48h-16177782153424.png",
};
MovieBanner.propTypes = {
  srcImage: PropTypes.any.isRequired,
};
export default MovieBanner;
