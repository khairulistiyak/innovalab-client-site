import React from "react";

const ServiceBanner = () => {
  return (
    <div>
      <div className="w-full bg-red-600 my-10">
        <div className="hero  bg-amber-50">
          <div className="hero-content flex-col lg:flex-row-reverse max-w-full">
            <div className="md:p-10 lg:w-1/2">
              <h1 className="text-3xl font-bold uppercase">Let us handle your screen Professionally.</h1>
              <p className="py-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus illo blanditiis sint dicta voluptatem pariatur itaque quidem, amet
                error aliquid, voluptate enim ex rerum. Dolor eligendi iure aut minus non?
              </p>
              <div className="flex ">
                <div className="w-1/2 ">
                  <p className="text-3xl font-bold text-warning ">500+</p>
                  <p className="">Happy Customer</p>
                </div>
                <div className="w-1/2 ">
                  <p className="text-3xl font-bold text-warning "> 16+</p>
                  <p className="">Total Service</p>
                </div>
              </div>
            </div>
            <img
              src="https://videotron.com/sites/default/files/styles/original/public/image/Image%20Contactez-nous.webp?itok=4IBRHgdk"
              className="md:w-1/2 rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
