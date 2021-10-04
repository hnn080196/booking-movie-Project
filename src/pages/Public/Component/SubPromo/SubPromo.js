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
import ThumbUpRoundedIcon from "@material-ui/icons/ThumbUpRounded";
import ChatRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import promo01 from "assets/img/promo/promo01.png";
const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "65%", // 16:9
  },
  cardContent: {
    padding: "8px 8px 0px 8px",
  },
  title: {
    fontWeight: "700",
    textTransform: "uppercase",
  },
  description: {
    textTransform: "lowercase",
  },
}));

const SubPromo = (props) => {
  const classes = useStyles();
  const { content } = props;
  return (
    <div>
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
            {`${content.title.substr(0, 45)}...`}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.description}
          >
            {`${content.description.substr(0, 60)}...`}
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

export default SubPromo;
