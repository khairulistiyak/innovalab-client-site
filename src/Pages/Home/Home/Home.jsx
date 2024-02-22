import React from "react";
import "../Banner/Banner";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";
import ServiceBanner from "../Service/ServiceBanner";
import Testimonials from "../Testimonials/Testimonials";
import ContactForm from "../ContactForm/ContactForm";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="md:px-5">
        <Service></Service>
      </div>
      <ServiceBanner></ServiceBanner>
      <div className="my-40">
        <Testimonials></Testimonials>
      </div>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
