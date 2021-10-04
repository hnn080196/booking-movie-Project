import {
  ClickAwayListener,
  Grow,
  IconButton,
  makeStyles,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import _ from "lodash";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { history } from "Routes";
import { TOKEN, USER_LOGIN } from "util/settings/config";

const useStyles = makeStyles(({ theme }) => ({
    paperRoot: {
        backgroundColor: "#0e2a85",
      },
}));
const LoginHandle = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const { userLogin } = useSelector((state) => state.users);
  const anchorRef = useRef(null);
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  if (_.isEmpty(userLogin)) {
    return <Redirect to="/" />;
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

export default LoginHandle;
