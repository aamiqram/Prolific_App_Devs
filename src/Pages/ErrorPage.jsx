import React from "react";
import Footer from "../Components/Footer";
import { Link, useRouteError } from "react-router";
import error404Image from "../assets/Images/error-404.png";
import Header from "../Components/Header";

const ErrorPage = () => {
  return (
    <>
      <Header />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <img
              src={error404Image}
              alt="Page Not Found"
              className="mx-auto w-full"
            />
            <h1 className="text-5xl font-bold mt-4">Oops, page not found!</h1>
            <p className="py-6">
              The page you are looking for is not available.
            </p>
            <Link
              to="/"
              className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white"
            >
              Go Back!
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
