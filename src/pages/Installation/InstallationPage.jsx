import { useEffect, useState } from "react";
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import { toast } from "react-toastify";
// import { toast } from "react-toastify";

const InstallationPage = () => {
  const [Install, setInstall] = useState([]);
  const [sortInstall, setSortInstall] = useState("none");

  useEffect(() => {
    const installList = JSON.parse(localStorage.getItem("Install")) || [];
    if (installList) setInstall(installList);
  }, []);

  const sortApp = (() => {
    if (sortInstall === "downloads-asc") {
      return [...Install].sort((a, b) => a.downloads - b.downloads);
    } else if (sortInstall === "downloads-desc") {
      return [...Install].sort((a, b) => b.downloads - a.downloads);
    } else {
      return Install;
    }
  })();

  const handelUninstall = (id) => {
    const existingList = JSON.parse(localStorage.getItem("Install")) || [];
    let newList = existingList.filter((p) => p.id !== id);

    setInstall(newList);
    localStorage.setItem("Install", JSON.stringify(newList));

    const appRemove = existingList.find((p) => p.id === id);
    if (appRemove) {
      toast.error(`${appRemove.title} Uninstall `, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

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
              className="select select-border hover:bg-white shadow-sm border-purple-500"
              value={sortInstall}
              onChange={(e) => setSortInstall(e.target.value)}
            >
              <option value="none">Sort By Download </option>
              <option value="downloads-asc">Low &gt; High</option>
              <option value="downloads-desc">High &gt; Low</option>
            </select>
          </label>
        </div>
        {Install.length === 0 ? (
          <h1 className="text-center text-4xl font-bold text-gray-500 py-5">
            {" "}
            No App Installed
          </h1>
        ) : (
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
                        {p.downloads} M
                      </p>
                      <p className="badge border-0 text-orange-600">
                        <img className="w-4" src={ratingImg} alt="" />
                        {p.ratingAvg}
                      </p>
                      <p className="badge border-0">{p.size} MB</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handelUninstall(p.id)}
                  className="btn bg-[#00d390] text-white hover:bg-green-500"
                >
                  Uninstall
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InstallationPage;
