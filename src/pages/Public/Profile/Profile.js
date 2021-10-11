import { Container, Grid, Tab, Tabs } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import PropTypes from "prop-types";
import styles from "./styles";
import UserInfo from "../Component/UserInfo";
import BookingHistory from "../Component/BookingHistory";
import { useDispatch, useSelector } from "react-redux";
import {
  thongTinTaiKhoaAction,
  timKiemNguoiDungAction,
} from "store/actions/user";
import UpdateModal from "../Component/UpdateModal";
import ChangePassword from "../Component/ChangePassword";
import { motion } from "framer-motion";
import { pageTransitions, pageVariants } from "util/animated/transitionPage";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function profileProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
const useStyles = makeStyles(styles);
function Profile() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const { thongTinTaiKhoan, userLogin, thongTinTimKiem } = useSelector(
    (state) => state.users
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const currentUser = {
      taiKhoan: userLogin.taiKhoan,
    };
    dispatch(timKiemNguoiDungAction(userLogin.taiKhoan));
    dispatch(thongTinTaiKhoaAction(currentUser));
  }, []);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransitions}
      className={classes.profile}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} className={classes.profileHeader}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="profile"
              classes={{ indicator: classes.indicator }}
            >
              <Tab
                label="Thông Tin Tài Khoản"
                {...profileProps(0)}
                classes={{ wrapper: classes.tabWrapper }}
              />
              <Tab
                label="Lịch sử Đặt Vé"
                {...profileProps(1)}
                classes={{ wrapper: classes.tabWrapper }}
              />
            </Tabs>
          </Grid>
          <Grid item xs={12}>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
                <Grid container style={{ padding: "20px 0" }}>
                  <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
                    <UserInfo thongTinTaiKhoan={thongTinTimKiem} />
                  </Grid>G
                  <Grid item xs={12} md={6} className={classes.UpdateModal}>
                    <UpdateModal thongTinTaiKhoan={thongTinTimKiem} />
                    <ChangePassword thongTinTaiKhoan={thongTinTimKiem} />
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                <Grid container style={{ padding: "20px 0" }}>
                  <Grid item xs={12} style={{ textAlign: "center" }}>
                    <BookingHistory
                      thongTinDatVe={thongTinTaiKhoan.thongTinDatVe}
                    />
                  </Grid>
                </Grid>
              </TabPanel>
            </SwipeableViews>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
}

export default Profile;
