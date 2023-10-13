import React from "react";
import "./Updates.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/swiper-bundle.css';
//import { Pagination } from "swiper";
import profilePic1 from "../../imgs/profile1.jpg";
import profilePic2 from "../../imgs/profile2.jpg";
import profilePic3 from "../../imgs/profile3.jpg";
import profilePic4 from "../../imgs/profile4.jpg";


const Updates = () => {
  const clients = [
    {
      img: profilePic1,
      review: "Pagination",
    },
    {
      img: profilePic2,
      review: "Pagination",
    },
    {
      img: profilePic3,
      review: "Pagination",
    },
    {
      img: profilePic4,
      review: "Pagination",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        {/* Your heading content */}
      </div>
      <Swiper
        //modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Updates;
