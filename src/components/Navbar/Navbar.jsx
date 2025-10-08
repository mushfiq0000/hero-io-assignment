import React from "react";
import logoImg from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <Link to='/'> <li className="m-3 hover:underline">Home</li> </Link>
      <Link to='apps'> <li className="m-3 hover:underline">Apps</li> </Link>
      <Link to='/installation'> <li className="m-3 hover:underline">Installation</li> </Link>
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to='/'><p className="badge border-0 text-xl font-bold">
          <img src={logoImg} alt="" className="w-10" />
          <span className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent">HERO.IO</span>        
        </p></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[20px]">
          {links}
        </ul>
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
