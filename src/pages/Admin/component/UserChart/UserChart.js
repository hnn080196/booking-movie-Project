import { Box, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

const UserChart = (props) => {
  const { userList } = props;

  const [data, setData] = useState([
    {
      loaiNguoiDung: "Khách Hàng",
      count: 0,
    },
    {
      loaiNguoiDung: "Quản Trị",
      count: 0,
    },
  ]);
  useEffect(() => {
    filterData(userList);
  }, []);
  const filterData = (userList) => {
    let dataUpdate = [...data];
    userList?.map((user, index) => {
      if (user.maLoaiNguoiDung === "KhachHang") {
        dataUpdate[0].count++;
      } else {
        dataUpdate[1].count++;
      }
    });
    setData(dataUpdate);
  };

  const getDirectX = (data) => {
    let dataX = [];
    data.map((item) => {
      dataX.push(item.count);
    });
    return dataX;
  };
  const getDirectY = (data) => {
    let dataY = [];
    data.map((item) => {
      dataY.push(item.loaiNguoiDung);
    });
    return dataY;
  };

  const dataChart = {
    labels: getDirectY(data),
    datasets: [
      {
        data: getDirectX(data),
        backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Box>
      <Pie data={dataChart} />
    </Box>
  );
};

export default UserChart;
