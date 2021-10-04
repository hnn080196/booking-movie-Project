import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
const ProtectedRoute = (props) => {
  const { layout: Layout, component: Component, ...restProps } = props;
  let isAuthenticated = false;
  const { userLogin } = useSelector((state) => state.users);
  if (userLogin.maLoaiNguoiDung === "QuanTri") {
    isAuthenticated = true;
  }
  const renderLayout = () => {
    if (isAuthenticated === true) {
      return (
        <Layout>
          <Component {...props} />
        </Layout>
      );
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Bạn Không có quyền truy cập",
      });
      return (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      );
    }
  };
  return <Route {...restProps}>{renderLayout}</Route>;
};

ProtectedRoute.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
};

export default ProtectedRoute;
