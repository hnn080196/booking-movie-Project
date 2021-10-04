import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Box, Button, Divider, Modal, Fade } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import playButton from "assets/img/play-video.png";
import Backdrop from "@material-ui/core/Backdrop";
import { history } from "Routes";
import GlobalButton from "components/Button/Button";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10px 10px",
    backgroundColor: "transparent",
    boxShadow: "none",
    borderRadius: "20px",
    "& .MuiCardContent-root": {
      padding: "10px 20px 10px 20px",
      backgroundColor: "#032055",
    },
  },
  media: {
    height: 400,
    width: "100%",
    position: "relative",
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
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .MuiBackdrop-root": {
      backgroundColor: "rgba(0,0,0,0.8)",
    },
  },
}));
const MovieCardSimple = (props) => {
  const classes = useStyles();
  const { movie } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea component="div">
          <CardMedia className={classes.media} image={movie.hinhAnh}>
            <Button
              size="small"
              className={classes.button}
              disableRipple
              onClick={handleOpen}
            >
              <img
                src={playButton}
                alt="play-video"
                style={{ width: "60px", height: "60px" }}
              />
            </Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                {/* <a onClick={handleClose} disableRipple>
                  <img src={closeButton} alt="close button" />
                </a> */}
                <Box>
                  <iframe
                    width="715"
                    height="400"
                    src={movie.trailer}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                </Box>
              </Fade>
            </Modal>
          </CardMedia>
          <CardContent>
            <Box mb={1}>
              <Typography variant="subtitle1" color="initial" display="inline">
                {movie.tenPhim}
              </Typography>
            </Box>
            <Divider />
            <Box
              mt={1}
              mb={2}
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="caption" color="initial">
                100 phút
              </Typography>
              <Rating
                name="read-only"
                value={movie.danhGia / 2}
                readOnly
                size="small"
                precision={0.5}
              />
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              fontSize="body2.fontSize"
            >
              <GlobalButton
                nameButton="Detail"
                smallButton
                heightButton="40px"
                leftColor
                fullWidth
                component={Link}
                to={`/detail/${movie.maPhim}`}
                // onClick={() => history.push(`/detail/${movie.maPhim}`)}
              />
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

MovieCardSimple.propTypes = {};

export default MovieCardSimple;
