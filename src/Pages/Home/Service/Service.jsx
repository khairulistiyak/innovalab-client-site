import React, { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useCarts from "../../../Hooks/useCarts";
import useServices from "../../../Hooks/useServices";

const Service = () => {
  const axiosSecure = useAxiosSecure();
  const [services] = useServices();
  const [serviceCard, setServiceCard] = useState([]);
  const { refetch } = useCarts();

  const handleAddToCart = (service) => {
    const { _id, category, service_title, description, image } = service;

    axiosSecure.post("/carts", { service_title, category, description, image, uni: _id }).then((res) => {
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

  const handleExploreMore = () => {
    setServiceCard(services);
  };

  return (
    <div className="my-16  grid justify-around ">
      <h1 className="text-3xl my-16 font-bold text-center">
        Our <span className="text-warning">Service</span>
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 :grid-cols-4 grid-cols-0 gap-5  ">
        {services.length > 0 &&
          (serviceCard.length > 0 ? serviceCard : services.slice(0, 4)).map((service) => (
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
              <button onClick={() => handleAddToCart(service)} className="btn btn-warning">
                Add to cart
              </button>
            </div>
          ))}
      </div>
      {services.length > 4 && serviceCard.length < services.length && (
        <div className=" grid justify-center my-16">
          <button onClick={handleExploreMore} className="btn btn-warning ">
            Explore more
          </button>
        </div>
      )}
    </div>
  );
};

export default Service;
