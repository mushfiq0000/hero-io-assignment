import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
