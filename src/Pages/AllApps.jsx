import React, { useState } from "react";
import appsData from "../Data/appsData.json";
import AppCard from "../Components/AppCard";
import errorAppNotFound from "../assets/Images/App-Error.png";

const AllApps = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredApps = appsData.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-base-200 min-h-screen py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-2">Our All Applications</h1>
          <p className="text-lg">
            Explore All Apps on the Market developed by us
          </p>
        </div>
        <div className="navbar bg-base-100 rounded-box shadow-md mb-8">
          <div className="flex-1">
            <span className="font-semibold text-lg ml-4">
              {filteredApps.length} Apps Found
            </span>
          </div>
          <div className="flex-none gap-2">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search Apps..."
                className="input input-bordered w-full md:w-auto"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
        {filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        ) : (
          <div className="card bg-base-100 shadow-xl mt-8">
            <div className="card-body items-center text-center">
              <img
                src={errorAppNotFound}
                alt="App Not Found"
                className="max-w-sm mx-auto mb-4 w-64"
              />
              <h2 className="card-title text-3xl">OPPS!! APP NOT FOUND</h2>
              <p>The App you are requesting is not found on our system.</p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => setSearchTerm("")}
                  className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white"
                >
                  Clear Search
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllApps;
