import bgapp from "assets/img/backapp.jpg";

export default (theme) => ({
  mobileApp: {
    padding: "120px 0 80px",
    background: `url(${bgapp}) `,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  },
  mobileApp__right: {
    position: "relative",
  },
  mobileApp__img: {
    padding: "0 29%",
    width: "100%",
    height: "auto",
  },
  mobileApp__slider: {
    position: "absolute",
    padding: "3% 30.8% 0 30.8%",
    top: 0,
    left: 0,
    right: 0,
    "& .slick-list": {
      borderRadius: "25px",
    },
  },
  link: {
    color: "#FFEB00",
    fontWeight: '700'
  },
});
