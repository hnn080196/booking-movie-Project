import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Avatar,
  Container,
  Grid,
  makeStyles,
  Tabs,
  useMediaQuery,
  useTheme,
  Box,
  Typography,
} from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import CinemasTabPanel from "pages/Public/Component/CinemasTabPanel";
import CinemasInfoTabs from "pages/Public/Component/CinemasInfoTabs";

function a11yProps(index) {
  return {
    id: `cinemas-tab-${index}`,
    "aria-controls": `cinemas-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
  },
  tabs: {
    borderRight: `1px solid rgba(223,227,232,0.7)`, //
    [theme.breakpoints.down("sm")]: {
      borderRight: "none",
    },
  },
  flexContainerTabs: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
    },
  },
  indicatorTabs: {
    background: "linear-gradient(0deg, #5560ff 17%, #aa52a1 63%, #ff4343 100%)",
    width: "5px",
    [theme.breakpoints.down("sm")]: {
      height: "5px",
      background:
        "linear-gradient(90deg, #5560ff 17%, #aa52a1 63%, #ff4343 100%)",
    },
  },
  cinemasTab: {
    padding: "12px 0px",
    minWidth: "60px",
  },
}));

const CinemaTableHome = (props) => {
  const classes = useStyles();
  const [cinemaValue, setCinemaValue] = useState(0);
  const { cinemaList } = props;
  const handleChangeCinemaTabs = (event, newValue) => {
    setCinemaValue(newValue);
  };
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("sm"));
  const renderVertical = (
    <Grid item md={1}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={cinemaValue}
        onChange={handleChangeCinemaTabs}
        aria-label="cinemas"
        classes={{
          root: classes.tabs,
          indicator: classes.indicatorTabs,
        }}
        indicatorColor="secondary"
      >
        {cinemaList.map((cinema, index) => (
          <Tab
            key={`${cinema.tenHeThongRap}_${index}`}
            classes={{ root: classes.cinemasTab }}
            {...a11yProps(index)}
            icon={
              <Avatar square src={cinema.logo} alt={cinema.tenHeThongRap} />
            }
          />
        ))}
      </Tabs>
    </Grid>
  );
  const renderHorizontal = (
    <Grid item xs={12} style={{ marginBottom: "10px" }}>
      <Tabs
        value={cinemaValue}
        onChange={handleChangeCinemaTabs}
        aria-label="cinemas"
        classes={{
          root: classes.tabs,
          indicator: classes.indicatorTabs,
          flexContainer: classes.flexContainerTabs,
        }}
        indicatorColor="secondary"
      >
        {cinemaList.map((cinema, index) => (
          <Tab
            key={`${cinema.tenHeThongRap}_${index}`}
            classes={{ root: classes.cinemasTab }}
            {...a11yProps(index)}
            icon={
              <Avatar square src={cinema.logo} alt={cinema.tenHeThongRap} />
            }
          />
        ))}
      </Tabs>
    </Grid>
  );
  return (
    <section id="cinemas">
      <Container maxWidth="lg">
        <Grid container style={{ marginBottom: "20px" }}>
          <Grid item xs={12}>
            <Typography noWrap align="center">
              <Box fontSize="3rem" fontWeight={700}>
                Hệ Thống Rạp
              </Box>
              <Box fontSize={18} fontWeight={300}>
                Chọn ngay rạp bạn muốn đến .
              </Box>
            </Typography>
          </Grid>
        </Grid>
        <Grid container className={classes.root}>
          {matchDownSM ? renderHorizontal : renderVertical}
          <Grid item md={11} xs={12}>
            {cinemaList.map((cinema, index) => (
              <>
                <CinemasTabPanel
                  value={cinemaValue}
                  index={index}
                  key={`${cinema.tenHeThongRap}_${index}`}
                >
                  <CinemasInfoTabs theaterList={cinema.lstCumRap} />
                </CinemasTabPanel>
              </>
            ))}
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

CinemaTableHome.propTypes = {
  cinemaList: PropTypes.any.isRequired,
};

export default React.memo(CinemaTableHome);
