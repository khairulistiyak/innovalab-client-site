import React from "react";
import { FaReact } from "react-icons/fa";

const Service = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">
        Our <span className="text-warning">Service</span>
      </h1>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <FaReact className="text-5xl"></FaReact>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">React Application</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions"></div>
        </div>
      </div>
    </div>
  );
};

export default Service;
