import { makeStyles, Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";
import styles from "./styles";
//
const useStyles = makeStyles(styles);
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
const HomeTabs = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const { tabRoutes } = props;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant="fullWidth"
      aria-label="tabs"
      classes={{ root: classes.root }}
    >
      {tabRoutes.map((route, index) => (
        <Tab
          label={route.name}
          {...a11yProps(index)}
          icon={route.icon}
          className={classes.tab}
        />
      ))}
    </Tabs>
  );
};

export default HomeTabs;
