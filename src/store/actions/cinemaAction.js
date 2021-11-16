import {
  layThongTinCumRapTheoHeThong,
  layThongTinHeThongRap,
  LayThongTinLichChieuHeThongRap,
  layThongTinLichChieuPhim,
} from "services/QuanLyRapServices";
import {
  GET_THEATER_LIST,
  GET_INFO_CINEMA_LIST,
  GET_LIST_CINEMA,
  GET_MOVIE_SHOWTIMES,
} from "store/types/cinemaTypes";

export const getCinemaListAction = () => async (dispatch) => {
  try {
    const response = await LayThongTinLichChieuHeThongRap();
    dispatch({
      type: GET_LIST_CINEMA,
      payload: response.data,
    });
  } catch (error) {
    console.log("error", error.response?.data);
  }
};
export const getInfoCinemaListAction =
  (searchValue = "") =>
  async (dispatch) => {
    try {
      const response = await layThongTinHeThongRap(searchValue);
      dispatch({
        type: GET_INFO_CINEMA_LIST,
        payload: response.data,
      });
    } catch (error) {
      console.log("error", error.response?.data);
    }
  };

export const getMovieDetailAction = (id) => async (dispatch) => {
  try {
    const response = await layThongTinLichChieuPhim(id);
    console.log(`response`, response);
    dispatch({
      type: GET_MOVIE_SHOWTIMES,
      payload: response.data,
    });
  } catch (error) {
    console.log("error", error.response?.data);
  }
};
export const layThongTinCumRapTheoHeThongAction =
  (maHeThongRap) => async (dispatch) => {
    try {
      const response = await layThongTinCumRapTheoHeThong(maHeThongRap)
      dispatch({
        type: GET_THEATER_LIST,
        payload: response.data,
      });
    } catch (error) {
      console.log("error", error.response?.data);
    }
  };
