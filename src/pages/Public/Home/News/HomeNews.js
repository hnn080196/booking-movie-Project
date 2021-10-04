import {
  makeStyles,
  Container,
  useTheme,
  Grid,
  Tabs,
  Tab,
  Box,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { MainPromo } from "pages/Public/Component/MainPromo";
import { SecondPromo } from "pages/Public/Component/SecondPromo";
import SubPromo from "pages/Public/Component/SubPromo";
import React, { useState } from "react";
import styles from "./styles";
// styles
const useStyles = makeStyles(styles);
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
const promotionContent = [
  {
    title:
      "Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất",
    description:
      "Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ",
    like: 2,
    comment: 4,
  },
  {
    title:
      "[MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] - GỌI TÊN NHỮNG PHIM ĐIỆN ẢNH NỔI TIẾNG ĐƯỢC CHUYỂN THỂ TỪ CÁC TỰA",
    description:
      "Bên cạnh những kịch bản gốc mới mẻ và đầy bất ngờ, Hollywood cũng không thiếu những tác phẩm đình đám được chuyển thể từ tiểu thuyết, phim hoạt hình, hay thậm chí là cả trò chơi điện tử.",
    like: 4,
    comment: 2,
  },
  {
    title:
      "PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và màn trả thù",
    description:
      "Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng mục nữ chính xuất sắc nhất cho vai diễn 'đẫm máu' nhất sự nghiệp của cô trong phim",
    like: 3,
    comment: 6,
  },
  {
    title: "VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY DIỆT QUỶ”",
    description:
      "Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và Choi Woo Sik, tác phẩm kinh dị – hành",
    like: 1,
    comment: 5,
  },
];
const secondPromotionContent = [
  { title: "Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn" },
  { title: "“Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành" },
  { title: "Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công" },
  { title: "NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT" },
];
const HomeNews = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <section className={classes.news} id="news">
      <Container maxWidth="lg">
        <Grid container style={{ marginBottom: "20px" }}>
          <Grid item xs={12}>
            <Typography noWrap align="center">
              <Box fontSize="3rem" fontWeight={700}>
                Tin Tức
              </Box>
              <Box fontSize={18} fontWeight={300}>
                Nhiều ưu đãi hấp dẫn mỗi ngày .
              </Box>
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              aria-label="full width tabs example"
              classes={{ root: classes.root }}
            >
              <Tab
                label="Điện Ảnh 24h"
                {...a11yProps(0)}
                className={classes.tab}
              />
              <Tab label="Review" {...a11yProps(1)} className={classes.tab} />
              <Tab
                label="Khuyến Mãi"
                {...a11yProps(2)}
                className={classes.tab}
              />
            </Tabs>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <MainPromo content={promotionContent[0]} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <MainPromo content={promotionContent[1]} />
          </Grid>
        </Grid>
        <Box height={20} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <SubPromo content={promotionContent[2]} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <SubPromo content={promotionContent[3]} />
          </Grid>
          <Grid item xs={12} md={4} container>
            <Grid item xs={6} md={12}>
              <SecondPromo content={secondPromotionContent[0]} />
            </Grid>
            <Grid item xs={6} md={12}>
              <SecondPromo content={secondPromotionContent[1]} />
            </Grid>
            <Grid item xs={6} md={12}>
              <SecondPromo content={secondPromotionContent[2]} />
            </Grid>
            <Grid item xs={6} md={12}>
              <SecondPromo content={secondPromotionContent[3]} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default HomeNews;
