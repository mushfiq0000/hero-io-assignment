import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/ErrorPage";
import ErrorPage from "../pages/Error/ErrorPage";
import AppsPage from "../pages/Apps/AppsPage";
import InstallationPage from "../pages/Installation/InstallationPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage/>,
    children:[
        {
            index: true,
            Component: Home,
        },
        {
          path: "/apps",
          Component: AppsPage,
        },
        {
          path: "/installation",
          Component: InstallationPage,
        }
    ]
  },
]);
