import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

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
