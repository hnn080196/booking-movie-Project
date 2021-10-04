import { Link, makeStyles, Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";
import { NavHashLink } from "react-router-hash-link";

const useTabStyles = makeStyles((theme) => ({
  tab: {
    minWidth: "80px",
    color: theme.palette.white,
    [theme.breakpoints.up("lg")]: {
      padding: "6px",
    },
  },
  indicator: {
    background:
      "linear-gradient(to right, #5560ff 17%, #aa52a1 63%, #ff4343 100%)",
    width: "5px",
  },
}));
const CommonTabs = (props) => {
  const classes = useTabStyles();
  const [value, setValue] = useState(0);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  const { routesTab } = props;
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      indicatorColor="secondary"
      {...props}
      classes={{ indicator: classes.indicator }}
    >
      {routesTab.map((route, index) => (
        <Tab
          classes={{ root: classes.tab }}
          component={NavHashLink}
          smooth
          to={route.link}
          label={route.name}
          key={`_${index}`}
        />
      ))}
    </Tabs>
  );
};

export default CommonTabs;
