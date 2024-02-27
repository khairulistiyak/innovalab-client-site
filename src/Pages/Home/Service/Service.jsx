import React, { useEffect, useState } from "react";
// import { FaMicrosoft, FaPenNib, FaReact } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import useCarts from "../../../Hooks/useCarts";

const Service = () => {
  const axiosSecure = useAxiosSecure();
  const [services = [], setServices] = useState([]);
  const { refetch } = useCarts();

  const { user } = useAuth();

  useEffect(() => {
    const url = `http://localhost:5000/services/`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  const handelAddToCart = (service) => {
    axiosSecure.post("/carts", { service }).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
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
            <button onClick={() => handelAddToCart(service)} className="btn btn-warning">
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
