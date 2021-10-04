import {
  Badge,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import styles from "./styles";
import ThumbUpRoundedIcon from "@material-ui/icons/ThumbUpRounded";
import ChatRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import promo01 from "assets/img/promo/promo01.png";
const useStyles = makeStyles(styles);

const MainPromo = (props) => {
  const classes = useStyles();
  const { content } = props;
  return (
    <div className={classes.mainPromo}>
      <Card classes={{ root: classes.card }}>
        <CardMedia
          className={classes.media}
          image={promo01}
          title="Paella dish"
        />
        <CardContent classes={{ root: classes.cardContent }}>
          <Typography
            variant="body1"
            color="textSecondary"
            className={classes.title}
          >
            {`${content.title.substr(0, 65)}...`}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.description}
          >
            {`${content.description.substr(0, 85)}...`}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Badge badgeContent={content.like} color="error">
              <ThumbUpRoundedIcon />
            </Badge>
          </IconButton>
          <IconButton aria-label="share">
            <Badge badgeContent={content.comment} color="error">
              <ChatRoundedIcon />
            </Badge>
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default MainPromo;
