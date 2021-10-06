import React, { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";
import { GROUPAPI, TOKEN, USER_LOGIN } from "util/settings/config";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { capNhatThongTinNguoiDung } from "services/QuanLyNguoiDungServices";
import { history } from "Routes";

const validationSchema = yup.object({
  matKhauCu: yup.string(),
  matKhau: yup
    .string()
    .min(8, "Mật khẩu ít nhất 8 ký tự")
    .when("matKhauCu", (matKhauCu, field) =>
      matKhauCu ? field.required() : field
    ),
  confirmMatKhau: yup
    .string()
    .when("matKhau", (matKhau, field) =>
      matKhau ? field.required().oneOf([yup.ref("matKhau")]) : field
    ),
});
const useStyles = makeStyles((theme) => ({
  textField: {
    "& .MuiInputBase-input": {
      color: "#000",
    },
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#000 !important",
    },
  },
}));
const ChangePassword = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { thongTinTaiKhoan } = props;
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const formik = useFormik({
    initialValues: {
      matKhau: "",
      matKhauCu: "",
      confirmMatKhau: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      values.maNhom = GROUPAPI;
      values.taiKhoan = thongTinTaiKhoan.taiKhoan;
      values.email = thongTinTaiKhoan.email;
      values.soDt = thongTinTaiKhoan.soDt;
      values.maLoaiNguoiDung = thongTinTaiKhoan.maLoaiNguoiDung;
      values.hoTen = thongTinTaiKhoan.hoTen;

      if (values.matKhauCu === thongTinTaiKhoan.matKhau) {
        try {
          const response = await capNhatThongTinNguoiDung(values);
          await Swal.fire(
            "Cập Nhật Người Dùng Thành Công",
            "Bấm nút để tiếp tục",
            "success"
          );
          setOpen(false);
          localStorage.removeItem(USER_LOGIN);
          localStorage.removeItem(TOKEN);
          history.push("/");
          window.location.reload();
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Cập Nhật Người Dùng Thất Bại",
            text: `${error.response?.data}`,
          });
        }
      }
      //
    },
  });
  return (
    <Fragment>
      <Button
        variant="outlined"
        color="textSecondary"
        onClick={handleClickOpen}
        style={{ backgroundColor: "#2196f3", margin: "10px 60px" }}
      >
        Đổi Mật Khẩu
      </Button>
      <Dialog
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        aria-labelledby="update-profile"
        color="textPrimary"
      >
        <DialogTitle
          id="update-profile"
          style={{ color: "#000", fontWeight: "700" }}
        >
          ĐỔI MẬT KHẨU
        </DialogTitle>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="matKhauCu"
                  required
                  fullWidth
                  variant="outlined"
                  className={classes.textField}
                  label="Mật khẩu Cũ"
                  onChange={formik.handleChange}
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  type="password"
                  error={formik.touched.matKhauCu && formik.errors.matKhauCu}
                  helperText={
                    formik.touched.matKhauCu && formik.errors.matKhauCu
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="matKhau"
                  required
                  fullWidth
                  variant="outlined"
                  className={classes.textField}
                  label="Mật khẩu Mới"
                  onChange={formik.handleChange}
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  type="password"
                  error={formik.touched.matKhau && formik.errors.matKhau}
                  helperText={formik.touched.matKhau && formik.errors.matKhau}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="confirmMatKhau"
                  required
                  fullWidth
                  variant="outlined"
                  className={classes.textField}
                  label="Xác Nhận Mật khẩu"
                  onChange={formik.handleChange}
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  type="password"
                  error={
                    formik.touched.confirmMatKhau &&
                    formik.errors.confirmMatKhau
                  }
                  helperText={
                    formik.touched.confirmMatKhau &&
                    formik.errors.confirmMatKhau
                  }
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              color="textPrimary"
              style={{ backgroundColor: "#388e3c" }}
              type="submit"
            >
              Cập Nhật Mật Khẩu
            </Button>
            <Button
              onClick={handleClose}
              color="textPrimary"
              style={{ backgroundColor: "#f57c00" }}
            >
              Close
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Fragment>
  );
};

ChangePassword.propTypes = {};

export default ChangePassword;
