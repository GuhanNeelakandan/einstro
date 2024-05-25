import React from "react";
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
import "./country.css";
import UK from '../../Images/country/uk.png'
import USA from '../../Images/country/usa.png'
import AUS from '../../Images/country/australia.png'
import CAN from '../../Images/country/canada.png'
import NZ from '../../Images/country/newzealand.png'
import IR from '../../Images/country/ireland.png'

function Country() {
  const countryList = [
    {
      name:"UK",
      image:UK
    },
    {
      name:"USA",
      image:USA
    },
    {
      name:"Australia",
      image:AUS
    },
    {
      name:"Canada",
      image:CAN
    },
    {
      name:"New Zealand",
      image:NZ
    },
    {
      name:"Ireland",
      image:IR
    }
  ]
  return (
    <div className="container p-0 my-5">
      <div className="country-main">
        <h1>The Best Countries to Study Abroad</h1>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={40}
          slidesPerView={3}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          pagination={{ clickable: true }}
          watchSlidesProgress
        >
          <div className="country-card">
            {
              countryList.map((list)=>{
                return  <SwiperSlide>
                <div className="country-slide">
                <img src={list.image} alt="" className="country-image" />
                <p className="country-content">
                  <h2>Study in {list.name}</h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </p>
                </div>
              </SwiperSlide>
              })
            }
           
            
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Country;
