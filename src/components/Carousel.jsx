import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = ({ slides = [], interval = 3000 }) => {
  return (
    <div className="container-base flex justify-center">
      <div className="relative w-[95%] mt-96 sm:mt-2">
        {/* LEFT BUTTON — rasm tashqarisida */}
        <button className="custom-prev absolute -left-12 top-1/2 -translate-y-1/2 bg-gray-200 p-3 rounded-full shadow">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M15 5l-7 7 7 7" stroke="black" strokeWidth="2" />
          </svg>
        </button>

        {/* RIGHT BUTTON — rasm tashqarisida */}
        <button className="custom-next absolute -right-12 top-1/2 -translate-y-1/2 bg-gray-200 p-3 rounded-full shadow">
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

        {/* DOTS — pastda */}
        <div className="custom-pagination flex justify-center mt-4 gap-2"></div>
      </div>
    </div>
  );
};

export default Carousel;
