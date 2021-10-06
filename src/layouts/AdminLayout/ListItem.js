import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";

import PeopleIcon from "@material-ui/icons/People";
import TheatersIcon from "@material-ui/icons/Theaters";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { history } from "Routes";

export const mainListItems = (
  <div>
    <ListItem button  onClick={() => {
        history.push("/admin/dashboard");
      }}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem
      button
      onClick={() => {
        history.push("/admin/user");
      }}
    >
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="QL Người Dùng" />
    </ListItem>
    <ListItem
      button
      onClick={() => {
        history.push("/admin/film");
      }}
    >
      <ListItemIcon>
        <TheatersIcon />
      </ListItemIcon>
      <ListItemText primary="Quản Lý Phim" />
    </ListItem>
    <ListItem
      button
      onClick={() => {
        history.push("/admin/cinema");
      }}
    >
      <ListItemIcon>
        <HomeWorkIcon />
      </ListItemIcon>
      <ListItemText primary="Quản Lý Rạp" />
    </ListItem>
    <ListItem
      button
      onClick={() => {
        history.push("/admin/ticket");
      }}
    >
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Quản Lý Vé" />
    </ListItem>
  </div>
);
