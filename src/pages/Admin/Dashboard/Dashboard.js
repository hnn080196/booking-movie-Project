import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import CinemaCard from "../component/CinemaCard";
import MovieCard from "../component/MovieCard";
import UserCard from "../component/UserCard";
// import { MovieCard } from "pages/Admin/component/MovieCard/MovieCard";
function Dashboard() {
  return (
    <Container>
      <Box pb={5}>
        <Typography variant="h4">Hi, Welcome back</Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <MovieCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <UserCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CinemaCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CinemaCard />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
