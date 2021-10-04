import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  showtimes: {
    height: "400px",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "8px",
      backgroundColor: "#F5F5F5",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "10px",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,.3)",
      backgroundColor: "#555",
    },
  },
}));
const CinemasInfoTabPanel = (props) => {
  const classes = useStyles();
  const { value, children, index, ...other } = props;
  return (
    <div
      className={classes.showtimes}
      role="tabpanel"
      hidden={value !== index}
      id={`cinema-detail-tab-${index}`}
      aria-labelledby={`cinema-detail-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box ml={2} mr={2}>
          {children}
        </Box>
      )}
    </div>
  );
};

CinemasInfoTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default CinemasInfoTabPanel;
