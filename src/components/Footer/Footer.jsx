import { FaDiscord, FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router";
import logoImg from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className=" px-5 py-10 border-2  border-purple-500 ">
      <div className="container mx-auto grid md:grid-cols-4 grid-cols-1 gap-20">
        <div className=" text-gray-600">
          <Link to="/">
            <li className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent font-bold flex items-center gap-2 mb-3">
              <img src={logoImg} alt="" className="md:w-20 w-10" /> HERO IO
            </li>
          </Link>

          <p className="text-sm leading-relaxed">
            <span className="text-[#632ee3] font-semibold">Hero.io</span> is a
            modern app-store-style platform where you can easily explore,
            install, and uninstall your favorite apps. It gives users a smooth,
            interactive experience to discover trending apps, view details, and
            manage installations — all in one place.
          </p>
        </div>
        <ul className="flex flex-col gap-2 text-gray-700 ">
        <p className="font-bold text-gray-500">COMPANY</p>
          <li className="hover:border-b-purple-500 cursor-pointer">About Us</li>
          <li className="hover:border-b-purple-500 cursor-pointer">Contace</li>
          <li className="hover:border-b-purple-500 cursor-pointer">Job</li>
          <li className="hover:border-b-purple-500 cursor-pointer">
            Press kit
          </li>
        </ul>
        <ul className="flex flex-col gap-2 text-gray-700 ">
        <p className="font-bold text-gray-500">Legal</p>
          <li className="hover:border-b-purple-500 cursor-pointer">
            Terms of use
          </li>
          <li className="hover:border-b-purple-500 cursor-pointer">
            Privacy policy
          </li>
          <li className="hover:border-b-purple-500 cursor-pointer">
            Cookie policy
          </li>
        </ul>
        <div>
        <p className="font-bold text-gray-500 pb-5">Social Media</p>
        <div className="flex item-center gap-4">
            <FaLinkedin />
            <FaDiscord />
            <IoLogoWhatsapp />
            <FaFacebook />
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
