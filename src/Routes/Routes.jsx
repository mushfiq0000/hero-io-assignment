import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/ErrorPage";
import ErrorPage from "../pages/Error/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage/>,
    children:[
        {
            index: true,
            Component: Home,
        }
    ]
  },
]);
