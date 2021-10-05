import React from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import {
  MenuItem,
  Avatar,
  Button,
  TextField,
  Grid,
  Box,
  Typography,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { dangKyAction } from "store/actions/user";
import { GROUPAPI } from "util/settings/config";
import { groups, maLoaiNguoiDungs } from "./dataSelector";
import styles from "./styles";
import { pageTransitions, pageVariants } from "util/animated/transitionPage";
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
const useStyles = makeStyles(styles);

const Register = () => {
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
      <div
        className={classes.paper}
        initial="out"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransitions}
      >
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
                size="small"
                classes={{ root: classes.textfield }}
                onChange={formik.handleChange}
                error={formik.touched.soDt && formik.errors.soDt}
                helperText={formik.touched.soDt && formik.errors.soDt}
              />
              {/* <TextFieldCustom name="soDt" label="Số điện thoại" /> */}
            </Grid>
            <Grid item xs={6}>
              <TextField
                onChange={formik.handleChange}
                classes={{ root: classes.textfield }}
                name="maNhom"
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
