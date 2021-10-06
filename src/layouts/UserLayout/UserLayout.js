import React, { memo, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import GoBackHomeButton from "components/GoHomeButton";
import { Loading } from "components";
import { useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  content: {
    position: "relative",
  },
}));
function UserLayout(props) {
  const classes = useStyles();
  const { isLoading } = useSelector((state) => state.loading);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const { children } = props;
  if (isLoading) return <Loading />;

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={6} className={classes.image} />
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        component={Paper}
        elevation={6}
        square
        className={classes.content}
      >
        {children}
        <GoBackHomeButton />
      </Grid>
    </Grid>
  );
}

export default memo(UserLayout);
