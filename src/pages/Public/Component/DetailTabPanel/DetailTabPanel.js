import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  tabpanel: {
    overflowY: "auto",
    width: "100%",
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
const DetailTabPanel = (props) => {
  const classes = useStyles();
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`detail-tabpanel-${index}`}
      aria-labelledby={`detail-tab-${index}`}
      className={classes.tabpanel}
      {...other}
    >
      {value === index && <Box m={2}>{children}</Box>}
    </div>
  );
};

DetailTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default DetailTabPanel;
