import {
  Box,
  Container,
  Grid,
  makeStyles,
  MenuItem,
  Typography,
  useTheme,
} from "@material-ui/core";
import React, { useState, useEffect, memo } from "react";
import styles from "./styles";
import GlobalButton from "components/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { Select, InputLabel, FormControl } from "@material-ui/core";
import { getMovieDetailAction } from "store/actions/cinemaAction";
import { useHistory } from "react-router";
//
const useStyles = makeStyles(styles);
//

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      backgroundColor: "#0a1e5e",
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const SearchTicket = (props) => {
  const classes = useStyles();
  const { movieList } = props;
  const { movieDetail } = useSelector((search) => search.movies);
  const theme = useTheme();
  const history = useHistory();
  const { heThongRapChieu } = movieDetail;
  const dispatch = useDispatch();
  const [search, setSearch] = useState({
    maPhim: "",
    maCumRap: "",
    showDate: "",
    showTime: "",
  });
  const matchXS = theme.breakpoints.down("xs");
  const [maLichChieu, setMaLichChieu] = useState(null);
  const handleChange = (event) => {
    const name = event.target.name;
    setSearch({
      ...search,
      [name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (maLichChieu !== null) {
      history.push(`/checkout/${maLichChieu}`);
    }
  };
  useEffect(() => {
    dispatch(getMovieDetailAction(search.maPhim));
  }, [search.maPhim]);
  useEffect(() => {
    return heThongRapChieu?.map((heThong, index) => {
      return heThong.cumRapChieu.map((rapChieu, index) => {
        if (rapChieu.maCumRap === search.maCumRap) {
          return rapChieu.lichChieuPhim.map((lichChieu, index) => {
            if (
              search.showDate ===
                new Date(lichChieu.ngayChieuGioChieu).toLocaleDateString() &&
              search.showTime ===
                new Date(lichChieu.ngayChieuGioChieu).toLocaleTimeString()
            ) {
              setMaLichChieu(lichChieu.maLichChieu);
            }
          });
        }
      });
    });
  }, [search.maPhim, search.maCumRap, search.showDate, search.showTime]);

  const renderMovieList = (movieList) => {
    return movieList?.map((movie, index) => {
      return (
        <MenuItem value={movie.maPhim} key={`${movie.maPhim}_${index}`}>
          {movie.tenPhim.length > 25
            ? `${movie.tenPhim.substr(0, 24)}...`
            : movie.tenPhim}
        </MenuItem>
      );
    });
  };

  const renderCinemaList = (heThongRapChieu) => {
    return heThongRapChieu?.map((heThong, index) => {
      return heThong.cumRapChieu.map((cumRap, index) => {
        return (
          <MenuItem value={cumRap.maCumRap} key={`${cumRap.maCumRap}_${index}`}>
            {cumRap.tenCumRap}
          </MenuItem>
        );
      });
    });
  };
  const renderShowDateList = (heThongRapChieu) => {
    let showDate = "";
    return heThongRapChieu?.map((heThong, index) => {
      return heThong.cumRapChieu.map((rapChieu, index) => {
        if (rapChieu.maCumRap === search.maCumRap) {
          return rapChieu.lichChieuPhim.map((lichChieu, index) => {
            const date = new Date(
              lichChieu.ngayChieuGioChieu
            ).toLocaleDateString();
            if (showDate !== date) {
              showDate = date;
              return (
                <MenuItem value={showDate} key={`${showDate}_${index}`}>
                  {showDate}
                </MenuItem>
              );
            }
          });
        }
      });
    });
  };
  const renderShowTimeList = (heThongRapChieu) => {
    return heThongRapChieu?.map((heThong, index) => {
      return heThong.cumRapChieu.map((rapChieu, index) => {
        if (rapChieu.maCumRap === search.maCumRap) {
          return rapChieu.lichChieuPhim.map((lichChieu, index) => {
            const date = new Date(
              lichChieu.ngayChieuGioChieu
            ).toLocaleDateString();
            if (date === search.showDate) {
              const showTime = new Date(
                lichChieu.ngayChieuGioChieu
              ).toLocaleTimeString();
              return (
                <MenuItem value={showTime} key={`${showTime}_${index}`}>
                  {showTime}
                </MenuItem>
              );
            }
          });
        }
      });
    });
  };
  return (
    <>
      <div className={classes.search} id="search">
        <Container maxWidth="lg" className={classes.search__position}>
          <div className={classes.search__tab}>
            <Grid container spacing={0} className={classes.psearch__content}>
              <Grid item xs={12}>
                <Typography gutterBottom noWrap className={classes.title}>
                  <Box fontSize={matchXS ? 14 : 18} fontWeight={500}>
                    Welcome to Boleto
                  </Box>
                  <Box fontSize={matchXS ? 20 : 28} fontWeight={600}>
                    WHAT ARE YOU LOOKING FOR
                  </Box>
                </Typography>
              </Grid>
            </Grid>
            <Grid container className={classes.search__bar} spacing={2}>
              <Grid item xs={12} md={6} lg>
                <FormControl
                  variant="outlined"
                  fullWidth
                  className={classes.formControl}
                >
                  <InputLabel htmlFor="maPhim">Phim</InputLabel>
                  <Select
                    required
                    fullWidth={true}
                    value={search.maPhim}
                    onChange={handleChange}
                    label="Phim"
                    MenuProps={MenuProps}
                    inputProps={{
                      name: "maPhim",
                      id: "maPhim",
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {renderMovieList(movieList)}
                  </Select>
                </FormControl>
              </Grid>
              {search.maPhim && movieDetail ? (
                <Grid item xs={12} md={6} lg>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel htmlFor="maCumRap">Rạp</InputLabel>
                    <Select
                      value={search.maCumRap}
                      onChange={handleChange}
                      label="Rạp"
                      fullWidth={true}
                      inputProps={{
                        name: "maCumRap",
                        id: "maCumRap",
                      }}
                      MenuProps={MenuProps}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {renderCinemaList(heThongRapChieu)}
                    </Select>
                  </FormControl>
                </Grid>
              ) : undefined}
              {search.maCumRap && (
                <Grid item xs={12} md={6} lg>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel htmlFor="showDate">Ngày Chiếu</InputLabel>
                    <Select
                      value={search.showDate}
                      onChange={handleChange}
                      label="Ngày Chiếu"
                      fullWidth={true}
                      inputProps={{
                        name: "showDate",
                        id: "showDate",
                      }}
                      MenuProps={MenuProps}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {movieDetail ? renderShowDateList(heThongRapChieu) : ""}
                    </Select>
                  </FormControl>
                </Grid>
              )}
              {search.showDate && (
                <Grid item xs={12} md={6} lg>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel htmlFor="showTime">Giờ Chiếu</InputLabel>
                    <Select
                      classes={{ root: classes.selectRoot }}
                      required
                      value={search.showTime}
                      onChange={handleChange}
                      label="Giờ Chiếu"
                      fullWidth={true}
                      inputProps={{
                        name: "showTime",
                        id: "showTime",
                      }}
                      MenuProps={MenuProps}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {movieDetail ? renderShowTimeList(heThongRapChieu) : ""}
                    </Select>
                  </FormControl>
                </Grid>
              )}
              {search.showTime && (
                <Grid item xs={12} md={4} lg>
                  <GlobalButton
                    nameButton="SEARCH"
                    smallButton
                    heightButton="50px"
                    fullWidth
                    ml="12px"
                    onClick={handleSubmit}
                  />
                </Grid>
              )}
            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
};

export default memo(SearchTicket);
