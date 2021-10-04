import React from "react";
import promo02 from "assets/img/promo/promo02.png";
import { Grid, makeStyles, Typography } from "@material-ui/core";

//
const useStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
    // height: "50px",
  },
}));
const SecondPromo = (props) => {
  const { content } = props;
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={3}>
        <div style={{ padding: "5px" }}>
          <img src={promo02} alt="promo" className={classes.image} />
        </div>
      </Grid>
      <Grid item xs={9}>
        <div style={{ padding: "5px" }}>
          <Typography variant="subtitle2" style={{ color: "#fff" }}>
            {content.title}
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default SecondPromo;
