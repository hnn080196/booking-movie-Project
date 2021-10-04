import { alpha, Card, Typography } from "@material-ui/core";
import React from "react";
import { styled } from "@material-ui/styles";
import HomeWorkIcon from "@material-ui/icons/HomeWork";

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  textAlign: "center",
  padding: theme.spacing(5, 0),
  color: "#B72136",
  backgroundColor: "#FFE7D9",
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
  backgroundImage: `linear-gradient(135deg, ${alpha("#FFE7D9", 0)} 0%, ${alpha(
    "#B72136",
    0.24
  )} 100%)`,
}));
const TOTAL = 6;
export default function CinemaCard() {
  return (
    <RootStyle>
      <IconWrapperStyle>
        <HomeWorkIcon
          style={{ width: "30px", height: "30px", color: "#B72136" }}
        />
      </IconWrapperStyle>
      <Typography variant="h3">{TOTAL}</Typography>
      <Typography variant="subtitle2" style={{ opacity: 0.72 }}>
        Hệ Thống Rạp
      </Typography>
    </RootStyle>
  );
}
