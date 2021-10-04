import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import CinemasInfoTabPanel from "../CinemasInfoTabPanel/CinemasInfoTabPanel";
import moment from "moment";
import playButton from "assets/img/play-video.png";
import { history } from "Routes";

const useStyles = makeStyles((theme) => ({
  tabs: {
    borderRight: `1px solid rgba(223,227,232,0.7)`, //
    height: "400px",
    "& .MuiTabScrollButton-vertical": {
      display: "none",
    },
  },
  tabRoot: {
    color: "#fff",
    minWidth: "none",
    maxWidth: "none",
    "& .MuiTab-wrapper": {
      flexDirection: "row",
      justifyContent: "flex-start",
    },
    padding: "12px 0px",
    borderBottom: "1px solid",
  },
  img: {
    width: "60px",
    height: "60px",
    marginRight: "5px",
    borderRadius: "5px",
  },
  indicatorTabs: {
    background: "linear-gradient(0deg, #5560ff 17%, #aa52a1 63%, #ff4343 100%)",
    width: "5px",
  },
  text: {
    textTransform: "capitalize",
    marginBottom: "6px",
  },
  anchorText: {
    textTransform: "capitalize",
    color: "#ffeb00",
    textDecoration: "none",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  cover: {
    width: "150px",
    maxHeight: "200px",
    minWidth: "150px",
    position: "relative",
    cursor : "pointer"
  },
  card: {
    display: "flex",
    maxHeight: "200px",
  },
  content: {
    padding: "8px",
  },
  containerChip: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  button: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    opacity: 0,
    "&:hover": {
      opacity: 1,
      transition: "all 1s",
    },
  },
}));

function tabInfoProps(index) {
  return {
    id: `cinema-detail-tab-${index}`,
    "aria-controls": `cinema-detail-tabpanel-${index}`,
  };
}

const CinemasInfoTabs = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const matchXS = useMediaQuery(theme.breakpoints.down("xs"));
  const { theaterList } = props;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container>
      <Grid item xs={4}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          classes={{ root: classes.tabs, indicator: classes.indicatorTabs }}
        >
          {theaterList?.map((theater, index) => (
            <Tab
              {...tabInfoProps(index)}
              key={`${theater.tenCumRap}_${index}`}
              label={
                <React.Fragment>
                  <Typography align="left" variant="body2" display="inline">
                    <Box fontSize="body1.fontSize" className={classes.text}>
                      {theater.tenCumRap}
                    </Box>
                    <Box className={classes.text}>{`${theater.diaChi.substr(
                      0,
                      40
                    )}...`}</Box>
                    <Box
                      component={Link}
                      to="/theater"
                      className={classes.anchorText}
                    >
                      [ Detail ]
                    </Box>
                  </Typography>
                </React.Fragment>
              }
              classes={{ root: classes.tabRoot }}
            />
          ))}
        </Tabs>
      </Grid>
      <Grid item xs={8}>
        {theaterList?.map((theater, index) => (
          <CinemasInfoTabPanel
            value={value}
            index={index}
            key={`${theater.maCumRap}_${index}`}
          >
            {theater.danhSachPhim?.map((phim, index) => {
              return (
                <Grid container key={`${phim.tenphim}_${index}`} spacing={2}>
                  <Grid item xs={12}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cover}
                        component="img"
                        src={phim.hinhAnh}
                        title={phim.tenPhim}
                        onClick={() => {
                          history.push(`/detail/${phim.maPhim}`)
                        }}
                      />
                      {matchXS ? (
                        ""
                      ) : (
                        <div className={classes.details}>
                          <CardContent className={classes.content}>
                            <Typography
                              variant="body2"
                              align="left"
                              color="secondary"
                            >
                              <Box fontSize="1.1rem" fontWeight={700}>
                                {phim.tenPhim}
                              </Box>
                            </Typography>
                          </CardContent>

                          <CardContent className={classes.content}>
                            <Grid
                              container
                              spacing={1}
                              className={classes.containerChip}
                            >
                              {phim.lstLichChieuTheoPhim
                                ?.slice(0, 12)
                                .map((lichChieu, index) => {
                                  return (
                                    <Grid
                                      item
                                      key={`${lichChieu.maLichChieu}_${index}`}
                                    >
                                      <Chip
                                        label={moment(
                                          lichChieu.ngayChieuGioChieu
                                        ).format("hh:mm A")}
                                        component={Link}
                                        to={`/checkout/${lichChieu.maLichChieu}`}
                                        clickable
                                      />
                                    </Grid>
                                  );
                                })}
                            </Grid>
                          </CardContent>
                        </div>
                      )}
                    </Card>
                  </Grid>
                </Grid>
              );
            })}
          </CinemasInfoTabPanel>
        ))}
      </Grid>
    </Grid>
  );
};

CinemasInfoTabs.propTypes = {};

export default CinemasInfoTabs;
