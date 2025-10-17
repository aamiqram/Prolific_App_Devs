import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <div>{error.message}</div>
      <Footer />
    </>
  );
};

export default ErrorPage;
