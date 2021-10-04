import { GROUPAPI } from "util/settings/config";
import { baseServices } from "./baseServices";

export class QuanLyRapServices extends baseServices {
  constructor() {
    super();
  }
  LayThongTinLichChieuHeThongRap = () => {
    const url = `/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPAPI}`;
    return this.get(url);
  };
  layThongTinLichChieuPhim = (maPhim) => {
    const url = `/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`;
    return this.get(url);
  };
  layThongTinHeThongRap = (searchValue = "") => {
    if (searchValue !== "") {
      const url = `/QuanLyRap/LayThongTinHeThongRap?maHeThongRap=${searchValue}`;
      return this.get(url);
    }
    const url = `/QuanLyRap/LayThongTinHeThongRap`;
    return this.get(url);
  };
  layThongTinCumRapTheoHeThong = (maHeThongRap) => {
    const url = `QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`;
    return this.get(url);
  };
}
const quanLyRapServices = new QuanLyRapServices();
export const {
  LayThongTinLichChieuHeThongRap,
  layThongTinLichChieuPhim,
  layThongTinHeThongRap,
  layThongTinCumRapTheoHeThong,
} = quanLyRapServices;
