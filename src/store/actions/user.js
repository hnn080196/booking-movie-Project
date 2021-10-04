import { history } from "Routes";
import {
  capNhatThongTinNguoiDung,
  dangKy,
  dangNhap,
  layDanhSachNguoiDung,
  themNguoiDung,
  thongTinTaiKhoan,
  timKiemNguoiDung,
  xoaNguoiDung,
} from "services/QuanLyNguoiDungServices";
import {
  DANG_NHAP,
  GET_USER_LIST,
  SET_THONG_TIN_NGUOI_DUNG,
  THONG_TIN_TAI_KHOAN,
} from "store/types/userTypes";
import {
  ThongTinDangKy,
  ThongTinNguoiDungUpdate,
} from "_core/models/ThongTinDangKy";
import { closeLoadingAction, openLoadingAction } from "./loading";
import Swal from "sweetalert2";
export const loginAction = (thongTinDangNhap) => async (dispatch) => {
  try {
    const response = await dangNhap(thongTinDangNhap);
    dispatch({
      type: DANG_NHAP,
      payload: response.data,
    });
    await Swal.fire(
      "Đăng Nhập Thành Công",
      "You clicked the button!",
      "success"
    );
    history.push("/");
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Đăng Nhập Thất Bại",
      text: `${error.response?.data}`,
    });
  }
};
export const thongTinTaiKhoaAction = (taiKhoan) => async (dispatch) => {
  try {
    const response = await thongTinTaiKhoan(taiKhoan);
    console.log(response.data);
    dispatch({
      type: THONG_TIN_TAI_KHOAN,
      payload: response.data,
    });
  } catch (error) {
    console.log(error.response?.data);
  }
};
export const dangKyAction =
  (thongTinDangKy = new ThongTinDangKy()) =>
  async (dispatch) => {
    try {
      dispatch(openLoadingAction);
      const response = await dangKy(thongTinDangKy);
      dispatch(closeLoadingAction);
      history.push("/");
    } catch (error) {
      console.log(error.response?.data);
    }
  };
export const layDanhSachNguoiDungAction =
  (searchValue = "") =>
  async (dispatch) => {
    try {
      const response = await layDanhSachNguoiDung(searchValue);
      console.log(response.data);
      dispatch({
        type: GET_USER_LIST,
        payload: response.data,
      });
    } catch (error) {
      console.log(error.response?.data);
    }
  };

export const themNguoiDungAction =
  (thongTinDangKy = new ThongTinDangKy()) =>
  async (dispatch) => {
    try {
      const response = await themNguoiDung(thongTinDangKy);
      console.log(response.data);
      await Swal.fire(
        "Thêm Người Dùng Thành Công",
        "Bấm nút để tiếp tục",
        "success"
      );
      history.goBack();
    } catch (errors) {
      Swal.fire({
        icon: "error",
        title: "Thêm Người Dùng Thất Bại",
        text: `${errors.response?.data}`,
      });
    }
  };
export const xoaNguoiDungAction = (taiKhoan) => async (dispatch) => {
  try {
    const response = await xoaNguoiDung(taiKhoan);
    await dispatch(layDanhSachNguoiDungAction());
    await Swal.fire(
      "Xóa Người Dùng Thành Công",
      "Bấm nút để tiếp tục",
      "success"
    );
  } catch (errors) {
    Swal.fire({
      icon: "error",
      title: "Xóa Người Dùng Thất Bại",
      text: `${errors.response?.data}`,
    });
  }
};
export const capNhatThongTinNguoDungAction =
  (thongTinNguoiDungUpdate = new ThongTinNguoiDungUpdate()) =>
  async (dispatch) => {
    try {
      const response = await capNhatThongTinNguoiDung(thongTinNguoiDungUpdate);
      await Swal.fire(
        "Cập Nhật Người Dùng Thành Công",
        "Bấm nút để tiếp tục",
        "success"
      );
      history.goBack();
    } catch (errors) {
      Swal.fire({
        icon: "error",
        title: "Cập Nhật Người Dùng Thất Bại",
        text: `${errors.response?.data}`,
      });
    }
  };
export const timKiemNguoiDungAction = (taiKhoan) => async (dispatch) => {
  try {
    const response = await timKiemNguoiDung(taiKhoan);
    dispatch({
      type: SET_THONG_TIN_NGUOI_DUNG,
      payload: response.data[0],
    });
  } catch (errors) {
    console.log(errors.response?.data);
  }
};
