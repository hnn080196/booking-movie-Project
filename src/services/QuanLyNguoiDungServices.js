import { baseServices } from "./baseServices";
import { GROUPAPI } from "util/settings/config";
export class QuanLyNguoiDungServices extends baseServices {
  constructor() {
    super();
  }
  dangNhap = (thongTinNguoiDung) => {
    const url = `/QuanLyNguoiDung/DangNhap`;
    return this.post(url, thongTinNguoiDung);
  };
  dangKy = (thongTinDangKy) => {
    const url = `/QuanLyNguoiDung/DangKy`;
    return this.post(url, thongTinDangKy);
  };
  thongTinTaiKhoan = (taiKhoan) => {
    const url = `/QuanLyNguoiDung/ThongTinTaiKhoan`;
    return this.post(url, taiKhoan);
  };
  layDanhSachNguoiDungPhanTrang = (page, count, searchValue = "") => {
    if (searchValue !== "") {
      const url = `QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=${GROUPAPI}&tuKhoa=${searchValue}&soTrang=${page}&soPhanTuTrenTrang=${count}`;
      return this.get(url);
    }
    const url = `QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=${GROUPAPI}&soTrang=${page}&soPhanTuTrenTrang=${count}`;
    return this.get(url);
  };
  layDanhSachNguoiDung = (searchValue = "") => {
    if (searchValue !== "") {
      const url = `QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPAPI}&tuKhoa=${searchValue}`;
      return this.get(url);
    }
    const url = `QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPAPI}`;
    return this.get(url);
  };
  themNguoiDung = (thongTinDangKy) => {
    const url = "QuanLyNguoiDung/ThemNguoiDung";
    return this.post(url, thongTinDangKy);
  };
  xoaNguoiDung = (taiKhoan) => {
    const url = `QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`;
    return this.delete(url);
  };
  capNhatThongTinNguoiDung = (thongTinNguoiDung) => {
    const url = `/QuanLyNguoiDung/CapNhatThongTinNguoiDung`;
    return this.put(url, thongTinNguoiDung);
  };
  timKiemNguoiDung = (taiKhoan) => {
    const url = `/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUPAPI}&tuKhoa=${taiKhoan}`;
    return this.get(url);
  };
}

const quanLyNguoiDungServices = new QuanLyNguoiDungServices();
export const {
  dangNhap,
  dangKy,
  thongTinTaiKhoan,
  layDanhSachNguoiDungPhanTrang,
  layDanhSachNguoiDung,
  themNguoiDung,
  xoaNguoiDung,
  capNhatThongTinNguoiDung,
  timKiemNguoiDung,
} = quanLyNguoiDungServices;
