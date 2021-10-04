import {
  DANG_KY,
  DANG_NHAP,
  GET_USER_LIST,
  SET_THONG_TIN_NGUOI_DUNG,
  THONG_TIN_TAI_KHOAN,
} from "store/types/userTypes";
import { TOKEN, USER_LOGIN } from "util/settings/config";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}
const initialState = {
  userLogin: user,
  isAuthenticated: false,
  userList: [],
  userPagination: {},
  thongTinTimKiem: {},
  thongTinTaiKhoan: {},
};
const dangNhap = (state, payload) => {
  // lưu user_login va Token xuong localstorage
  localStorage.setItem(USER_LOGIN, JSON.stringify(payload));
  localStorage.setItem(TOKEN, payload.accessToken);
  if (payload.maLoaiNguoiDung === "QuanTri") {
    state.isAuthenticated = true;
  }
  return { ...state, userLogin: payload };
};
const thongTinTimKiem = (state, payload) => {
  return { ...state, thongTinTimKiem: payload };
};
const getUserList = (state, payload) => {
  return { ...state, userList: payload };
};
const dangKy = (state, payload) => {
  return { ...state };
};
const thongTinTaiKhoan = (state, payload) => {
  return { ...state, thongTinTaiKhoan: payload };
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case DANG_NHAP:
      return dangNhap(state, payload);
    case SET_THONG_TIN_NGUOI_DUNG:
      return thongTinTimKiem(state, payload);
    case DANG_KY:
      return dangKy(state, payload);
    case GET_USER_LIST:
      return getUserList(state, payload);
    case THONG_TIN_TAI_KHOAN:
      return thongTinTaiKhoan(state, payload);
    default:
      return { ...state };
  }
};
