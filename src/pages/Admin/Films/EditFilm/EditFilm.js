import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  makeStyles,
  Switch,
  TextField,
  Typography,
  Avatar,
} from "@material-ui/core";
import { useFormik } from "formik";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Rating from "@material-ui/lab/Rating";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { capNhatPhimAction, layThongTinAction } from "store/actions/movie";
import { GROUPAPI } from "util/settings/config";
const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(0, 6),
    display: "flex",
    flexDirection: "column",
  },
  form: {
    width: "100%",
  },
  textField: {
    width: 400,
  },
  input: {
    width: "200px",
  },
}));
// yup
const validationSchema = yup.object({
  tenPhim: yup.string().required("Nhập vào trường này"),
  trailer: yup.string().required("Nhập vào trường này"),
  moTa: yup
    .string()
    .required("Nhập vào trường này")
    .min(100, "Tối thiểu 100 ký tự"),
  ngayKhoiChieu: yup.string(),
  dangChieu: yup.boolean(),
  sapChieu: yup.boolean(),
  hot: yup.boolean(),
  danhGia: yup.number().required("Nhập vào trường này"),
  // hinhAnh: yup.array().min(1, "Chọn hình ảnh"),
});

// render
const EditFilm = (props) => {
  const classes = useStyles();
  const { movieUpdate } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const [rating, setRating] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [check, setCheck] = useState({
    dangChieu: false,
    sapChieu: false,
    hot: false,
  });

  useEffect(() => {
    const { id } = props.computedMatch.params;
    dispatch(layThongTinAction(id));
  }, []);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maPhim: movieUpdate.maPhim,
      tenPhim: movieUpdate.tenPhim,
      trailer: movieUpdate.trailer,
      moTa: movieUpdate.moTa,
      ngayKhoiChieu: movieUpdate.ngayKhoiChieu,
      dangChieu: movieUpdate?.dangChieu,
      sapChieu: movieUpdate?.sapChieu,
      hot: movieUpdate?.hot,
      danhGia: movieUpdate.danhGia,
      hinhAnh: null,
    },
    validationSchema: validationSchema,
    onSubmit:  (values) => {
      values.maNhom = GROUPAPI;
      console.log(values);
      const formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else if (values.hinhAnh !== null) {
          formData.append("hinhAnh", values.hinhAnh, values.hinhAnh.name);
        }
      }
       dispatch(capNhatPhimAction(formData));
      
    },
  });
  const handleChange = (event) => {
    setCheck({ ...check, [event.target.name]: event.target.checked });
    formik.setFieldValue(`${event.target.name}`, event.target.checked);
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (
        file.type === "image/png" ||
        file.type === "image/jpg" ||
        file.type === "image/gif" ||
        file.type === "image/jpeg"
      ) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          setImageFile(e.target.result);
        };
        formik.setFieldValue("hinhAnh", file);
      }
    }
  };
  const handleDateChange = (e) => {
    const { value, name } = e.target;
    formik.setFieldValue(`${name}`, value);
  };
  return (
    <div style={{ height: "80vh", width: "100%" }} className={classes.paper}>
      <Box mb={2}>
        <Typography variant="h4" color="initial">
          Cập nhật phim
        </Typography>
      </Box>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} alignContent="center">
          <Grid item xs={12}>
            <TextField
              name="tenPhim"
              variant="outlined"
              className={classes.textField}
              label="Tên Phim"
              onChange={formik.handleChange}
              size="small"
              error={formik.touched.tenPhim && formik.errors.tenPhim}
              helperText={formik.touched.tenPhim && formik.errors.tenPhim}
              value={formik.values.tenPhim}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoComplete="trailer"
              name="trailer"
              variant="outlined"
              required
              fullWidth
              label="Trailer"
              className={classes.textField}
              onChange={formik.handleChange}
              size="small"
              error={formik.touched.trailer && formik.errors.trailer}
              helperText={formik.touched.trailer && formik.errors.trailer}
              value={formik.values.trailer}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="moTa"
              name="moTa"
              label="Mô Tả"
              required
              multiline
              variant="outlined"
              fullWidth
              size="small"
              className={classes.textField}
              onChange={formik.handleChange}
              error={formik.touched.moTa && formik.errors.moTa}
              helperText={formik.touched.moTa && formik.errors.moTa}
              value={formik.values.moTa}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="ngayKhoiChieu"
              id="ngayKhoiChieu"
              label="Ngày khởi chiếu"
              type="datetime-local"
              InputLabelProps={{
                shrink: true,
              }}
              className={classes.textField}
              onChange={handleDateChange}
              error={
                formik.touched.ngayKhoiChieu && formik.errors.ngayKhoiChieu
              }
              helperText={
                formik.touched.ngayKhoiChieu && formik.errors.ngayKhoiChieu
              }
              value={formik.values.ngayKhoiChieu}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              value="start"
              control={
                <Switch
                  name="dangChieu"
                  color="secondary"
                  checked={
                    movieUpdate.dangChieu
                      ? formik.values.dangChieu
                      : check.dangChieu
                  }
                  onChange={handleChange}
                />
              }
              label="Đang chiếu"
              labelPlacement="start"
              style={{ margin: 0 }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              value="start"
              control={
                <Switch
                  name="sapChieu"
                  color="secondary"
                  checked={
                    movieUpdate.sapChieu
                      ? formik.values.sapChieu
                      : check.sapChieu
                  }
                  onChange={handleChange}
                />
              }
              label="Sắp chiếu"
              labelPlacement="start"
              style={{ margin: 0 }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              value="start"
              control={
                <Switch
                  name="hot"
                  color="secondary"
                  checked={movieUpdate.hot ? formik.values.hot : check.hot}
                  onChange={handleChange}
                />
              }
              label="Hot"
              labelPlacement="start"
              style={{ margin: 0 }}
            />
          </Grid>
          <Grid item xs={12}>
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Typography component="legend">Đánh Giá</Typography>
              <Rating
                name="danhGia"
                precision={0.5}
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue);
                  formik.setFieldValue(`${event.target.name}`, newValue * 2);
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex">
              <Box display="flex" flexDirection="column">
                <input
                  name="hinhAnh"
                  accept="image/*"
                  className={classes.input}
                  id="hinhAnh"
                  type="file"
                  onChange={handleFileChange}
                />
                {formik.touched.hinhAnh && formik.errors.hinhAnh ? (
                  <div>{formik.errors.hinhAnh}</div>
                ) : null}
              </Box>
              <Avatar
                alt="..."
                src={imageFile === "" ? movieUpdate.hinhAnh : imageFile}
                variant="square"
                style={{ width: "100px", height: "100px" }}
              />
            </Box>
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
};

export default EditFilm;
