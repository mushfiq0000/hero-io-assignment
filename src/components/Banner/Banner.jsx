import React from "react";
import bannerImg from "../../assets/hero.png"

const Banner = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="font-bold text-6xl">We Build <br /><span className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent">Productive</span> Apps</h1>
        <p className="p-2 text-gray-500">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
        <div className="flex justify-center">
            <img src={bannerImg} alt="" />
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-center text-white py-15">
        
        <h1 className="text-4xl font-bold pb-7">Trusted by Millions, Built for You</h1>
        <div className="flex justify-center gap-22">
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
