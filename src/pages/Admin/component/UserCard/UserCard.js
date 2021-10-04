import { alpha, Card, Typography } from "@material-ui/core";
import React from "react";
import { styled } from "@material-ui/styles";
import PeopleIcon from "@material-ui/icons/People";

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  textAlign: "center",
  padding: theme.spacing(5, 0),
  color: "#04297A",
  backgroundColor: "#D0F2FF",
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
  backgroundImage: `linear-gradient(135deg, ${alpha("#D0F2FF", 0)} 0%, ${alpha(
    "#04297A",
    0.24
  )} 100%)`,
}));
const TOTAL = 50;
export default function UserCard() {
  return (
    <RootStyle>
      <IconWrapperStyle>
        <PeopleIcon
          style={{ width: "30px", height: "30px", color: "#04297A" }}
        />
      </IconWrapperStyle>
      <Typography variant="h3">{TOTAL}</Typography>
      <Typography variant="subtitle2" style={{ opacity: 0.72 }}>
        Người Dùng
      </Typography>
    </RootStyle>
  );
}
