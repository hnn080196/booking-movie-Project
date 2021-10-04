import React, { memo } from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";

const CinemasTabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`cinemas-tabpanel-${index}`}
      aria-labelledby={`cinemas-tab-${index}`}
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

CinemasTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default memo(CinemasTabPanel);
