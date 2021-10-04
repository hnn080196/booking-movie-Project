import React, { useEffect } from "react";
import CarouselBanner from "./Carousel";
import SearchTicket from "./SearchTicket";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import MovieCarousel from "./MovieCarousel";
import MobileHome from "./MobileHome";
import HomeNews from "./News/HomeNews";
import CinemasTableHome from "./CinemasTableHome";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesAction } from "store/actions/movie";
import { getCinemaListAction } from "store/actions/cinemaAction";
const Home = () => {
  const theme = useTheme();
  const { cinemaList } = useSelector((state) => state.cinemas);
  const { movieList } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviesAction());
    dispatch(getCinemaListAction());
  }, []);
  return (
    <>
      <CarouselBanner />
      <Box height={60} />
      <SearchTicket movieList={movieList} />
      <Box height={60} />
      <MovieCarousel movieList={movieList} />
      <Box height={30} />
      <CinemasTableHome cinemaList={cinemaList} />
      <Box height={50} />
      <HomeNews />
      <Box height={60} />
      <MobileHome />
    </>
  );
};

export default Home;
