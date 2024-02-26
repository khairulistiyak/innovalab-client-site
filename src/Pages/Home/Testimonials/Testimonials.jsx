import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useMediaQuery } from "react-responsive";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
const Testimonials = () => {
  const [reviews = [], setReviews] = useState([]);

  // console.log(reviews);
  const isSmallDevice = useMediaQuery({ query: "(max-width: 767px)" });
  const isMediumDevice = useMediaQuery({ query: "(min-width: 768px) and (max-width: 1023px)" });
  const isLargeDevice = useMediaQuery({ query: "(min-width: 1024px)" });

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  let slidesPerView = 3;
  if (isSmallDevice) slidesPerView = 1;
  if (isMediumDevice) slidesPerView = 2;
  if (isLargeDevice) slidesPerView = 4;
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center">Testimonials</h1>
      <div>
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="">
                <div className="card w-96 bg-base-100 ">
                  <div className="card-body">
                    <div className="h-[10rem]">
                      <div className="flex items-center gap-5">
                        <div className="avatar">
                          <div className="w-20 rounded mb-5">
                            <img src={review.image} />
                          </div>
                        </div>
                        <div>
                          <h2 className="card-title font-semibold">{review.name}</h2>
                          <h2 className="text-sm font-bold mt-1">
                            {review.designation}
                            <span className="ms-1">{review.company}</span>
                          </h2>
                        </div>
                      </div>
                      <p className="mb-5">{review.review.slice(30)}</p>
                    </div>
                    <div className="card-actions justify-center mb-10">
                      <Rating style={{ maxWidth: 150 }} value={review.rating} readOnly />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
