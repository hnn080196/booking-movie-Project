import React, { lazy, Suspense } from "react";
import { Loading, PageNotFound } from "components";
import { CheckoutLayout, PublicLayout, UserLayout } from "layouts";

import { Router, Route, Switch } from "react-router-dom";
import { WithLayoutRoute, ProtectedRoute } from "./routers";
import { createBrowserHistory } from "history";
import AdminLayout from "layouts/AdminLayout/AdminLayout";
import Users from "pages/Admin/Users";
import AddNewUser from "pages/Admin/Users/AddNewUser";
import EditUser from "pages/Admin/Users/EditUser";
import Cinemas from "pages/Admin/Cinemas";
import Theater from "pages/Admin/Cinemas/Theater.js/Theater";
import Dashboard from "pages/Admin/Dashboard";
import Profile from "pages/Public/Profile";

export const history = createBrowserHistory();
// lazy load

const Home = lazy(() => import("pages/Public/Home"));
const Detail = lazy(() => import("pages/Public/Detail"));
const Booking = lazy(() => import("pages/Public/Booking"));
const Login = lazy(() => import("pages/Public/Login/Login"));
const Register = lazy(() => import("pages/Public/Register"));
const CheckoutPage = lazy(() => import("pages/Checkout/CheckoutPage"));
// admin
const Films = lazy(() => import("pages/Admin/Films"));
const EditFilm = lazy(() => import("pages/Admin/Films/EditFilm"));
const AddShowtimes = lazy(() => import("pages/Admin/Films/AddShowtimes"));
const AddNewFilm = lazy(() => import("pages/Admin/Films/AddNewFilm"));

const Routes = (props) => {
  return (
    <Suspense fallback={<Loading />}>
      <Router history={history}>
        <Switch>
          <WithLayoutRoute
            exact
            path="/register"
            layout={UserLayout}
            component={Register}
          />
          <WithLayoutRoute
            exact
            path="/login"
            layout={UserLayout}
            component={Login}
          />
          <WithLayoutRoute
            exact
            path="/"
            layout={PublicLayout}
            component={Home}
          />
          <WithLayoutRoute
            exact
            path="/detail/:id"
            layout={PublicLayout}
            component={Detail}
          />
          <WithLayoutRoute
            exact
            path="/booking"
            layout={PublicLayout}
            component={Booking}
          />
          <WithLayoutRoute
            exact
            path="/profile"
            layout={PublicLayout}
            component={Profile}
          />
          <WithLayoutRoute
            exact
            path="/checkout/:id"
            layout={CheckoutLayout}
            component={CheckoutPage}
          />
          <ProtectedRoute
            exact
            path="/admin"
            layout={AdminLayout}
            component={Dashboard}
          />
          <ProtectedRoute
            exact
            path="/admin/film"
            layout={AdminLayout}
            component={Films}
          />
          <ProtectedRoute
            exact
            path="/admin/film/addnew"
            layout={AdminLayout}
            component={AddNewFilm}
          />
          <ProtectedRoute
            exact
            path="/admin/film/edit/:id"
            layout={AdminLayout}
            component={EditFilm}
          />
          <ProtectedRoute
            exact
            path="/admin/film/addShowTimes/:id"
            layout={AdminLayout}
            component={AddShowtimes}
          />
          <ProtectedRoute
            exact
            path="/admin/user"
            layout={AdminLayout}
            component={Users}
          />
          <ProtectedRoute
            exact
            path="/admin/user/add-newUser"
            layout={AdminLayout}
            component={AddNewUser}
          />
          <ProtectedRoute
            exact
            path="/admin/user/edit/:id"
            layout={AdminLayout}
            component={EditUser}
          />
          <ProtectedRoute
            exact
            path="/admin/cinema"
            layout={AdminLayout}
            component={Cinemas}
          />
          <ProtectedRoute
            exact
            path="/admin/cinema/theater/:id"
            layout={AdminLayout}
            component={Theater}
          />

          {/* Page not found */}
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default Routes;
