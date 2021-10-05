import React from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {
  Typography,
  Box,
  TextField,
  Button,
  Avatar,
  Grid,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "store/actions/user";
import { pageTransitions, pageVariants } from "util/animated/transitionPage";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="/" exact>
        My Website
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
const Login = () => {
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
  return (
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
        Đăng Nhập
      </Typography>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Tài Khoản"
          name="taiKhoan"
          onChange={formik.handleChange}
          className={classes.textfield}
          error={formik.touched.taiKhoan && formik.errors.taiKhoan}
          helperText={formik.touched.taiKhoan && formik.errors.taiKhoan}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          name="matKhau"
          label="Mật Khẩu"
          type="password"
          onChange={formik.handleChange}
          classes={{ root: classes.textfield }}
          error={formik.touched.matKhau && formik.errors.matKhau}
          helperText={formik.touched.matKhau && formik.errors.matKhau}
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
