import React, { memo } from "react";
import { makeStyles } from "@material-ui/core";
import { USER_LOGIN } from "util/settings/config";
import { Redirect } from "react-router-dom";


//styles
const useStyles = makeStyles((theme) => ({
  root: {},
}));

const CheckoutLayout = (props) => {
  const classes = useStyles(props);

  if (!localStorage.getItem(USER_LOGIN)) {
    return <Redirect to="/login" />;
  }
  const { children } = props;
  return <div className={classes.root}>{children}</div>;
};

export default memo(CheckoutLayout);
