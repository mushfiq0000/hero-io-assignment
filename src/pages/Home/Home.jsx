import { Link } from "react-router";
import Banner from "../../components/Banner/Banner";
import AppsCard from "./AppsCard";
import useAppData from "../../Hooks/useAppData";
import Skeleton from "../../components/LoadingSpinner/Skeleton";

const Home = () => {
  // const appCardsData = useLoaderData();
  const { appData, loading} = useAppData();

  const featureAppCard = appData.slice(0, 8);

  return (
    <div>
      <Banner />
      <div>
        <div className="text-center">
          <h1 className="text-4xl font-bold pt-10">Trending Apps</h1>
          <p className="text-gray-500 py-5">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-8 md:px-20 gap-5">
          {featureAppCard.map((appData) => (
            <AppsCard key={appData.id} appData={appData} />
          ))}
        </div>
        {loading ? (
          <Skeleton />
        ) : (
          <div className="flex justify-center py-6 ">
            <Link to="/apps">
              <button className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white px-8">
                Show All App
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
