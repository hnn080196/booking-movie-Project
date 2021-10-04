import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
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
import { GROUPAPI } from "util/settings/config";
import { capNhatThongTinNguoDungAction } from "store/actions/user";
import { useDispatch } from "react-redux";
const validationSchema = yup.object({
  taiKhoan: yup.string().required("Nhập vào trường này"),
  matKhau: yup
    .string()
    .required("Nhập vào trường này")
    .min(8, "Mật khẩu ít nhất 8 ký tự"),
  email: yup
    .string()
    .required("Nhập vào trường này")
    .email("Email chưa chính xác"),
  soDt: yup
    .string()
    .required("Nhập vào trường này")
    .matches(/^[0-9]+$/, "Vui Lòng nhập số"),
  hoTen: yup.string().required("Nhập vào trường này"),
});
const useStyles = makeStyles((theme) => ({
  textField: {
    // width: "400px",
    "& .MuiInputBase-input": {
      color: "#000",
    },
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#000 !important",
    },
  },
}));
const UpdateModal = (props) => {
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
    enableReinitialize: true,
    initialValues: {
      taiKhoan: thongTinTaiKhoan.taiKhoan,
      email: thongTinTaiKhoan.email,
      soDt: thongTinTaiKhoan.soDt,
      maLoaiNguoiDung: thongTinTaiKhoan.maLoaiNguoiDung,
      hoTen: thongTinTaiKhoan.hoTen,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      values.maNhom = GROUPAPI;
      values.matKhau = thongTinTaiKhoan.matKhau;
      dispatch(capNhatThongTinNguoDungAction(values));
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
        Cập Nhật Thông Tin
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
          CẬP NHẬT THÔNG TIN
        </DialogTitle>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="taiKhoan"
                  required
                  fullWidth
                  variant="outlined"
                  className={classes.textField}
                  label="Tài Khoản"
                  onChange={formik.handleChange}
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={formik.touched.taiKhoan && formik.errors.taiKhoan}
                  helperText={formik.touched.taiKhoan && formik.errors.taiKhoan}
                  value={formik.values.taiKhoan}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <TextField
                  name="matKhau"
                  required
                  fullWidth
                  variant="outlined"
                  className={classes.textField}
                  label="Mật khẩu"
                  onChange={formik.handleChange}
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={formik.values.matKhau}
                  error={formik.touched.matKhau && formik.errors.matKhau}
                  helperText={formik.touched.matKhau && formik.errors.matKhau}
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  name="email"
                  required
                  fullWidth
                  variant="outlined"
                  className={classes.textField}
                  label="Email"
                  onChange={formik.handleChange}
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={formik.values.email}
                  error={formik.touched.email && formik.errors.email}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="soDt"
                  required
                  fullWidth
                  variant="outlined"
                  className={classes.textField}
                  label="Số Điện Thoại"
                  onChange={formik.handleChange}
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={formik.values.soDt}
                  error={formik.touched.soDt && formik.errors.soDt}
                  helperText={formik.touched.soDt && formik.errors.soDt}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="hoTen"
                  fullWidth
                  variant="outlined"
                  className={classes.textField}
                  label="Họ Tên"
                  onChange={formik.handleChange}
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={formik.values.hoTen}
                  error={formik.touched.hoTen && formik.errors.hoTen}
                  helperText={formik.touched.hoTen && formik.errors.hoTen}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              // onClick={handleClose}
              color="textPrimary"
              style={{ backgroundColor: "#388e3c" }}
              type="submit"
            >
              Cập Nhật
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

UpdateModal.propTypes = {};

export default UpdateModal;
