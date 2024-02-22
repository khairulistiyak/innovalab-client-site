import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-yellow-50">
      <form className="w-full grid lg:justify-center px-5 py-20 ">
        <div className="lg:flex gap gap-10 ">
          <div className="mb-5">
            <input type="text" placeholder="Fast Name" className="input input-bordered w-full" required />
          </div>
          <div className="mb-5">
            <input type="Text" placeholder="Last Name" className="input input-bordered w-full " required />
          </div>
        </div>
        <div className="lg:flex gap gap-10 ">
          <div className="mb-5">
            <input type="email" placeholder="Email Address" className="input input-bordered w-full" required />
          </div>
          <div className="mb-5">
            <input type="Text" placeholder="Phone Number" className="input input-bordered w-full " required />
          </div>
        </div>

        <div className="">
          <input type="password" placeholder="password" className="input input-bordered w-full" required />
        </div>
        <div className=" mt-6 grid lg:justify-center">
          <button className="btn btn-warning">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
