import { alpha, Card, Typography } from "@material-ui/core";
import React from "react";
import { styled } from "@material-ui/styles";
import HomeWorkIcon from "@material-ui/icons/HomeWork";

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  textAlign: "center",
  padding: theme.spacing(5, 0),
  color: "#B78103",
  backgroundColor: "#FFE16A",
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
  backgroundImage: `linear-gradient(135deg, ${alpha("#FFE16A", 0)} 0%, ${alpha(
    "#B78103",
    0.24
  )} 100%)`,
}));
export default function DeviceCard() {
  return (
    <RootStyle>
      <IconWrapperStyle>
        <HomeWorkIcon
          style={{ width: "30px", height: "30px", color: "#B72136" }}
        />
      </IconWrapperStyle>
      <Typography variant="h3">60</Typography>
      <Typography variant="subtitle2" style={{ opacity: 0.72 }}>
        Rạp
      </Typography>
    </RootStyle>
  );
}
