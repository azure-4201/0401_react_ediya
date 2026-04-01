import React from "react";
import { sliderData } from "../data/sliderData";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

const Slider = (props) => {
  return (
    <section id="slider">
      <h2 className="blind">{props.title}</h2>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="main_banner_hero"
      >
        {sliderData.map((slide) => (
          <SwiperSlide>
            <div className={`slider_img ${slide.className}`}>
              <div className={`slider_txt container ${slide.txtbox}`}>
                <span>{slide.subtitle}</span>
                <h3>{slide.title}</h3>
                <p>{slide.desc}</p>

                <div className={`btn ${slide.btnClass}`}>
                  <a href="#">{slide.btnDesc1}</a>
                  <a href="#" className="indigo">
                    {slide.btnDesc2}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
