import {
  GET_INFO_CINEMA_LIST,
  GET_LIST_CINEMA,
  GET_THEATER_LIST,
} from "store/types/cinemaTypes";

const initialState = {
  cinemaList: [],
  infoCinemaList: [],
  theaterList: [],
};
const getCinemaList = (state, payload) => {
  return { ...state, cinemaList: payload };
};
const getInfoCinemaList = (state, payload) => {
  return { ...state, infoCinemaList: payload };
};
const getTheaterList = (state, payload) => {
  return { ...state, theaterList: payload };
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_LIST_CINEMA:
      return getCinemaList(state, payload);
    case GET_INFO_CINEMA_LIST:
      return getInfoCinemaList(state, payload);
    case GET_THEATER_LIST:
      return getTheaterList(state, payload);
    default:
      return state;
  }
};
