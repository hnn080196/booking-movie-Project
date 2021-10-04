import {
  capNhatPhimUpload,
  layDanhSachPhim,
  layThongTinPhim,
  themPhim,
  xoaPhim,
} from "services/QuanLyPhimServices";
import { GET_MOVIES, SET_MOVIE_DETAIL } from "store/types/movieTypes";
import { history } from "Routes";
import Swal from "sweetalert2";

export const getMoviesAction =
  (tenPhim = "") =>
  async (dispatch) => {
    try {
      // call API
      const response = await layDanhSachPhim(tenPhim);
      //dispatch
      dispatch({ type: GET_MOVIES, payload: response.data });
    } catch (errors) {
      console.log(`errors`, errors.response?.data);
    }
  };
export const themPhimAction = (formData) => async (dispatch) => {
  try {
    const response = await themPhim(formData);
    await Swal.fire(
      "Thêm Phim Thành Công",
      "You clicked the button!",
      "success"
    );
  } catch (errors) {
    Swal.fire({
      icon: "error",
      title: "Thêm Phim Thất Bại",
      text: `${errors.response?.data}`,
    });
  }
};
export const layThongTinAction = (maPhim) => async (dispatch) => {
  try {
    const response = await layThongTinPhim(maPhim);
    dispatch({ type: SET_MOVIE_DETAIL, payload: response.data });
  } catch (errors) {
    console.log(`errors`, errors.response?.data);
  }
};

export const capNhatPhimAction = (formData) => async (dispatch) => {
  try {
    const response = await capNhatPhimUpload(formData);
    await Swal.fire(
      "Cập nhật Thành Công",
      "You clicked the button!",
      "success"
    );
    history.goBack();
  } catch (errors) {
    Swal.fire({
      icon: "error",
      title: "Cập Nhật Thất Bại",
      text: `${errors.response?.data}`,
    });
  }
};

export const xoaPhimAction = (maPhim) => async (dispatch) => {
  try {
    const response = await xoaPhim(maPhim);
    dispatch(getMoviesAction());
    await Swal.fire(
      "Xóa Phim Thành Công",
      "You clicked the button!",
      "success"
    );
  } catch (errors) {
    Swal.fire({
      icon: "error",
      title: "Xóa Phim Thất Bại",
      text: `${errors.response?.data}`,
    });
  }
};
