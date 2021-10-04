import {
  Box,
  Button,
  Grid,
  makeStyles,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { history } from "Routes";
import {
  capNhatThongTinNguoDungAction,
  timKiemNguoiDungAction,
} from "store/actions/user";
import * as yup from "yup";

/************************************Main****** */
const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(0, 6),
    display: "flex",
    flexDirection: "column",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    // marginTop: theme.spacing(3),
  },
  textField: {
    width: 400,
  },
  input: {
    // display: "none",
    width: "200px",
  },
}));
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
function EditUser(props) {
  const classes = useStyles();

  const { thongTinTimKiem } = useSelector((state) => state.users);
  console.log(thongTinTimKiem);
  const dispatch = useDispatch();
  useEffect(() => {
    const { id } = props.computedMatch.params;
    dispatch(timKiemNguoiDungAction(id));
  }, []);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: thongTinTimKiem.taiKhoan,
      matKhau: thongTinTimKiem.matKhau,
      email: thongTinTimKiem.email,
      soDt: thongTinTimKiem.soDt,
      maLoaiNguoiDung: thongTinTimKiem.maLoaiNguoiDung,
      hoTen: thongTinTimKiem.hoTen,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      values.maNhom = "GP02";
      console.log(values);
      dispatch(capNhatThongTinNguoDungAction(values));
    },
  });
  return (
    <div style={{ height: "80vh", width: "100%" }} className={classes.paper}>
      <Box mb={2}>
        <Typography variant="h4" color="initial">
          Câp nhật tài khoản
        </Typography>
      </Box>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} alignContent="center">
          <Grid item xs={12}>
            <TextField
              name="taiKhoan"
              required
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
          <Grid item xs={12}>
            <TextField
              name="matKhau"
              required
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
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              required
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
              onChange={formik.handleChange}
              name="maLoaiNguoiDung"
              select
              label="Loại Người Dùng"
              variant="outlined"
              size="small"
              className={classes.textField}
              defaultValue="KhachHang"
              required
              InputLabelProps={{
                shrink: true,
              }}
              value={formik.values.maLoaiNguoiDung}
              error={
                formik.touched.maLoaiNguoiDung && formik.errors.maLoaiNguoiDung
              }
              helperText={
                formik.touched.maLoaiNguoiDung && formik.errors.maLoaiNguoiDung
              }
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
          <Grid item xs={12}>
            <TextField
              name="hoTen"
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
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Cập Nhật
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default EditUser;
