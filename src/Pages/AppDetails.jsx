import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import toast from "react-hot-toast";
import appsData from "../Data/appsData.json";
import iconDownloads from "../assets/Images/icon-downloads.png";
import iconRatings from "../assets/Images/icon-ratings.png";
import iconReview from "../assets/Images/icon-review.png";
import errorAppNotFound from "../assets/Images/App-Error.png";

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const app = appsData.find((app) => app.id === parseInt(id));
  const [installedApps, setInstalledApps] = useState(() =>
    JSON.parse(localStorage.getItem("installedApps") || "[]")
  );
  const isInstalled = installedApps.some(
    (installedApp) => installedApp.id === app?.id
  );

  useEffect(() => {
    localStorage.setItem("installedApps", JSON.stringify(installedApps));
  }, [installedApps]);

  const handleInstall = () => {
    if (app && !isInstalled) {
      setInstalledApps([...installedApps, app]);
      toast.success(`${app.title} installed successfully!`);
    }
  };

  if (!app) {
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <img
              src={errorAppNotFound}
              alt="App Not Found"
              className="mx-auto w-64"
            />
            <h1 className="text-3xl font-bold mt-4">OPPS!! APP NOT FOUND</h1>
            <p className="py-6">
              The App you are requesting is not on our system.
            </p>
            <button
              onClick={() => navigate("/apps")}
              className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white"
            >
              Go Back!
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-base-200 min-h-screen py-12">
      <div className="container mx-auto px-6 card bg-base-100 shadow-xl p-8">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <img
            src={app.image}
            alt={app.title}
            className="w-48 h-48 rounded-lg object-cover self-center md:self-start"
          />
          <div className="flex-grow">
            <h1 className="text-4xl font-extrabold mb-2">{app.title}</h1>
            <p className="text-lg mb-4">
              Developed by{" "}
              <span className="font-semibold">{app.companyName}</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <img src={iconDownloads} alt="Downloads" className="h-6 w-6" />
                <span className="font-bold">
                  {(app.downloads / 1000000).toFixed(0)}M
                </span>{" "}
                Downloads
              </div>
              <div className="flex items-center gap-2">
                <img src={iconRatings} alt="Ratings" className="h-6 w-6" />
                <span className="font-bold">{app.ratingAvg}</span> Ratings
              </div>
              <div className="flex items-center gap-2">
                <img src={iconReview} alt="Reviews" className="h-6 w-6" />
                <span className="font-bold">
                  {(app.reviews / 1000).toFixed(0)}K
                </span>{" "}
                Reviews
              </div>
            </div>
            <button
              onClick={handleInstall}
              disabled={isInstalled}
              className="btn btn-success text-white"
            >
              {isInstalled ? "Installed" : `Install Now (${app.size} MB)`}
            </button>
          </div>
        </div>
        <div className="divider"></div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Ratings</h2>
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={app.ratings}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#FFC107" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="divider"></div>
        <div>
          <h2 className="text-2xl font-bold mb-6">Description</h2>
          <p className="leading-relaxed">{app.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
