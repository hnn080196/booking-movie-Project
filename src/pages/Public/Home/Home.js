import React, { memo, useEffect } from "react";
import CarouselBanner from "./Carousel";
import SearchTicket from "./SearchTicket";
import Box from "@material-ui/core/Box";
import MovieCarousel from "./MovieCarousel";
import MobileHome from "./MobileHome";
import HomeNews from "./News/HomeNews";
import CinemasTableHome from "./CinemasTableHome";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesAction } from "store/actions/movie";
import { getCinemaListAction } from "store/actions/cinemaAction";
import { motion } from "framer-motion";
import { pageTransitions, pageVariants } from "util/animated/transitionPage";
import { openLoadingAction, closeLoadingAction } from "store/actions/loading";
import { Loading } from "components";
const Home = () => {
  const { isLoading } = useSelector((state) => state.loading);
  const { cinemaList } = useSelector((state) => state.cinemas);
  const { movieList } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const callAPI = async () => {
    dispatch(openLoadingAction);
    await dispatch(getMoviesAction());
    await dispatch(getCinemaListAction());
    dispatch(closeLoadingAction);
  };
  useEffect(() => {
    callAPI();
  }, []);
  if (isLoading) return <Loading />;
  return (
    <>
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransitions}
      >
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
      </motion.div>
    </>
  );
};

export default memo(Home);
