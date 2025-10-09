import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAppData from "../../Hooks/useAppData";
import dowonloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";

const AppDetails = () => {
  const { id } = useParams();
  const { appData, loading, error } = useAppData();
  const app = appData.find((a) => a.id === Number(id));
  
  
  
  
  
  
  const [isInstall, setIsInstall] = useState(false);

useEffect(() => {
    const installAppList = JSON.parse(localStorage.getItem("Install")) || [];
    const isDuplicate = installAppList.some((i) => i.id === Number(id));
    setIsInstall(isDuplicate);
  }, [id]);

  const handelAppData = () => {
    const installAppList = JSON.parse(localStorage.getItem("Install")) || [];
    const isDuplicate = installAppList.some((a) => a.id === Number(id));

    if (!isDuplicate) {
      const updatedList = [...installAppList, appData];
      
      localStorage.setItem("Install", JSON.stringify(updatedList));
      
      setIsInstall(true);
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>404 error</p>;

  const { title, image, ratingAvg, downloads, description, size} = app;

  return (
   
      <div className="py-4">
        <div className="card shadow-sm bg-gray-100">
          <figure className="w-full h-80 p-13 justify-centr  overflow-hidden">
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body ">
            <h2 className="text-2xl text-center font-semibold">{title}</h2>

            <div className="flex justify-between py-2">
              <div className="btn border-0 bg-gray-100 badge-outline text-green-600">
                <img className="w-4" src={dowonloadImg} alt="" />
                {downloads}
              </div>
              <div className="btn border-0 bg-orange-100 badge-outline justify-end text-orange-600 ">
                <img className="w-4" src={ratingImg} alt="" />
                {ratingAvg}
              </div>
            </div>
            <button disabled={isInstall} onClick={handelAppData} className="btn">
              {isInstall === true ? "Installed" : `Install Now (${size})`}
              </button>
          </div>

          <div className="p-5">
            <h1 className="font-bold">Description</h1>
            <p className="text-gray-400 py-3">{description} </p>
          </div>
        </div>
      </div>
    
  );
};

export default AppDetails;
