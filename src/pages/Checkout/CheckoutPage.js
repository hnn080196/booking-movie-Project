import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Toolbar,
  AppBar,
  makeStyles,
  withStyles,
  Divider,
  Typography,
  Drawer,
  Box,
  Button,
  Container,
  Grid,
  SwipeableDrawer,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import {
  bookingListAction,
  datVeHoanTatAction,
  getBookingListAction,
  postBookingInfoAction,
} from "store/actions/booking";
import { Fragment } from "react";
import _ from "lodash";
import { ThongTinDatVe } from "_core/models/ThongTinDatVe";
import { USER_LOGIN } from "util/settings/config";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import ShopIcon from "@material-ui/icons/Shop";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import ListAltIcon from "@material-ui/icons/ListAlt";
import HomeIcon from "@material-ui/icons/Home";
import StepConnector from "@material-ui/core/StepConnector";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { history } from "Routes";

import Swal from "sweetalert2";
import { Loading } from "components";
import { thongTinTaiKhoaAction } from "store/actions/user";
import BookingHistory from "pages/Public/Component/BookingHistory";
import LoginHandle from "components/LoginHandle";
// component colorlibconnector
/***************************************************************** */

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#31d7a9",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <ShopIcon />,
    2: <MovieFilterIcon />,
    3: <ListAltIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};
const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);
/***************************************************************** */
//

//Đặt Vé
const useChonGheStyles = makeStyles((theme) => ({
  row: {
    textAlign: "center",
  },

  seat: {
    minWidth: "40px",
    height: "40px",
    padding: "0",
    margin: "3px",
    cursor: "pointer",
    "&:hover": { backgroundColor: "#0adc98" },
    "&.booking-seat": {
      backgroundColor: "#0adc98",
    },
    "&.booked-seat": {
      backgroundColor: "#999",
    },
    [theme.breakpoints.down(620)]: {
      minWidth: "30px",
      marginBottom: "5px",
      height: "30px",
      // fontSize: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      minWidth: "28px",
      height: "28px",
      // fontSize: "10px",
    },
  },
  boughtSeat: {
    backgroundColor: "#999",
  },
  note: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  screenArea: {
    perspective: "100px",
    margin: "0 auto 50px",
    // width: "500px",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto 30px",
    },
  },
  screen: {
    backgroundColor: "#fff",
    height: "80px",
    width: "80%",
    margin: "15px 0",
    transform: "rotateX(-15deg)",
    boxShadow: "0 10px 20px rgba(255, 255, 255, 0.7)",
  },
}));
function ChonGhe(props) {
  const classes = useChonGheStyles();
  const { chiTietPhongVe, bookingList } = props;
  const theme = useTheme();
  const { danhSachGhe } = chiTietPhongVe;
  const dispatch = useDispatch();
  const matchXS = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <div className={classes.screenArea}>
        <div className={classes.screen}></div>
      </div>
      <Box width={1}>
        <div className={classes.row}>
          {danhSachGhe?.map((ghe, index) => {
            let bookingSeatClass = "";
            let bookedSeatClass = "";
            let foundSeat = bookingList.findIndex(
              (seat) => seat.maGhe === ghe.maGhe
            );
            // let gheDaDat = bookingList.findIndex)
            if (ghe.daDat === true) {
              bookedSeatClass = "booked-seat";
            }
            if (foundSeat !== -1) {
              bookingSeatClass = "booking-seat";
            }
            return (
              <Fragment key={`${ghe.maGhe}_${index}`}>
                <Box
                  component={Button}
                  disabled={ghe.daDat}
                  className={`${classes.seat} ${bookingSeatClass} ${bookedSeatClass}`}
                  display="inline-block"
                  onClick={() => dispatch(bookingListAction(ghe))}
                  bgcolor={
                    ghe.loaiGhe === "Thuong"
                      ? "rgb(65, 66, 70)"
                      : "rgb(14, 151, 218)"
                  }
                >
                  {ghe.daDat ? (
                    <PersonRoundedIcon color="primary" />
                  ) : (
                    `${index + 1}`
                  )}
                </Box>
                {matchXS ? (
                  (index + 1) % 10 === 0 ? (
                    <br />
                  ) : (
                    ""
                  )
                ) : (index + 1) % 16 === 0 ? (
                  <br />
                ) : (
                  ""
                )}
                {/* {(index + 1) % 16 === 0 ? <br /> : ""} */}
              </Fragment>
            );
          })}
        </div>
        <div className={classes.note}>
          <Box>
            <Box
              component={Button}
              className={`${classes.seat}`}
              display="inline-block"
              bgcolor="rgb(65, 66, 70)"
            >
              10
            </Box>{" "}
            : Ghế thường
          </Box>
          <Box>
            <Box
              component={Button}
              className={`${classes.seat}`}
              display="inline-block"
              bgcolor="rgb(14, 151, 218)"
            >
              10
            </Box>{" "}
            : Ghế VIP
          </Box>
          <Box>
            <Box
              component={Button}
              className={`${classes.seat} booking-seat `}
              display="inline-block"
              bgcolor="rgb(14, 151, 218)"
            >
              10
            </Box>{" "}
            : Ghế Đã Chọn
          </Box>
          <Box>
            <Box
              disabled
              component={Button}
              className={`${classes.seat} `}
              display="inline-block"
              bgcolor="#999"
            >
              <PersonRoundedIcon color="primary" />
            </Box>{" "}
            : Ghế Đã Đặt
          </Box>
        </div>
      </Box>
    </div>
  );
}
/***************************************************************** */
const useKiemTraThongTinStyles = makeStyles((theme) => ({
  imageContainer: {
    "& .MuiGrid-item ": {
      padding: "0px 20px",
    },
  },
  image: {
    width: "100%",
    height: "400px",
  },
}));
//Kiểm tra thông tin
function KiemTraThongTin(props) {
  const classes = useKiemTraThongTinStyles();
  const { chiTietPhongVe, bookingList } = props;
  const { thongTinPhim } = chiTietPhongVe;
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} className={classes.imageContainer}>
        <img src={thongTinPhim.hinhAnh} alt="test" className={classes.image} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" color="default" gutterBottom>
          <Box>{thongTinPhim.tenPhim}</Box>
        </Typography>
        <Typography variant="subtitle1" color="default" gutterBottom>
          <Box display="inline" fontWeight={700}>
            Địa Chỉ :
          </Box>
          {thongTinPhim.diaChi}
        </Typography>
        <Typography variant="subtitle1" color="default" gutterBottom>
          <Box display="inline" fontWeight={700}>
            Giờ Chiếu :
          </Box>
          {thongTinPhim.ngayChieu}-{thongTinPhim.gioChieu}
        </Typography>
        <Typography variant="subtitle1" color="default" gutterBottom>
          <Box display="inline" fontWeight={700}>
            Ghế Đã Đặt :
          </Box>
          {_.sortBy(bookingList, ["stt"]).map((seat, index) => {
            return (
              <Box
                display="inline"
                mr="5px"
                key={`${seat.maGhe}_${index}`}
                fontWeight={700}
                color="#31d7a9"
                fontSize="16px"
              >
                {seat.stt}
              </Box>
            );
          })}
        </Typography>
        <Typography variant="subtitle1" color="default" gutterBottom>
          <Box display="inline" fontWeight={700}>
            Tổng Tiền :
          </Box>{" "}
          {bookingList
            .reduce((sum, seat, index) => {
              return (sum += seat.giaVe);
            }, 0)
            .toLocaleString()}{" "}
          Đồng
        </Typography>
      </Grid>
    </Grid>
  );
}
/**************************************************************** */

// KetQua Da Dat
//function getstep
/***************************************************************** */

function getSteps() {
  return ["Chọn Ghế", "Thông Tin Vé Đã Đặt", "Lịch Sử Đặt Vé"];
}
const getStepContent = (
  step,
  chiTietPhongVe,
  bookingList,
  thongTinTaiKhoan
) => {
  switch (step) {
    case 0:
      return (
        <ChonGhe chiTietPhongVe={chiTietPhongVe} bookingList={bookingList} />
      );
    case 1:
      return (
        <KiemTraThongTin
          chiTietPhongVe={chiTietPhongVe}
          bookingList={bookingList}
        />
      );
    case 2:
      return <BookingHistory thongTinDatVe={thongTinTaiKhoan.thongTinDatVe} />;
    default:
      return "Unknown step";
  }
};
// style
/***************************************************************** */
const useStyles = makeStyles(styles);
const CheckoutPage = (props) => {
  const classes = useStyles();
  const { chiTietPhongVe, bookingList } = useSelector((state) => state.booking);
  const { thongTinTaiKhoan, userLogin } = useSelector((state) => state.users);
  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    const { id } = props.match.params;
    dispatch(getBookingListAction(id));
  }, []);

  useEffect(() => {
    const currentUser = {
      taiKhoan: userLogin.taiKhoan,
    };
    dispatch(thongTinTaiKhoaAction(currentUser));
  }, [activeStep]);

  const { thongTinPhim } = chiTietPhongVe;
  // get step
  const steps = getSteps();

  const handleReset = () => {
    setActiveStep(0);
  };
  /******Toggle Drawer function */
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  const renderStepper = (
    <Stepper
      alternativeLabel
      activeStep={activeStep}
      connector={<ColorlibConnector />}
      className={classes.stepper}
    >
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel
            StepIconComponent={ColorlibStepIcon}
            classes={{
              label: classes.stepLabel,
            }}
          >
            {label}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
  const renderDrawer = (
    <SwipeableDrawer
      className={classes.drawer}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="right"
      open={open}
    >
      <div
        // className={clsx(classes.drawer)}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={toggleDrawer(false)} style={{ color: " #fff" }}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <Box ml={1} mr={1}>
          <Box>
            <Typography variant="h6" className={classes.tenPhim} gutterBottom>
              {thongTinPhim.tenPhim}
            </Typography>
            <Typography variant="body2" color="initial" gutterBottom>
              <Box fontWeight="600" display="inline">
                Địa Chỉ:{" "}
              </Box>
              {thongTinPhim.diaChi}
            </Typography>
            <Typography variant="body2" color="initial" gutterBottom>
              <Box fontWeight="600" display="inline">
                Lịch Chiếu:{" "}
              </Box>
              {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}
            </Typography>
          </Box>
          <Divider />
          <Box display="flex" alignItems="center" flexWrap="wrap" mb={1}>
            <Typography variant="subtitle1" color="initial">
              <Box fontWeight="600" display="inline" mr={1}>
                Ghế :{" "}
              </Box>
            </Typography>
            {_.sortBy(bookingList, ["stt"]).map((seat, index) => {
              return (
                <Box
                  mr="5px"
                  key={`${seat.maGhe}_${index}`}
                  fontWeight={700}
                  color="#31d7a9"
                  fontSize="16px"
                >
                  {seat.stt}
                </Box>
              );
            })}
          </Box>
          <Box>
            <Typography variant="subtitle1" color="initial">
              <Box fontWeight="600" display="inline">
                Thành Tiền :{" "}
              </Box>
              {bookingList
                .reduce((sum, seat, index) => {
                  return (sum += seat.giaVe);
                }, 0)
                .toLocaleString()}{" "}
              đồng
            </Typography>
          </Box>
          <Divider />
          <Box mt={1} mb={1}>
            <Typography variant="subtitle1" color="initial">
              <Box fontWeight="600" display="inline">
                Email :{" "}
              </Box>
            </Typography>
            <Typography variant="subtitle1" color="initial">
              email@gmail.com
            </Typography>
          </Box>
          <Divider />
          <Box mt={1} mb={1}>
            <Typography variant="subtitle1" color="initial">
              <Box fontWeight="600" display="inline">
                Số điện thoại :{" "}
              </Box>
            </Typography>
            <Typography variant="subtitle1" color="initial">
              123457890
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className={classes.button}
            onClick={async () => {
              const thongTinDatVe = new ThongTinDatVe();
              thongTinDatVe.maLichChieu = props.match.params.id;
              thongTinDatVe.danhSachVe = bookingList;
              let user;
              if (localStorage.getItem(USER_LOGIN)) {
                user = JSON.parse(localStorage.getItem(USER_LOGIN));
              }
              thongTinDatVe.taiKhoanNguoiDung = user.taiKhoan;
              toggleDrawer(false);
              if (thongTinDatVe.danhSachVe.length !== 0) {
                await dispatch(postBookingInfoAction(thongTinDatVe));
                await Swal.fire("Đặt Vé Thành Công", "kết thúc", "success");
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
              } else {
                Swal.fire("Vui Lòng Chọn Ghế!", "", "warning");
              }
            }}
          >
            Đặt Vé
          </Button>
        </Box>
      </div>
    </SwipeableDrawer>
  );

  return (
    <div>
      <AppBar position="fixed" classes={{ root: classes.appBar }}>
        <Toolbar className={classes.toolbarContainer}>
          <Typography variant="h6" noWrap className={classes.title}>
            Đặt Vé Xem Phim
          </Typography>
          <Box>
            {activeStep === steps.length - 1 ? (
              <div>
                <Button onClick={handleReset} className={classes.button}>
                  Đặt Tiếp
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  component={Link}
                  to="/"
                  exact
                >
                  Home
                </Button>
              </div>
            ) : (
              <div>
                {activeStep === steps.length - 2 ? (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      dispatch(datVeHoanTatAction);
                      setActiveStep((prevActiveStep) => prevActiveStep + 1);
                    }}
                    className={classes.button}
                  >
                    Tiếp
                  </Button>
                ) : (
                  ""
                )}
              </div>
            )}
          </Box>
          {activeStep === 0 ? (
            <Box display="flex">
              <IconButton
                style={{ color: "#fff" }}
                aria-label="open drawer"
                className={clsx(open && classes.hide)}
                onClick={() => {
                  dispatch(datVeHoanTatAction);
                  history.push("/");
                }}
              >
                <HomeIcon />
              </IconButton>
              <LoginHandle />
              <IconButton
                style={{ color: "#fff" }}
                aria-label="open drawer"
                onClick={toggleDrawer(true)}
                className={clsx(open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          ) : (
            ""
          )}
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" component="main" className={classes.content}>
        <div className={classes.toolbar} />
        {renderStepper}
        {getStepContent(
          activeStep,
          chiTietPhongVe,
          bookingList,
          thongTinTaiKhoan
        )}
        {activeStep === 0 ? renderDrawer : ""}
      </Container>
    </div>
  );
};

CheckoutPage.propTypes = {};

export default CheckoutPage;
