import { lazy } from "react";
import { AdminLayout, CheckoutLayout, PublicLayout, UserLayout } from "layouts";

const Home = lazy(() => import("pages/Public/Home"));
const Detail = lazy(() => import("pages/Public/Detail"));
const Profile = lazy(() => import("pages/Public/Profile"));
const Login = lazy(() => import("pages/Public/Login/Login"));
const Register = lazy(() => import("pages/Public/Register"));
const CheckoutPage = lazy(() => import("pages/Checkout/CheckoutPage"));
//admin
const Dashboard = lazy(() => import("pages/Admin/Dashboard"));
const Films = lazy(() => import("pages/Admin/Films"));
const EditFilm = lazy(() => import("pages/Admin/Films/EditFilm"));
const AddShowtimes = lazy(() => import("pages/Admin/Films/AddShowtimes"));
const AddNewFilm = lazy(() => import("pages/Admin/Films/AddNewFilm"));
const Users = lazy(() => import("pages/Admin/Users"));
const EditUser = lazy(() => import("pages/Admin/Users/EditUser"));
const AddNewUser = lazy(() => import("pages/Admin/Users/AddNewUser"));
const Cinemas = lazy(() => import("pages/Admin/Cinemas"));
const Theater = lazy(() => import("pages/Admin/Cinemas/Theater/Theater"));

export const publicRoute = [
  {
    path: "/",
    exact: true,
    layout: PublicLayout,
    component: Home,
  },
  {
    path: "/detail/:id",
    exact: true,
    layout: PublicLayout,
    component: Detail,
  },
  {
    path: "/profile",
    exact: true,
    layout: PublicLayout,
    component: Profile,
  },
  {
    path: "/checkout/:id",
    exact: true,
    layout: CheckoutLayout,
    component: CheckoutPage,
  },
  {
    path: "/register",
    exact: true,
    layout: UserLayout,
    component: Register,
  },
  {
    path: "/login",
    exact: true,
    layout: UserLayout,
    component: Login,
  },
];
export const adminRoute = [
  {
    path: "/admin",
    exact: true,
    layout: AdminLayout,
    component: Dashboard,
  },
  {
    path: "/admin/film",
    exact: true,
    layout: AdminLayout,
    component: Films,
  },
  {
    path: "/admin/film/addnew",
    exact: true,
    layout: AdminLayout,
    component: AddNewFilm,
  },
  {
    path: "/admin/film/edit/:id",
    exact: true,
    layout: AdminLayout,
    component: EditFilm,
  },
  {
    path: "/admin/film/addShowTimes/:id",
    exact: true,
    layout: AdminLayout,
    component: AddShowtimes,
  },
  {
    path: "/admin/user",
    exact: true,
    layout: AdminLayout,
    component: Users,
  },
  {
    path: "/admin/user/add-newUser",
    exact: true,
    layout: AdminLayout,
    component: AddNewUser,
  },
  {
    path: "/admin/user/edit/:id",
    exact: true,
    layout: AdminLayout,
    component: EditUser,
  },
  {
    path: "/admin/cinema",
    exact: true,
    layout: AdminLayout,
    component: Cinemas,
  },
  {
    path: "/admin/cinema/theater/:id",
    exact: true,
    layout: AdminLayout,
    component: Theater,
  },
];
