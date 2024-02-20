import React from "react";
import Navbar from "../../Share/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../Share/Footer/Footer";
import Home from "../../Pages/Home/Home/Home";

const Main = () => {
  return (
    <div className="mx-auto container ">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
