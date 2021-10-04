export default (theme) => ({
  root: {
    padding: "30px 0",
  },
  link: {
    display: "block",
    color: theme.palette.common.white,
    opacity: 0.5,
    "&:hover": {
      opacity: 1,
    },
  },
  footer__top: {
    paddingBottom: "20px",
  },
  footer__bottom: {
    paddingTop: "15px",
  },
});
