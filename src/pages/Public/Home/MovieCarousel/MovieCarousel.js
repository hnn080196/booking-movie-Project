import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import styles from "./styles";
import TabPanelCarousel from "../TabPanelCarousel/TabPanelCarousel";
import { useEffect } from "react";

const useStyles = makeStyles(styles);
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
const MovieCarousel = (props) => {
  const classes = useStyles(props);
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [routes] = useState([
    { name: "Sắp Chiếu" },
    { name: "Đang Chiếu" },
    { name: "Hot" },
  ]);
  const { movieList } = props;
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className={classes.movieCarousel} id="movies">
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item xs={12} md={6} className={classes.movieCarousel__left}>
            <Typography noWrap align={matchesSM ? "center" : "left"}>
              <Box fontSize={matchesXS ? "2.5rem" : "3rem"} fontWeight={700}>
                PHIM
              </Box>
              <Box fontSize={matchesXS ? 16 : 18} fontWeight={300}>
                Hãy chắc chắn rằng bạn không lỡ bộ phim nào
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className={classes.movieCarousel__right}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              aria-label="full width tabs example"
              classes={{ root: classes.root }}
            >
              {routes.map((route, index) => (
                <Tab
                  label={route.name}
                  {...a11yProps(index)}
                  className={classes.tab}
                />
              ))}
            </Tabs>
          </Grid>
        </Grid>
        <TabPanelCarousel
          value={value}
          index={0}
          dir={theme.direction}
          movieList={movieList}
        />
        <TabPanelCarousel
          value={value}
          index={1}
          dir={theme.direction}
          movieList={movieList}
        />
        <TabPanelCarousel
          value={value}
          index={2}
          dir={theme.direction}
          movieList={movieList}
        />
      </Container>
    </section>
  );
};

MovieCarousel.propTypes = {
  movieList: PropTypes.any.isRequired,
};

export default memo(MovieCarousel);
