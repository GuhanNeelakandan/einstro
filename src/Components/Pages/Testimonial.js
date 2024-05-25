import React from "react";
import "./testimonial.css";
import Man from "../../Images/logo/man.jpg";
import {
  A11y,
  Autoplay,
  EffectCards,
  EffectCube,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import qoute from './../../Images/logo/testimonial-quote.png'

function Testimonial() {
  const testimonialList = [
    {
      name: "John Deo",
      img: Man,
      desg: "Reporter",
    },
    {
      name: "John Deo",
      img: Man,
      desg: "Reporter",
    },
    {
      name: "John Deo",
      img: Man,
      desg: "Reporter",
    },
    {
      name: "John Deo",
      img: Man,
      desg: "Reporter",
    },
    {
      name: "John Deo",
      img: Man,
      desg: "Reporter",
    },
    {
      name: "John Deo",
      img: Man,
      desg: "Reporter",
    },
    {
      name: "John Deo",
      img: Man,
      desg: "Reporter",
    },
  ];
  return (
    <div className="container p-0 testimonial-bg">
        <div className="testimonial-bg-design">
            <div className="child-bg">
                <img src={qoute}/>
            </div>
        <div className="testimonial-head">
        
        <h1>Testimonial</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
      </div>
        </div>
      
      <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={3}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          pagination={{ clickable: true }}
          watchSlidesProgress
        >
        {testimonialList.map((list) => {
          return (
            <SwiperSlide>
            <div className="testimonial-card">
              <div className="testimonial-card-img">
                <img src={list.img} />
                <div className="testimonial-name">
                  <h3>{list.name}</h3>
                  <h3 className="desg">{list.desg}</h3>
                </div>
              </div>
              <div className="testimonial-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </p>
              </div>
            </div>
            </SwiperSlide>
          );
        })}
        
      </Swiper>
    </div>
  );
}

export default Testimonial;
