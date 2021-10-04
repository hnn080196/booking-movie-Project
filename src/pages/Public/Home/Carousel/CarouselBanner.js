import React, { memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles";
import { makeStyles } from "@material-ui/core";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import classNames from "classnames";
import MovieBanner from "../MovieBanner";
import bannerImage01 from "assets/img/trang-ti.jpg";
import bannerImage02 from "assets/img/ban-tay-diet-quy-evil-expeller.png";
import bannerImage03 from "assets/img/lat-mat-48h.png";
const useStyles = makeStyles(styles);
// Arrow

function NextArrow(props) {
  const { onClick } = props;
  const classes = useStyles();
  return (
    <div className={classNames(classes.arrow, "nextArrow")} onClick={onClick}>
      <ArrowForwardIosRoundedIcon color="inherit" fontSize="large" />
    </div>
  );
}
function PrevArrow(props) {
  const { onClick } = props;
  const classes = useStyles();
  return (
    <div className={classNames(classes.arrow, "prevArrow")} onClick={onClick}>
      <ArrowBackIosRoundedIcon color="inherit" fontSize="large" />
    </div>
  );
}

const CarouselBanner = () => {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  console.log("carousel");
  return (
    <div id="my-carousel">
      <Slider {...settings} className={classes.sliderStyles}>
        <MovieBanner srcImage={bannerImage01} />
        <MovieBanner srcImage={bannerImage02} />
        <MovieBanner srcImage={bannerImage03} />
      </Slider>
    </div>
  );
};

export default memo(CarouselBanner);
