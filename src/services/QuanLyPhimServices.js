import { GROUPAPI } from "util/settings/config";
import { baseServices } from "./baseServices";

export class QuanLyPhimServices extends baseServices {
  constructor() {
    super();
  }
  layDanhSachPhim = (tenPhim = "") => {
    if (tenPhim !== "") {
      const url = `/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPAPI}&tenPhim=${tenPhim}`;
      return this.get(url);
    }
    const url = `/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPAPI}`;
    return this.get(url);
  };
  themPhim = (formData) => {
    const url = `/QuanLyPhim/ThemPhimUploadHinh`;
    return this.post(url, formData);
  };
  layThongTinPhim = (maPhim) => {
    const url = `/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`;
    return this.get(url);
  };
  capNhatPhimUpload = (formData) => {
    const url = `/QuanLyPhim/CapNhatPhimUpload`;
    return this.post(url, formData);
  };
  xoaPhim = (maPhim) => {
    const url = `/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`;
    return this.delete(url);
  };
}
const quanLyPhimservices = new QuanLyPhimServices();

export const {
  layDanhSachPhim,
  themPhim,
  layThongTinPhim,
  capNhatPhimUpload,
  xoaPhim,
} = quanLyPhimservices;
