import { alpha, Card, Typography } from "@material-ui/core";
import React from "react";
import { styled } from "@material-ui/styles";
import TheatersIcon from "@material-ui/icons/Theaters";

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  textAlign: "center",
  padding: theme.spacing(5, 0),
  color: "#005249",
  backgroundColor: "#C8FACD",
  borderRadius: "20px",
}));

const IconWrapperStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: "center",
  marginBottom: theme.spacing(3),
  color: theme.palette.primary.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha("#005249", 0)} 0%, ${alpha(
    "#005249",
    0.24
  )} 100%)`,
}));
const TOTAL = 714000;
export default function MovieCard() {
  return (
    <RootStyle>
      <IconWrapperStyle>
        <TheatersIcon
          style={{ width: "30px", height: "30px", color: "#005249" }}
        />
      </IconWrapperStyle>
      <Typography variant="h3">{TOTAL}</Typography>
      <Typography variant="subtitle2" style={{ opacity: 0.72 }}>
        Phim
      </Typography>
    </RootStyle>
  );
}
