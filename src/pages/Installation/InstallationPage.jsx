import { useEffect, useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";

const InstallationPage = () => {
  const [Install, setInstall] = useState([]);
  const [sortInstall, setSortInstall] = useState("none");

  useEffect(() => {
    const installList = JSON.parse(localStorage.getItem("Install")) || [];
    if (installList) setInstall(installList);
  }, []);

  const sortApp = (() => {
    if (sortInstall === "size-asc") {
      return [...Install].sort((a, b) => a.size - b.size);
    } else if (sortInstall === "size-desc") {
      return [...Install].sort((a, b) => b.size - a.size);
    } else {
      return Install;
    }
  })();

  const handelUninstall = (id) => {
    const existingList = JSON.parse(localStorage.getItem("Install")) || [];
    let newList = existingList.filter(p => p.id !== id)
     
    setInstall(newList)
    localStorage.setItem("Install", JSON.stringify(newList));
  }

  return (
    <div className="md:py-25 py-8">
      <div>
        <h1 className="text-center text-5xl font-bold p-2">
          Your Installed Apps
        </h1>
        <p className="text-center text-2xl text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="md:p-18 p-8">
        <div className="flex justify-between items-center ">
          <h1 className="font-semibold text-2xl">
            ({Install.length}) App Installed
          </h1>

          <label className="form-control ">
            <select
              className="select select-border hover:bg-white shadow-sm "
              value={sortInstall}             
              onChange={(e) => setSortInstall(e.target.value)}
              >
                console.log
              <option value="none">Sort By Size </option>
              <option value="size-asc">Low &gt; High</option>
              <option value="size-desc">High &gt; Low</option>
            </select>
          </label>
        </div>

        <div>
          {sortApp.map((p) => (
            <div className=" flex justify-between items-center  bg-white p-2 rounded-lg my-6">
              <div className="flex items-center gap-3 ">
                <img className="w-18 rounded-lg" src={p.image} alt="" />
                <div>
                  <h1 className="text-lg font-semibold pl-3">{p.title}</h1>
                  <div>
                    <p className="badge border-0 text-green-600">
                      <img className="w-4" src={downloadImg} alt="" />
                      {p.downloads}
                    </p>
                    <p className="badge border-0 text-orange-600">
                      <img className="w-4" src={ratingImg} alt="" />
                      {p.ratingAvg}
                    </p>
                    <p className="badge border-0">{p.size} MB</p>
                  </div>
                </div>
              </div>

              <button onClick={()=>handelUninstall(p.id)} className="btn bg-[#00d390] text-white hover:bg-green-500">
                Uninstall
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstallationPage;
