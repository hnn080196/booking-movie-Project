import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Chip,
  Container,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import { useEffect } from "react";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetailAction } from "store/actions/cinemaAction";
import "assets/styles/circle.scss";
import moment from "moment";
import { Rating } from "@material-ui/lab";
import DetailTabPanel from "../Component/DetailTabPanel";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  detail: {
    // minHeight: "90vh",
  },
  detail__content: {
    // position : "absolute",
  },
  detail__rating: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  detail__title: {
    color: "#ffeb00",
    fontWeight: "600",
    letterSpacing: "1px",
  },
  detail__tabs: {
    flexGrow: 1,
    backgroundColor: theme.palette.secondary,
    display: "flex",
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    minWidth: "100px",
  },
  tab: {
    minWidth: "100px",
  },
  chip: {
    margin: "3px",
  },
}));

const Detail = (props) => {
  const classes = useStyles(props);
  const [value, setValue] = useState(0);
  const { movieDetail } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    let { id } = props.match.params;
    dispatch(getMovieDetailAction(id));
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Fragment>
      <div
        className={classes.detail}
        style={{
          background: `url(${movieDetail.hinhAnh}) no-repeat center / cover `,
        }}
      >
        <CustomCard
          style={{
            // height: "90vh",
            borderRadius: 0,
            background: "rgba(0,0,0,0.7)",
          }}
          effectColor="#000"
          color="#fff"
          blur={7}
          borderRadius={0}
        >
          <Container maxWidth="lg">
            <Grid container spacing={2} className={classes.detail__content}>
              <Grid item xs={12} md={3}>
                <img
                  src={movieDetail.hinhAnh}
                  alt={movieDetail.biDanh}
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12} md={9} container spacing={2}>
                <Grid item xs={12} md={9}>
                  <Typography variant="h5" gutterBottom>
                    {movieDetail.tenPhim}
                  </Typography>
                  <Typography variant="subtitle1">
                    <Box mb="10px" letterSpacing="1px">
                      <span className={classes.detail__title}>Show Time :</span>
                      {`${moment(movieDetail.ngayKhoiChieu)
                        .subtract(10, "days")
                        .calendar()}`}
                    </Box>
                  </Typography>
                  <Typography variant="subtitle1" align="justify" gutterBottom>
                    <Box>
                      <span className={classes.detail__title}>
                        Description :
                      </span>
                      {`${movieDetail.moTa?.substr(0, 300)}...`}
                    </Box>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3} className={classes.detail__rating}>
                  <Box className={`c100 p${movieDetail.danhGia * 10}  green`}>
                    <span>{movieDetail.danhGia}/10</span>
                    <div className="slice">
                      <div className="bar"></div>
                      <div className="fill"></div>
                    </div>
                  </Box>
                  <Box>
                    <Rating
                      name="rating"
                      value={`${movieDetail.danhGia / 2}`}
                      readOnly
                      size="large"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <div className={classes.detail__tabs}>
                    <Tabs
                      orientation="vertical"
                      variant="scrollable"
                      scrollButtons="on"
                      value={value}
                      onChange={handleChange}
                      aria-label="detail tabs"
                      className={classes.tabs}
                    >
                      {movieDetail.heThongRapChieu?.map((theater, index) => (
                        <Tab
                          key={`${theater.tenHeThongRap}_${index}`}
                          id={`detail-tab-${index}`}
                          aria-controls={`detail-tabpanel-${index}`}
                          icon={
                            <Avatar
                              square
                              src={theater.logo}
                              alt={theater.tenHeThongRap}
                            />
                          }
                          className={classes.tab}
                        />
                      ))}
                    </Tabs>
                    {movieDetail.heThongRapChieu?.map((theater, index) => (
                      <DetailTabPanel
                        value={value}
                        index={index}
                        key={`${theater.tenHeThongRap}_${index}`}
                      >
                        <Grid container>
                          {theater.cumRapChieu?.map((rapChieu, index) => (
                            <Grid
                              item
                              xs={12}
                              key={`${rapChieu.maCumRap}_${index}`}
                            >
                              <Typography variant="subtitle1" color="initial">
                                {rapChieu.tenCumRap}
                              </Typography>
                              {rapChieu.lichChieuPhim
                                ?.slice(0, 12)
                                .map((lichChieu, index) => (
                                  <Chip
                                    key={`${lichChieu.maLichChieu}_${index}`}
                                    label={moment(
                                      lichChieu.ngayChieuGioChieu
                                    ).format("hh:mm A")}
                                    component={Link}
                                    to={`/checkout/${lichChieu.maLichChieu}`}
                                    clickable
                                    className={classes.chip}
                                  />
                                ))}
                            </Grid>
                          ))}
                        </Grid>
                      </DetailTabPanel>
                    ))}
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </CustomCard>
      </div>
    </Fragment>
  );
};

Detail.propTypes = {};

export default Detail;
