// SwiperSlider.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

import acadiaUniversity from "../../Images/university/acadia-university.png";
import arizonaUniversity from "../../Images/university/arizona-state-university.png";
import flindersUniversity from "../../Images/university/az-flinders-university.png";
import canberraUniversity from "../../Images/university/az-university-of-canberra.png";
import bowValleyUniversity from "../../Images/university/bow-valley-college.png";
import coloradoUniversity from "../../Images/university/colorado-state-university.png";
import conestogaUniversity from "../../Images/university/conestoga-college.png";
import cranefieldUniversity from "../../Images/university/cranefield-university.png";
import deakinUniversity from "../../Images/university/deakin-university.png";
import fanshaweUniversity from "../../Images/university/fanshawe-college.png";
import lakeheadUniversity from "../../Images/university/lakehead-university.png";
import manchesterUniversity from "../../Images/university/manchester-metropolitan-university.png";
import nottinghamUniversity from "../../Images/university/nottingham-trent-university.png";
import queensUniversity from "../../Images/university/queens-university.png";

import "./university.css";
import {
  A11y,
  Autoplay,
  EffectCards,
  EffectCube,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

const University = () => {
  const UniversityList = [
    {
      id: 1,
      name: "Acadia-University",
      image: acadiaUniversity,
    },
    {
      id: 2,
      name: "Arizona State University",
      image: arizonaUniversity,
    },
    {
      id: 3,
      name: "Flinders University",
      image: flindersUniversity,
    },
    {
      id: 4,
      name: "Canberra University",
      image: canberraUniversity,
    },
    {
      id: 5,
      name: "Bow Valley University",
      image: bowValleyUniversity,
    },
    {
      id: 6,
      name: "Colorado State University",
      image: coloradoUniversity,
    },
    {
      id: 4,
      name: "Conestoga University",
      image: conestogaUniversity,
    },
    {
      id: 4,
      name: "Cranefield University",
      image: cranefieldUniversity,
    },
    {
      id: 4,
      name: "Deakin University",
      image: deakinUniversity,
    },
    {
      id: 4,
      name: "Fanshawe College",
      image: fanshaweUniversity,
    },
    {
      id: 4,
      name: "Lake Head University",
      image: lakeheadUniversity,
    },
    {
      id: 4,
      name: "Manchester Metropolitan University",
      image: manchesterUniversity,
    },
    {
      id: 4,
      name: "Nottingham Trent University",
      image: nottinghamUniversity,
    },
    {
      id: 4,
      name: "Queens University",
      image: queensUniversity,
    },

  ];
  return (
    <div className="container mt-5 university-container">
      <h2 className="university-heading">Featured Universities</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={40}
        // effect="cards"
        // cubeEffect={{
        //     shadow: true,
        //     slideShadows: true,
        //     shadowOffset: 20,
        //     shadowScale: 0.94,
        //   }}
        slidesPerView={5}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        // scrollbar
        pagination={{ clickable: true }}
      >
        {UniversityList.map((list) => {
          return (
            <SwiperSlide>
              <img src={list.image} alt={list.name} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default University;
