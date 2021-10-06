import React, { memo, useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import GlobalButton from "components/Button/Button";
import { history } from "Routes";
import { TOKEN, USER_LOGIN } from "util/settings/config";
import _ from "lodash";

import { NavHashLink } from "react-router-hash-link";
//
const useStyles = makeStyles((theme) => ({
  drawer: {
    backgroundColor: theme.palette.secondary.main,
  },
  drawerItemText: {
    ...theme.typography.subtitle1,
    color: theme.palette.primary.contrastText,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  menuButton: {
    color: theme.palette.common.white,
  },
}));
const DrawerNav = (props) => {
  const classes = useStyles();
  const { routesTab, userLogin } = props;
  const [openDrawer, setOpenDrawer] = useState(false);

  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <>
          <ListItem
            button
            onClick={() => {
              setOpenDrawer(false);
              history.push("/login");
            }}
          >
            <ListItemText className={classes.drawerItemText}>
              <GlobalButton nameButton="Đăng Nhập" fullWidth />
            </ListItemText>
          </ListItem>
          <ListItem
            button
            onClick={() => {
              setOpenDrawer(false);
              history.push("/register");
            }}
          >
            <ListItemText className={classes.drawerItemText}>
              <GlobalButton nameButton="Đăng Ký" fullWidth />
            </ListItemText>
          </ListItem>
        </>
      );
    }
    return (
      <>
        <ListItem
          button
          onClick={() => {
            setOpenDrawer(false);
            history.push("/profile");
          }}
        >
          <ListItemText className={classes.drawerItemText}>
            {userLogin.taiKhoan}
          </ListItemText>
        </ListItem>
        {userLogin.maLoaiNguoiDung === "QuanTri" ? (
          <ListItem
            button
            onClick={() => {
              setOpenDrawer(false);
              history.push("/admin");
            }}
          >
            <ListItemText className={classes.drawerItemText}>
              Quản Lý
            </ListItemText>
          </ListItem>
        ) : undefined}
        <ListItem
          button
          onClick={() => {
            setOpenDrawer(false);
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(TOKEN);
            history.push("/");
            window.location.reload();
          }}
        >
          <ListItemText className={classes.drawerItemText}>
            Đăng Xuất
          </ListItemText>
        </ListItem>
      </>
    );
  };
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="right"
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <div
          className={classes.list}
          onClick={() => setOpenDrawer(false)}
          onKeyDown={() => setOpenDrawer(false)}
        >
          <List disablePadding>
            {routesTab.map((route, index) => (
              <>
                <ListItem
                  button
                  onClick={() => setOpenDrawer(false)}
                  component={NavHashLink}
                  to={route.link}
                  key={index}
                  smooth
                >
                  <ListItemText className={classes.drawerItemText}>
                    {route.name}
                  </ListItemText>
                </ListItem>
                <Divider />
              </>
            ))}
            {renderLogin()}
            {/* {userLogin.length === 0 ? renderSignIn : renderUser} */}
          </List>
        </div>
      </Drawer>
      <IconButton
        aria-label="primary"
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default memo(DrawerNav);
