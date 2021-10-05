import { Box, Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfoCinemaListAction } from "store/actions/cinemaAction";
import { getMoviesAction } from "store/actions/movie";
import { layDanhSachNguoiDungAction } from "store/actions/user";
import CinemaCard from "../component/CinemaCard";
import DeviceCard from "../component/DeviceCard";
import MovieCard from "../component/MovieCard";
import UserCard from "../component/UserCard";
import UserChart from "../component/UserChart";
function Dashboard() {
  const { movieList } = useSelector((state) => state.movies);
  const { userList } = useSelector((state) => state.users);
  const { infoCinemaList } = useSelector((state) => state.cinemas);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layDanhSachNguoiDungAction());
    dispatch(getMoviesAction());
    dispatch(getInfoCinemaListAction());
  }, []);
  return (
    <Container>
      <Box pb={5}>
        <Typography variant="h4">Hi, Welcome back</Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <MovieCard total={movieList.length} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <UserCard total={userList.length} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CinemaCard total={infoCinemaList.length} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DeviceCard />
        </Grid>
        <Grid item xs={6}>
          <UserChart userList={userList} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
