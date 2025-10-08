import React from "react";
import dowonloadImg from '../../assets/icon-downloads.png'
import ratingImg from '../../assets/icon-ratings.png'

const AppsCard = ({ appData }) => {
    
  return (
    <div className="card bg-base-100 shadow-sm hover:scale-105 transition ease-in-out">

      <figure className="w-full h-80 p-13 justify-center bg-white overflow-hidden">
        <img
          src={appData.image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body ">
        <h2 className="text-2xl text-center font-semibold">
          {appData.title}
        </h2>
        
        <div className="flex justify-between py-2">
          <div className="btn border-0 bg-gray-100 badge-outline text-green-600"><img className="w-4" src={dowonloadImg} alt="" />{appData.downloads}</div>
          <div className="btn border-0 bg-orange-100 badge-outline justify-end text-orange-600 "><img className="w-4" src={ratingImg} alt="" />{appData.ratingAvg}</div>
        </div>
      </div>
      
    </div>
  );
};

export default AppsCard;
