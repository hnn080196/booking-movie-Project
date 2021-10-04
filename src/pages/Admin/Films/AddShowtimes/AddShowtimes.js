import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import {
  getInfoCinemaListAction,
  layThongTinCumRapTheoHeThongAction,
} from "store/actions/cinemaAction";
import { taoLichChieuAction } from "store/actions/booking";
import moment from "moment";

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
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 400,
  },
}));

/**************************************** */
function AddShowtimes(props) {
  const classes = useStyles();
  const { infoCinemaList, theaterList } = useSelector((state) => state.cinemas);

  const dispatch = useDispatch();
  const [state, setState] = useState({
    heThongRapChieu: "",
    maCumRap: "",
    ngayChieuGioChieu: "",
  });
  const { id } = props.computedMatch.params;
  const formik = useFormik({
    initialValues: {
      maPhim: id,
      maRap: "",
      ngayChieuGioChieu: "",
      giaVe: 0,
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(taoLichChieuAction(values));
    },
  });
  useEffect(() => {
    dispatch(getInfoCinemaListAction());
  }, []);
  const renderCinemaList = () => {
    return infoCinemaList?.map((rapChieu, index) => {
      return (
        <option
          value={rapChieu.maHeThongRap}
          key={`${rapChieu.maHeThongRap}_${index}`}
        >
          {rapChieu.tenHeThongRap.toUpperCase()}
        </option>
      );
    });
  };
  const renderTheaterList = () => {
    return theaterList?.map((theater, index) => {
      return (
        <option value={theater.maCumRap} key={`${theater.maCumRap}_${index}`}>
          {theater.tenCumRap}
        </option>
      );
    });
  };
  const renderDanhSachRap = () => {
    return theaterList?.map((theater, index) => {
      if (theater.maCumRap === state.maCumRap) {
        return theater.danhSachRap.map((rap, index) => {
          return (
            <option value={rap.maRap} key={`${rap.maRap}_${index}`}>
              {rap.tenRap}
            </option>
          );
        });
      }
    });
  };
  const handleDateChange = (e) => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value });
    formik.setFieldValue(
      `${name}`,
      moment(value).format("DD/MM/YYYY hh:mm:ss")
    );
  };
  const handleCinemasChange = (e) => {
    //mahethongrap
    const { value } = e.target;
    setState({ ...state, [e.target.name]: e.target.value });
    dispatch(layThongTinCumRapTheoHeThongAction(value));
  };
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <div style={{ height: "80vh", width: "100%" }} className={classes.paper}>
      <Box mb={2}>
        <Typography variant="h4" color="initial">
          Thêm Lịch Chiếu
        </Typography>
      </Box>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} alignContent="center">
          <Grid item xs={12}>
            <FormControl className={classes.formControl} variant="outlined">
              <InputLabel htmlFor="heThongRapChieu">
                Hệ thống rạp chiếu
              </InputLabel>
              <Select
                native
                required
                name="heThongRapChieu"
                value={state.heThongRapChieu}
                onChange={handleCinemasChange}
                label="Hệ Thống Rạp Chiếu"
                inputProps={{
                  name: "heThongRapChieu",
                  id: "heThongRapChieu",
                }}
              >
                <option aria-label="None" value="" />
                {renderCinemaList()}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl className={classes.formControl} variant="outlined">
              <InputLabel htmlFor="maCumRap">Cụm Rạp Chiếu</InputLabel>
              <Select
                native
                required
                name="maCumRap"
                value={state.maCumRap}
                onChange={handleChange}
                label="Cụm Rạp Chiếu"
                inputProps={{
                  name: "maCumRap",
                  id: "maCumRap",
                }}
              >
                <option aria-label="None" value="" />
                {renderTheaterList()}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl className={classes.formControl} variant="outlined">
              <InputLabel htmlFor="maRap">Rạp</InputLabel>
              <Select
                native
                required
                label="maRap"
                name="maRap"
                value={formik.values.maRap}
                onChange={formik.handleChange}
                inputProps={{
                  name: "maRap",
                  id: "maRap",
                }}
              >
                <option aria-label="None" value="" />
                {renderDanhSachRap()}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              name="ngayChieuGioChieu"
              id="ngayChieuGioChieu"
              label="Ngày khởi chiếu"
              type="datetime-local"
              required
              value={state.ngayChieuGioChieu}
              //   defaultValue="2021-09-21T10:30"
              InputLabelProps={{
                shrink: true,
              }}
              className={classes.textField}
              onChange={handleDateChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-number"
              name="giaVe"
              label="Giá vé"
              type="number"
              value={formik.values.giaVe}
              onChange={formik.handleChange}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Thêm
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: "5px" }}
              onClick={() => {
                setState({
                  heThongRapChieu: "",
                  maCumRap: "",
                  ngayChieuGioChieu: "",
                });
                formik.resetForm();
              }}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

AddShowtimes.propTypes = {};

export default AddShowtimes;
