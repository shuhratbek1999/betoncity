import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = ({ slides = [], interval = 3000 }) => {
  return (
    <div className="container-base w-full flex justify-center relative">
      <div className="w-full mt-12 sm:mt-2 relative">
        {/* PREV / NEXT — tashqarida */}
        <button className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow z-30">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M15 5l-7 7 7 7" stroke="black" strokeWidth="2" />
          </svg>
        </button>

        <button className="custom-next absolute right-2 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow z-30">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M9 5l7 7-7 7" stroke="black" strokeWidth="2" />
          </svg>
        </button>

        {/* SWIPER */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: interval, disableOnInteraction: false }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          className="w-full"
        >
          {slides.map((item, i) => (
            <SwiperSlide key={i}>{item}</SwiperSlide>
          ))}
        </Swiper>

        {/* DOTS */}
        <div className="custom-pagination flex justify-center mt-4 gap-2"></div>
      </div>
    </div>
  );
};

export default Carousel;
