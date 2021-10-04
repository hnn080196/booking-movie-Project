import React, { useState } from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { MenuItem } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { dangKyAction } from "store/actions/user";
import { GROUPAPI } from "util/settings/config";
const textValidation = {
  fillIn: "Nhập vào trường này",
  email: "Email chưa chính xác",
};
const validationSchema = yup.object({
  taiKhoan: yup.string().required(textValidation.fillIn),
  matKhau: yup
    .string()
    .required(textValidation.fillIn)
    .min(8, "Mật khẩu ít nhất 8 ký tự"),
  email: yup
    .string()
    .required(textValidation.fillIn)
    .email(textValidation.email),
  soDt: yup
    .string()
    .required(textValidation.fillIn)
    .matches(/^[0-9]+$/, "Vui Lòng nhập số"),
  maNhom: yup.string().required(textValidation.fillIn),
  maLoaiNguoiDung: yup.string().required(textValidation.fillIn),
  hoTen: yup.string().required(textValidation.fillIn),
});
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <NavLink color="inherit" to="/" exact={true}>
        My Website
      </NavLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textfield: {
    "& .MuiInputBase-input": {
      color: "#000",
    },
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#000 !important",
    },
  },
  menuPaper: {
    color: "#000",
  },
  menuList: {
    "& .MuiListItem-button:hover": {
      backgroundColor: "rgba(0,0,0,0.5)",
    },
  },
}));
const groups = [
  {
    value: "GP01",
  },
  {
    value: "GP02",
  },
  {
    value: "GP03",
  },
  {
    value: "GP04",
  },
  {
    value: "GP05",
  },
  {
    value: "GP06",
  },
  {
    value: "GP07",
  },
  {
    value: "GP08",
  },
  {
    value: "GP09",
  },
  {
    value: "GP10",
  },
  {
    value: "GP11",
  },
  {
    value: "GP12",
  },
  {
    value: "GP13",
  },
  {
    value: "GP14",
  },
];
const maLoaiNguoiDungs = [
  {
    value: "KhachHang",
    name: "Khách Hàng",
  },
  {
    value: "QuanTri",
    name: "Quản Trị",
  },
];

const Register = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: GROUPAPI,
      maLoaiNguoiDung: "KhachHang",
      hoTen: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(dangKyAction(values));
    },
  });
  return (
    <>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" color="primary">
          Đăng Ký
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="tk"
                name="taiKhoan"
                variant="outlined"
                required
                fullWidth
                label="Tài khoản"
                autoFocus
                classes={{ root: classes.textfield }}
                onChange={formik.handleChange}
                size="small"
                error={formik.touched.taiKhoan && formik.errors.taiKhoan}
                helperText={formik.touched.taiKhoan && formik.errors.taiKhoan}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Mật khẩu"
                name="matKhau"
                autoComplete="mk"
                type="password"
                size="small"
                classes={{ root: classes.textfield }}
                onChange={formik.handleChange}
                error={formik.touched.matKhau && formik.errors.matKhau}
                helperText={formik.touched.matKhau && formik.errors.matKhau}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="hoTen"
                label="Họ Tên"
                autoComplete="hoten"
                size="small"
                classes={{ root: classes.textfield }}
                onChange={formik.handleChange}
                error={formik.touched.hoTen && formik.errors.hoTen}
                helperText={formik.touched.hoTen && formik.errors.hoTen}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Email"
                name="email"
                autoComplete="email"
                size="small"
                classes={{ root: classes.textfield }}
                onChange={formik.handleChange}
                error={formik.touched.email && formik.errors.email}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="soDt"
                label="Số điện thoại"
                autoComplete="sdt"
                size="small"
                classes={{ root: classes.textfield }}
                onChange={formik.handleChange}
                error={formik.touched.soDt && formik.errors.soDt}
                helperText={formik.touched.soDt && formik.errors.soDt}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                onChange={formik.handleChange}
                classes={{ root: classes.textfield }}
                name="maNhom"
                autoComplete="maNhom"
                select
                fullWidth
                label="Mã nhóm"
                variant="outlined"
                size="small"
                defaultValue="GP01"
                error={formik.touched.maNhom && formik.errors.maNhom}
                helperText={formik.touched.maNhom && formik.errors.maNhom}
                SelectProps={{
                  MenuProps: {
                    classes: {
                      paper: classes.menuPaper,
                      list: classes.menuList,
                    },
                  },
                }}
              >
                {groups.map((option) => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                    color="primary"
                  >
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                classes={{ root: classes.textfield }}
                onChange={formik.handleChange}
                name="maLoaiNguoiDung"
                autoComplete="maLoaiNguoiDung"
                select
                fullWidth
                label="Chức năng"
                variant="outlined"
                size="small"
                defaultValue="khachHang"
                error={
                  formik.touched.maLoaiNguoiDung &&
                  formik.errors.maLoaiNguoiDung
                }
                helperText={
                  formik.touched.maLoaiNguoiDung &&
                  formik.errors.maLoaiNguoiDung
                }
                SelectProps={{
                  MenuProps: {
                    classes: {
                      paper: classes.menuPaper,
                      list: classes.menuList,
                    },
                  },
                }}
              >
                {maLoaiNguoiDungs.map((option) => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                    color="primary"
                  >
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Đăng Ký
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <NavLink to="/login" variant="body2" exact={true}>
                Bạn Đã Có Tài Khoản? Đăng Nhập
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </>
  );
};

export default Register;
