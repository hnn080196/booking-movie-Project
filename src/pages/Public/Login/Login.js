import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "store/actions/user";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="/" exact>
        Your Website
      </Link>{" "}
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
    marginTop: theme.spacing(1),
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
}));
const validationSchema = yup.object({
  taiKhoan: yup.string().required("Nhập vào trường này"),
  matKhau: yup.string().required("Nhập vào trường này"),
});
const Login = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(loginAction(values));
    },
  });
  console.log(`formik`, formik);
  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5" color="primary">
        Đăng Nhập
      </Typography>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Tài Khoản"
          name="taiKhoan"
          autoComplete="taiKhoan"
          onChange={formik.handleChange}
          autoFocus
          className={classes.textfield}
          error={formik.touched.taiKhoan && formik.errors.taiKhoan}
          helperText={formik.touched.taiKhoan && formik.errors.taiKhoan}
        />
        <TextField
          color="primary"
          variant="outlined"
          margin="normal"
          fullWidth
          name="matKhau"
          label="Mật Khẩu"
          type="password"
          onChange={formik.handleChange}
          autoComplete="current-password"
          classes={{ root: classes.textfield }}
          error={formik.touched.matKhau && formik.errors.matKhau}
          helperText={formik.touched.matKhau && formik.errors.matKhau}
        />
        <FormControlLabel
          style={{ color: "#000" }}
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Đăng Nhập
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Quên Mật Khẩu ?
            </Link>
          </Grid>
          <Grid item>
            <Link to="/register" variant="body2" exact={true}>
              {"Bạn chưa có tài khoản? Đăng Ký"}
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </form>
    </div>
  );
};

export default Login;
