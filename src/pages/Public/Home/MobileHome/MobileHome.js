import {
  makeStyles,
  Container,
  Grid,
  Typography,
  Box,
  Link,
} from "@material-ui/core";
import GlobalButton from "components/Button/Button";
import React from "react";
import styles from "./styles";
import phoneImg from "../../../../assets/img/mobile.png";
import Slider from "react-slick";
import slideImg1 from "assets/img/mobileapp/slide1.jpg";
import slideImg3 from "assets/img/mobileapp/slide3.jpg";
import slideImg4 from "assets/img/mobileapp/slide4.jpg";
import slideImg16 from "assets/img/mobileapp/slide16.jpg";
const useStyles = makeStyles(styles);
function ArrowDisplayNone(props) {
  return <div></div>;
}
const MobileHome = () => {
  const classes = useStyles();
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    nextArrow: <ArrowDisplayNone />,
    prevArrow: <ArrowDisplayNone />,
  };
  return (
    <div className={classes.mobileApp} id="app">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              <Box fontWeight={700}>
                Ứng dụng tiện lợi dành cho người yêu điện ảnh
              </Box>
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              <Box>
                Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                và đổi quà hấp dẫn.
              </Box>
            </Typography>
            <Box mb={2} mt={2}>
              <GlobalButton nameButton="App miễn phí - Tải về ngay" />
            </Box>
            <Typography variant="subtitle2">
              <Box letterSpacing="1px">
                TIX có hai phiên bản{" "}
                <Link href="#" className={classes.link}>
                  iOS
                </Link>
                và{" "}
                <Link href="#" className={classes.link}>
                  Android
                </Link>
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className={classes.mobileApp__right}>
            <img
              src={phoneImg}
              alt="phone"
              className={classes.mobileApp__img}
            />
            <div className={classes.mobileApp__slider}>
              <Slider {...settings}>
                <img src={slideImg1} alt="slide 01" />
                <img src={slideImg3} alt="slide 01" />
                <img src={slideImg4} alt="slide 01" />
                <img src={slideImg16} alt="slide 01" />
              </Slider>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MobileHome;
