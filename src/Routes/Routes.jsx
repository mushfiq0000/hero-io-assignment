import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";
import InstallationPage from "../pages/Installation/InstallationPage";
import AppsPage from "../pages/Apps/AppsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage/>,
    children:[
        {
            index: true,
            Component: Home,
            // loader:() => fetch('/all_app.json'),
            hydrateFallbackElement: <p>loading...</p>,
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
