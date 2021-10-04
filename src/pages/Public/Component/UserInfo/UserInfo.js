import React from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
const useStyles = makeStyles({
  table: {
    // width: 300,
  },
});
const UserInfo = (props) => {
  const classes = useStyles();
  const { thongTinTaiKhoan } = props;
  return (
    <TableContainer>
      <Table className={classes.table} aria-label="profile">
        <TableHead>
          <TableRow hover={true}>
            <TableCell style={{ width: "150px" }}>Tài Khoản</TableCell>
            <TableCell align="left">{thongTinTaiKhoan.taiKhoan}</TableCell>
          </TableRow>
          {/* <TableRow hover={true}>
            <TableCell style={{ width: "150px" }}>Mật Khẩu</TableCell>
            <TableCell align="left">{thongTinTaiKhoan.matKhau}</TableCell>
          </TableRow> */}
          <TableRow hover={true}>
            <TableCell style={{ width: "150px" }}>Họ Tên</TableCell>
            <TableCell align="left">{thongTinTaiKhoan.hoTen}</TableCell>
          </TableRow>
          <TableRow hover={true}>
            <TableCell style={{ width: "150px" }}>Email</TableCell>
            <TableCell align="left">{thongTinTaiKhoan.email}</TableCell>
          </TableRow>
          <TableRow hover={true}>
            <TableCell style={{ width: "150px" }}>Số Điện Thoại</TableCell>
            <TableCell align="left">{thongTinTaiKhoan.soDt}</TableCell>
          </TableRow>
          <TableRow hover={true}>
            <TableCell style={{ width: "150px" }}>Loại Người Dùng</TableCell>
            <TableCell align="left">
              {thongTinTaiKhoan.maLoaiNguoiDung}
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
};

UserInfo.propTypes = { thongTinTaiKhoan: PropTypes.any.isRequired };

export default UserInfo;
