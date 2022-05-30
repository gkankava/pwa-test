import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import InfoBox from "./InfoBox";

function InfoSwiper({ locations, onNavigate, setActiveLocation }) {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={0}
      className="mySwiper"
      onSlideChange={(res) => {
        setActiveLocation(res.activeIndex);
      }}
    >
      {locations.map((i, k) => (
        <SwiperSlide key={k}>
          <InfoBox data={i} onNavigate={onNavigate} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default InfoSwiper;
