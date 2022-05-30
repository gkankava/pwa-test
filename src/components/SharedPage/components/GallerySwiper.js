import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { getOriginal, getVideo } from "utils/imgUri";

function GallerySwiper({ data: { data } }) {
  return (
    <div className="shared-page-gallery-swiper">
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((i, k) => (
          <SwiperSlide key={k}>
            {i.image ? (
              <img src={getOriginal(i.image)} alt="gallery-slide" />
            ) : (
              <video
                autoPlay
                muted={true}
                controls={false}
                playsInline={true}
                loop
              >
                <source src={getVideo(i.video)} />
              </video>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default GallerySwiper;
