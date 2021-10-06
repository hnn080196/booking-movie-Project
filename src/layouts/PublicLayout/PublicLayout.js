import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { Footer, Navbar } from "./components";
import { useLocation } from "react-router";

//styles
const useStyles = makeStyles((theme) => ({
  root: {},
}));

const PublicLayout = (props) => {
  const classes = useStyles(props);
  // scroll to top when rerender
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { children } = props;
  return (
    <div className={classes.root}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default PublicLayout;
