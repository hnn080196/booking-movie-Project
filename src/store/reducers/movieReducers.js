import { GET_MOVIE_SHOWTIMES } from "store/types/cinemaTypes";
import { GET_MOVIES, SET_MOVIE_DETAIL } from "store/types/movieTypes";

const initialState = {
  movieList: [],
  movieDetail: {},
  movieUpdate: {},
};
const getMovies = (state, payload) => {
  return { ...state, movieList: payload };
};
const getMovieDetail = (state, payload) => {
  return { ...state, movieDetail: payload };
};
const setMovieDetail = (state, payload) => {
  return { ...state, movieUpdate: payload };
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIES:
      return getMovies(state, payload);
    case GET_MOVIE_SHOWTIMES:
      return getMovieDetail(state, payload);
    case SET_MOVIE_DETAIL:
      return setMovieDetail(state, payload);
    default:
      return state;
  }
};
