import { FaAppStore } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { MdInstallDesktop } from "react-icons/md";
import { Link, NavLink } from "react-router";
import logoImg from "../../assets/logo.png";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        className={({ isActive }) =>
          `mr-2 p-2 transition-all  duration-10 ${
            isActive
              ? "text-black border-b-2 border-[#9f62f2]"
              : "hover:bg-white text-black"
          }`
        }
        to="/"
      >
        {" "}
        <div className="flex items-center gap-1">
          {" "}
          <IoHomeOutline />
          Home{" "}
        </div>{" "}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `mr-2 p-2  transition-all  duration-10 ${
            isActive
              ? "text-black border-b-2 border-[#9f62f2]"
              : "hover:bg-white text-black"
          }`
        }
        to="apps"
      >
        {" "}
        <div className="flex items-center gap-1">
          <FaAppStore /> Apps{" "}
        </div>{" "}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `mr-2 p-2  transition-all  duration-10 ${
            isActive
              ? "text-black border-b-2 border-[#9f62f2]"
              : "hover:bg-white text-black"
          }`
        }
        to="/installation"
      >
        {" "}
        <div className="flex items-center gap-1">
          <MdInstallDesktop /> Installation{" "}
        </div>{" "}
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            {links}
          </ul>
        </div>
        <Link to="/">
          <p className="badge border-0 text-xl font-bold">
            <img src={logoImg} alt="" className="w-10" />
            <span className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent">
              HERO.IO
            </span>
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[20px]">{links}</ul>
      </div>
      <div className="navbar-end">
        <a
          target="_blank"
          href="https://github.com/mushfiq0000"
          className="z-1 btn text-white text-md bg-gradient-to-r from-[#632ee3] to-[#9f62f2] rounded-md border-0"
        >
          <FaGithub /> Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
