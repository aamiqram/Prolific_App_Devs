import React from "react";
import { Link } from "react-router-dom";
import appsData from "../Data/appsData.json";
import AppCard from "../Components/AppCard";
import heroPhoneImage from "../assets/Images/hero.png";
import GPSlogoImage from "../assets/Images/Google_Play_2022_icon.svg.png";

const Home = () => {
  const topApps = appsData.slice(0, 8);

  return (
    <div className="bg-base-200 mt-10">
      {/* Banner Section */}
      <div className="hero min-h-[50vh] bg-base-100">
        <div className="hero-content text-center flex-col">
          <h1 className="text-5xl font-extrabold">
            We Build <br />
            <span className="text-purple-500">Productive</span> Apps
          </h1>
          <p className="py-6 max-w-2xl">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
          <div className="flex gap-4">
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-neutral"
            >
              <img className="h-6 w-6" src={GPSlogoImage} alt="" />
              Google Play
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-neutral"
            >
              <svg
                aria-label="Apple logo"
                width="30"
                height="30"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1195 1195"
              >
                <path
                  fill="white"
                  d="M1006.933 812.8c-32 153.6-115.2 211.2-147.2 249.6-32 25.6-121.6 25.6-153.6 6.4-38.4-25.6-134.4-25.6-166.4 0-44.8 32-115.2 19.2-128 12.8-256-179.2-352-716.8 12.8-774.4 64-12.8 134.4 32 134.4 32 51.2 25.6 70.4 12.8 115.2-6.4 96-44.8 243.2-44.8 313.6 76.8-147.2 96-153.6 294.4 19.2 403.2zM802.133 64c12.8 70.4-64 224-204.8 230.4-12.8-38.4 32-217.6 204.8-230.4z"
                ></path>
              </svg>
              App Store
            </a>
          </div>
          <img
            src={heroPhoneImage}
            alt="Phone Mockup"
            className="mx-auto w-full max-w-sm md:max-w-md z-10 -mb-4"
          />
        </div>
      </div>

      {/* Hero Image and Stats Section */}
      <div className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2]">
        <div className="text-primary-content pt-24 pb-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-extrabold mb-10">
              Trusted By Millions, Built For You
            </h2>
            <div className="stats xl:stats-horizontal md:stats-horizontal lg:stats-horizontal stats-vertical shadow-lg">
              <div className="stat">
                <div className="stat-title text-primary-content opacity-80">
                  Total Downloads
                </div>
                <div className="stat-value text-5xl">29.6M</div>

                <div className="stat-desc text-primary-content opacity-60">
                  21% More Than Last Month
                </div>
              </div>
              <div className="stat">
                <div className="stat-title text-primary-content opacity-80">
                  Total Reviews
                </div>
                <div className="stat-value text-5xl">906K</div>
                <div className="stat-desc text-primary-content opacity-60">
                  45% More Than Last Month
                </div>
              </div>
              <div className="stat">
                <div className="stat-title text-primary-content opacity-80">
                  Active Apps
                </div>
                <div className="stat-value text-5xl">132+</div>
                <div className="stat-desc text-primary-content opacity-60">
                  3% More Last Launch
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Apps Section */}
      <div className="container mx-auto px-6 py-16 relative z-20">
        <div className="card p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Trending Apps</h2>
            <p className="text-base-content/70 mt-2">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/apps"
              className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white"
            >
              Show All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
