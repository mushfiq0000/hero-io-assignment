import { createBrowserRouter } from "react-router";
import Loading from "../components/Loading/Loading";
import MainLayout from "../Layouts/MainLayout";
import AppDetails from "../pages/Apps/AppDetails";
import AppsPage from "../pages/Apps/AppsPage";
import AppsNotFound from "../pages/Error/AppsNotFound";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";
import InstallationPage from "../pages/Installation/InstallationPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
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
        
      },
      {
        path: "/app/:id",
        Component: AppDetails,
        
        errorElement: <AppsNotFound />,
      },
    ],
  },
]);
