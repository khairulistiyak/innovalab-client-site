import React, { useEffect, useState } from "react";
import { FaMicrosoft, FaPenNib, FaReact } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";

const Service = () => {
  const axiosSecure = useAxiosSecure();
  const [services, setServices] = useState([]);
  const { user } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    const url = "http://localhost:5000/services";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  const handelAddToCart = (user) => {
    console.log(user);
  };
  return (
    <div className="my-16  grid justify-around ">
      <h1 className="text-3xl my-16 font-bold text-center">
        Our <span className="text-warning">Service</span>
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-0 gap-5  ">
        {services.map((service) => (
          <div key={service._id} className="card w-80 bg-base-100 shadow-xl grid">
            <figure className="px-10 pt-10 ">
              <img className="w-20 outline-warning border-2 border-warning p-3 rounded-full" src={service.image} alt="" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{service.service_title}</h2>
              <p>
                {service.description.slice(0, 70)}... <Link className="text-warning">See more</Link>
              </p>
              <div className="card-actions"></div>
            </div>
            <button onClick={() => handelAddToCart(user)} className="btn btn-warning">
              Add to cart
            </button>
          </div>
        ))}
      </div>
      <div className=" grid justify-center my-16">
        <button className="btn btn-warning ">Explore more</button>
      </div>
    </div>
  );
};

export default Service;
