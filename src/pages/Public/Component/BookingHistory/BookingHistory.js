import React from "react";
import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import moment from "moment";
import TicketList from "../TicketList";
const BookingHistory = (props) => {
  const { thongTinDatVe } = props;

  return (
    <TableContainer>
      <Table aria-label="profile">
        <TableHead>
          <TableRow hover={true}>
            <TableCell>Tên Phim</TableCell>
            <TableCell align="center">Ngày Đặt</TableCell>
            <TableCell align="center">Mã Vé</TableCell>
            <TableCell align="center">Giá Vé</TableCell>
            <TableCell align="center">Thời Lượng</TableCell>
            <TableCell align="center">Chi Tiết</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {thongTinDatVe?.map((ve, index) => {
            return (
              <TableRow key={`${ve.maVe}_${index}`}>
                <TableCell component="th" scope="row">
                  {ve.tenPhim}
                </TableCell>
                <TableCell align="left">
                  {moment(ve.ngayDat).format("DD/MM/YYYY, h:mm:ss a")}
                </TableCell>
                <TableCell align="center">{ve.maVe}</TableCell>
                <TableCell align="center">{ve.giaVe}</TableCell>
                <TableCell align="center">{ve.thoiLuongPhim}</TableCell>
                <TableCell align="left">
                  <TicketList danhSachGhe={ve.danhSachGhe} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

BookingHistory.propTypes = { thongTinDatVe: PropTypes.any.isRequired };

export default BookingHistory;
