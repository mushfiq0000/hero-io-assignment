import { useState } from "react";
import useAppData from "../../Hooks/useAppData";

import AppsCard from "../Home/AppsCard";

const AppsPage = () => {
  const { appData } = useAppData();
  const [search, setSearch] = useState("");
  const term = search.trim().toLowerCase();
  const searchApp = term
    ? appData.filter((data) => data.title.toLowerCase().includes(term))
    : appData;

  return (
    <div>
      <div className="py-8">
        <h1 className="text-center text-4xl font-bold p-2">Our All Applications</h1>
        <p className="text-center text-lg text-gray-500">Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>

      <div className="md:flex justify-between items-center px-8 pt-8 md:px-20">
        <h1 className=" text-2xl font-semibold p-2">
          ({searchApp.length}) Apps Found
        </h1>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            defaultValue={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search"
          />
        </label>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-8 md:px-20 gap-5">
        {searchApp.map((appData) => (
          <AppsCard key={appData.id} appData={appData} />
        ))}
      </div>
    </div>
  );
};

export default AppsPage;
