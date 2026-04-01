import React from "react";
import { bannerData } from "../data/bannerData";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

const Banner = (props) => {
  return (
    <section id="banner_type" className="section">
      <h1 className="blind">{props.title}</h1>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="sub_banner"
      >
        {bannerData.map((banner) => (
          <SwiperSlide>
            <div className={`banner_inner ${banner.className}`}>
              <div className="swiper sub_banner">
                <div className="swiper-wrapper">
                  <div className={`swiper-slide ${banner.imgtxtbox}`}>
                    <img src={banner.img} alt="배너이미지" />
                    <div className={`slide_txt_up ${banner.txt}`}>
                      <h3 className="banner_title up">
                        {banner.subtitle}
                        <em>{banner.title}</em>
                      </h3>
                      <p className="desc up">
                        {banner.desc1}
                        <a className="up" href="#" title="이디야 사이트">
                          {banner.desc2}
                        </a>
                      </p>
                      <span className="small up">{banner.smalltitle}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
