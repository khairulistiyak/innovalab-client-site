import React from "react";
import { FaMicrosoft, FaPenNib, FaReact } from "react-icons/fa";
import ServiceBanner from "./ServiceBanner";

const Service = () => {
  return (
    <div className="my-16  grid justify-around ">
      <h1 className="text-3xl my-16 font-bold text-center">
        Our <span className="text-warning">Service</span>
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-0 gap-5  ">
        <div className="card w-80 bg-base-100 shadow-xl grid">
          <figure className="px-10 pt-10">
            <FaReact className="text-5xl"></FaReact>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Web Design</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions"></div>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <FaMicrosoft className="text-5xl"></FaMicrosoft>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title"> Web Application</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions"></div>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <FaPenNib className="text-5xl"></FaPenNib>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Graphic Design</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions"></div>
          </div>
        </div>
      </div>
      <div className=" grid justify-center my-16">
        <button className="btn btn-warning ">Explore more</button>
      </div>
    </div>
  );
};

export default Service;
