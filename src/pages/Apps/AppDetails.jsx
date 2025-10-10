import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import riviewImg from "../../assets/icon-review.png";
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const AppDetails = () => {
  const location = useLocation()
  const app = location.state
  

  const [isInstall, setIsInstall] = useState(false);
  const {
    title,
    image,
    ratingAvg,
    downloads,
    description,
    size,
    companyName,
    reviews,
    id,
    ratings
    
  } = app;

  useEffect(() => {
    const existingList = JSON.parse(localStorage.getItem("Install")) || [];
    const alreadyInstall = existingList.some((a) => a.id === id);
    if (alreadyInstall) {
      setIsInstall(true);
    }
  }, [id]);


  

  const handelAppData = () => {
    const existingList = JSON.parse(localStorage.getItem("Install")) || [];
    const alreadyInstall = existingList.some((a) => a.id === id);
    if (alreadyInstall) return;

    

    const newList = [...existingList, app];
    localStorage.setItem("Install", JSON.stringify(newList));
    setIsInstall(true)
  };

  return (
    <div className="p-10 md:p-16">
      <div className="md:flex gap-25">
        <img src={image} className="w-100 rounded-2xl mb-5" />
        <div className="md:w-250 pb-5">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-xl">{companyName}</p>

          <div className="divider md:mb-25"></div>

          <div className="flex flex-wrap gap-10 item-center pb-8">
            <div className="md:text-center">
              <img className="md:ml-6" src={downloadImg} alt="" />
              <p>Download</p>
              <h1 className="text-4xl font-bold">{downloads}</h1>
            </div>
            <div className="md:text-center">
              <img className="md:ml-4" src={ratingImg} alt="" />
              <p>RatingAvg</p>
              <h1 className="text-4xl font-bold">{ratingAvg}</h1>
            </div>
            <div className="md:text-center">
              <img className="md:ml-6" src={riviewImg} alt="" />
              <p>Reviews</p>
              <h1 className="text-4xl font-bold">{reviews}</h1>
            </div>
          </div>
          <button
            disabled={isInstall}
            onClick={handelAppData}
            className={`px-6 py-2 rounded-lg text-white ${isInstall ? "bg-green-700" : "bg-[#00d390]"}`}
          >
            {isInstall === true ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>

      <div className="divider"></div>

      <div>
        <div className="w-full h-100 pb-5">
          <h2 className="text-xl font-semibold mb-2">Ratings</h2>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={[...ratings].reverse()}
              layout="vertical"
              margin={{ top: 5, right: 100, left: 30, bottom: 5 }}
            >
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#ff8811" barSize={30} name={title} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="divider"></div>
      <div className="py-5">
        <h1 className="text-xl font-bold">Description</h1>
        <p className="pt-2">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
