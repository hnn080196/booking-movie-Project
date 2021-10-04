import {
  Box,
  Container,
  Divider,
  Grid,
  Hidden,
  Link,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
import styles from "./styles";
import AppleIcon from "@material-ui/icons/Apple";
import AndroidIcon from "@material-ui/icons/AndroidOutlined";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <footer className={classes.root} id="contact">
        <Container maxWidth="lg">
          <Grid container spacing={2} className={classes.footer__top}>
            <Grid item sm={4} container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  Boleto
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">
                  <Box
                    mb={1}
                    component={Link}
                    href="#"
                    underline="none"
                    className={classes.link}
                  >
                    FAQ
                  </Box>
                  <Box
                    mb={1}
                    component={Link}
                    href="#"
                    underline="none"
                    className={classes.link}
                  >
                    Brand Guidelines
                  </Box>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">
                  <Box
                    mb={1}
                    component={Link}
                    href="#"
                    underline="none"
                    className={classes.link}
                  >
                    Thỏa thuận sử dụng
                  </Box>
                  <Box
                    mb={1}
                    component={Link}
                    href="#"
                    underline="none"
                    className={classes.link}
                  >
                    Chính sách bảo mật
                  </Box>
                </Typography>
              </Grid>
            </Grid>
            <Grid item sm={4} container>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  Đối tác
                </Typography>
              </Grid>
              <Grid item xs={12} container>
                <Grid item xs>
                  1
                </Grid>
                <Grid item xs>
                  2
                </Grid>
                <Grid item xs>
                  3
                </Grid>
                <Grid item xs>
                  4
                </Grid>
                <Grid item xs>
                  5
                </Grid>
              </Grid>
              <Grid item xs={12} container>
                <Grid item xs>
                  6
                </Grid>
                <Grid item xs>
                  7
                </Grid>
                <Grid item xs>
                  8
                </Grid>
                <Grid item xs>
                  9
                </Grid>
                <Grid item xs>
                  10
                </Grid>
              </Grid>
              <Grid item xs={12} container>
                <Grid item xs>
                  11
                </Grid>
                <Grid item xs>
                  12
                </Grid>
                <Grid item xs>
                  13
                </Grid>
                <Grid item xs>
                  14
                </Grid>
                <Grid item xs>
                  15
                </Grid>
              </Grid>
              <Grid item xs={12} container>
                <Grid item xs>
                  16
                </Grid>
                <Grid item xs>
                  17
                </Grid>
                <Grid item xs>
                  18
                </Grid>
                <Grid item xs>
                  19
                </Grid>
                <Grid item xs>
                  20
                </Grid>
              </Grid>
              <Grid item xs={12} container>
                <Grid item xs>
                  21
                </Grid>
                <Grid item xs>
                  22
                </Grid>
                <Grid item xs>
                  23
                </Grid>
                <Grid item xs>
                  24
                </Grid>
                <Grid item xs>
                  25
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={4} container>
              <Grid item xs={6}>
                <Typography variant="body1" gutterBottom>
                  MOBILE APP
                </Typography>
                <Box>
                  <AppleIcon />
                  <AndroidIcon />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" gutterBottom>
                  SOCIAL
                </Typography>
                <Box>
                  <FacebookIcon />
                  <InstagramIcon />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Hidden xsDown>
            <Divider />
            <Grid container spacing={1} className={classes.footer__bottom}>
              <Grid item xs={1}>
                Logo
              </Grid>
              <Grid item xs={9}>
                <Typography variant="body2">
                  <Box
                    mb="3px"
                    fontWeight={600}
                    fontSize="body1.fontSize"
                    letterSpacing="1px"
                  >
                    TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
                  </Box>
                  <Box mb="3px">
                    Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp.
                    Hồ Chí Minh, Việt Nam.
                  </Box>
                  <Box mb="2px" lineHeight="23px">
                    Giấy chứng nhận đăng ký kinh doanh số: 0101659783, đăng ký
                    thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
                    hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
                  </Box>
                  <Box mb="3px">Số Điện Thoại (Hotline): 1900 545 436</Box>
                  <Box mb="3px">Email: support@tix.vn</Box>
                </Typography>
              </Grid>
              <Grid item xs={2}>
                Logo 2
              </Grid>
            </Grid>
          </Hidden>
        </Container>
      </footer>
    );
  }
}
export default withStyles(styles)(Footer);
