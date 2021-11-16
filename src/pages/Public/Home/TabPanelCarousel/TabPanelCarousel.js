import React, { memo } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCardSimple from "../MovieCardSimple";

function ArrowDisplayNone(props) {
  return <div></div>;
}
const TabPanelCarousel = (props) => {
  const { value, index, labelName, movieList, ...other } = props;

  let settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 1000,
    nextArrow: <ArrowDisplayNone />,
    prevArrow: <ArrowDisplayNone />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Slider {...settings}>
        {movieList.map((movie, index) => (
          <MovieCardSimple movie={movie} key={index} />
        ))}
      </Slider>
    </div>
  );
};

TabPanelCarousel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default memo(TabPanelCarousel);
