import React from "react";
import Navbar from "../Components/Navbar";
import Sectionbar from "../Components/Sectionbar";
import Products from "../Components/Products";
import ConnectUs from "../Components/ConnectUs";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Sectionbar />
      <Products />
      <ConnectUs />
      <Footer />
    </>
  );
};

export default Home;
