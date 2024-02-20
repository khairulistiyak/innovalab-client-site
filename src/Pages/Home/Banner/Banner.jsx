import React from "react";

const Banner = () => {
  return (
    <div className="w-full bg-red-600 my-10">
      <div className="hero  bg-amber-50">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://shorturl.at/npUV8" className="md:w-1/2 rounded-lg shadow-2xl" />
          <div className="md:p-10">
            <h1 className="text-3xl font-bold uppercase">Working wonders with technology!</h1>
            <p className="py-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus illo blanditiis sint dicta voluptatem pariatur itaque quidem, amet
              error aliquid, voluptate enim ex rerum. Dolor eligendi iure aut minus non?
            </p>
            <button className="btn btn-warning ">Get an Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
