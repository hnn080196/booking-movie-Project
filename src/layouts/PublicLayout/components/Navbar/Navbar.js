import React, { useEffect, useMemo, useRef } from "react";
//
import styles from "./styles";
import logo from "../../../../assets/img/logo.png";
import {
  AppBar,
  Container,
  makeStyles,
  Toolbar,
  useMediaQuery,
  useTheme,
  IconButton,
  MenuItem,
  MenuList,
  Popper,
  Grow,
  ClickAwayListener,
  Paper,
} from "@material-ui/core";

import AccountCircle from "@material-ui/icons/AccountCircle";
import GlobalButton from "components/Button/Button";
import { useState } from "react";
import DrawerNav from "./component/Drawer";
import CommonTabs from "components/CommonTabs";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import _ from "lodash";
import { TOKEN, USER_LOGIN } from "util/settings/config";
import { history } from "Routes";
import { NavHashLink } from "react-router-hash-link";

// Tab component

const useStyles = makeStyles(styles);
///
const Navbar = () => {
  const classes = useStyles();
  const { userLogin } = useSelector((state) => state.users);
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  const routesTab = [
    { name: "Tìm Kiếm", link: "/#search" },
    { name: "Phim", link: "/#movies" },
    { name: "Cụm Rạp", link: "/#cinemas" },
    { name: "Tin Tức", link: "/#news" },
    { name: "App", link: "/#app" },
    { name: "Liên Hệ", link: "/#contact" },
  ];
  const routesTabMemo = useMemo(() => routesTab, []);
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  const matchSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchMD = useMediaQuery(theme.breakpoints.down("md"));
  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <div className={classes.loginButton}>
          <GlobalButton
            nameButton="Đăng Nhập"
            smallButton
            heightButton="40px"
            component={Link}
            to="/login"
          />
          <GlobalButton
            nameButton="Đăng Ký"
            smallButton
            heightButton="40px"
            ml="5px"
            component={Link}
            to="/register"
          />
        </div>
      );
    }
    return (
      <div>
        <IconButton
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          style={{ color: "#fff" }}
        >
          <AccountCircle />
        </IconButton>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper classes={{ root: classes.paperRoot }}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow">
                    <MenuItem
                      onClick={(event) => {
                        if (
                          anchorRef.current &&
                          anchorRef.current.contains(event.target)
                        ) {
                          return;
                        }
                        setOpen(false);
                        history.push("/profile");
                      }}
                    >
                      {userLogin.taiKhoan}
                    </MenuItem>
                    {userLogin.maLoaiNguoiDung === "QuanTri" ? (
                      <MenuItem
                        onClick={(event) => {
                          if (
                            anchorRef.current &&
                            anchorRef.current.contains(event.target)
                          ) {
                            return;
                          }
                          setOpen(false);
                          history.push("/admin");
                        }}
                      >
                        Quản Lý
                      </MenuItem>
                    ) : (
                      ""
                    )}
                    <MenuItem
                      // onClick={handleClose}
                      onClick={(event) => {
                        if (
                          anchorRef.current &&
                          anchorRef.current.contains(event.target)
                        ) {
                          return;
                        }
                        setOpen(false);
                        localStorage.removeItem(USER_LOGIN);
                        localStorage.removeItem(TOKEN);
                        history.push("/");
                        window.location.reload();
                      }}
                    >
                      Đăng Xuất
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
  };

  return (
    <>
      <AppBar position="fixed" className={classes.appbar} id="appbar">
        <Container maxWidth="lg">
          <Toolbar classes={{ root: classes.toolbar }}>
            <NavHashLink smooth to="/#" exact={true}>
              <img src={logo} alt="logo" />
            </NavHashLink>
            {matchMD ? (
              <DrawerNav routesTab={routesTabMemo} userLogin={userLogin} />
            ) : (
              <>
                <CommonTabs routesTab={routesTabMemo} />
                {renderLogin()}
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Navbar;
