import React, { memo } from "react";
import { makeStyles } from "@material-ui/core";
import { USER_LOGIN } from "util/settings/config";
import { Redirect } from "react-router-dom";
import { Loading } from "components";
import { useSelector } from "react-redux";

//styles
const useStyles = makeStyles((theme) => ({
  root: {},
}));

const CheckoutLayout = (props) => {
  const classes = useStyles(props);
  const { isLoading } = useSelector((state) => state.loading);

  if (!localStorage.getItem(USER_LOGIN)) {
    return <Redirect to="/login" />;
  }
  if (isLoading) return <Loading />;
  const { children } = props;
  return <div className={classes.root}>{children}</div>;
};

export default memo(CheckoutLayout);
