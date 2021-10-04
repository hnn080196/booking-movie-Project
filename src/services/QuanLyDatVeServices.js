import { ThongTinDatVe } from "_core/models/ThongTinDatVe";
import { ThongTinTaoLichChieu } from "_core/models/ThongTinLichChieu";
import { baseServices } from "./baseServices";

export class QuanLyDatVeServices extends baseServices {
  constructor() {
    super();
  }
  layDanhSachPhongVe = (maLichChieu) => {
    const url = `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`;
    return this.get(url);
  };
  datVe = (thongTinDatVe = new ThongTinDatVe()) => {
    const url = `/QuanLyDatVe/DatVe`;
    return this.post(url, thongTinDatVe);
  };
  taoLichChieu = (thongTinLichChieu = new ThongTinTaoLichChieu()) => {
    const url = `QuanLyDatVe/TaoLichChieu`;
    return this.post(url, thongTinLichChieu);
  };
}

const quanLyDatVeServices = new QuanLyDatVeServices();
export const { layDanhSachPhongVe, datVe, taoLichChieu } = quanLyDatVeServices;
