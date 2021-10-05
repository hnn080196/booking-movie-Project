import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import notFoundImage from "assets/img/404/404.png";
import GlobalButton from "components/Button/Button";
import { history } from "Routes";
function PageNotFound() {
  return (
    <Container align="center">
      <Box mt={5}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <img
              src={notFoundImage}
              alt="page not found"
              style={{ width: "55vw" }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" color="initial">
              Error 404 Page Not Found!!!!!
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <GlobalButton
              nameButton="Trở Lại Trang Chủ"
              onClick={() => {
                history.push("/");
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default PageNotFound;
