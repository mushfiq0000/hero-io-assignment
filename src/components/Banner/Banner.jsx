import React from "react";
import bannerImg from "../../assets/hero.png"
import goodleStorImg from '../../assets/google-play.png'
import appStorImg from '../../assets//App_Store.png'

const Banner = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="font-bold text-6xl pt-5">We Build <br /><span className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent">Productive</span> Apps</h1>
        <p className="p-2 text-gray-500">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
        <div className="flex justify-center gap-3 py-3">
            <a target="_blank" href="https://play.google.com/store/games?hl=en" className="btn shadow-md flex items-center text-lg"><img className="w-10 p-2" src={goodleStorImg} alt="" />Google Play</a>
            <a target="_blank" href="https://www.apple.com/app-store/developing-for-the-app-store/" className="btn shadow-md flex items-center text-lg"><img className="w-10 p-2" src={appStorImg} alt="" />App Store</a>
        </div>
        
        <div className=" flex justify-center">
            <img src={bannerImg} alt="" />
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-center text-white py-15">
        
        <h1 className="text-4xl font-bold pb-7">Trusted by Millions, Built for You</h1>
        <div className="md:flex justify-center gap-22">
            <div>
                <p>Total Downloads</p>
                <h1 className="text-7xl font-bold pb-2">29.6M</h1>
                <p>21% more than last month</p>
            </div>
            <div>
                <p>Total Reviews</p>
                <h1 className="text-7xl font-bold pb-2">906K</h1>
                <p>46% more than last month</p>
            </div>
            <div>
                <p>Active Apps</p>
                <h1 className="text-7xl font-bold p-2">132+</h1>
                <p>31 more will Launch</p>
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
