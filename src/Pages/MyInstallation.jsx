import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import errorAppNotFound from "../assets/Images/App-Error.png";

const MyInstallation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("high-low");

  useEffect(() => {
    setInstalledApps(JSON.parse(localStorage.getItem("installedApps") || "[]"));
  }, []);

  const handleUninstall = (appId, appTitle) => {
    const updatedApps = installedApps.filter((app) => app.id !== appId);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    toast.error(`'${appTitle}' uninstalled.`);
  };

  const sortedApps = [...installedApps].sort((a, b) => {
    return sortOrder === "high-low"
      ? b.downloads - a.downloads
      : a.downloads - b.downloads;
  });

  return (
    <div className="bg-base-200 min-h-screen py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-2">Your Installed Apps</h1>
          <p className="text-lg">
            Manage all apps you have installed on your device
          </p>
        </div>

        <div className="navbar bg-base-100 rounded-box shadow-md mb-8">
          <div className="flex-1">
            <span className="font-semibold text-lg ml-4">
              {sortedApps.length} Apps Found
            </span>
          </div>
          <div className="flex-none">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="select select-bordered"
            >
              <option value="high-low">Sort by Downloads: High-Low</option>
              <option value="low-high">Sort by Downloads: Low-High</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {sortedApps.length > 0 ? (
            sortedApps.map((app) => (
              <div
                key={app.id}
                className="card card-side bg-base-100 shadow-md"
              >
                <figure className="w-32 flex-shrink-0 p-4">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </figure>

                <div className="card-body">
                  <h2 className="card-title">{app.title}</h2>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-base-content/70">
                    <span>
                      {(app.downloads / 1000000).toFixed(1)}M Downloads
                    </span>
                    <span>⭐ {app.ratingAvg}</span>
                    <span>{app.size} MB</span>
                  </div>
                  <div className="card-actions justify-end">
                    <button
                      onClick={() => handleUninstall(app.id, app.title)}
                      className="btn btn-success text-white"
                    >
                      Uninstall
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center p-10 bg-base-100 rounded-box shadow-md">
              <img
                src={errorAppNotFound}
                alt="App Not Found"
                className="mx-auto w-64 mb-4"
              />
              <p className="text-gray-800 text-xl font-bold">
                No apps installed yet. <br />
                <Link
                  to="/apps"
                  className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white mt-2"
                >
                  Go Back to Apps Page
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyInstallation;
