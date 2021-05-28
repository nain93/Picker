import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
// import "swiper/components/navigation/navigation.scss";
// import "swiper/components/pagination/pagination.scss";
import "swiper/swiper.scss";
import styled from "styled-components";

const SwiperStyle = styled(Swiper)`
  color: "black";
  height: 25vh;
  @media screen and (max-width: 320px) {
    width: 50%;
  }
`;

function SwiperCard() {
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  const [swiperSetting, setSwiperSetting] = useState({
    slidesPerView: 3.5,
  });

  const handleResize = () => {
    if (window.innerWidth > 720) {
      setSwiperSetting({
        slidesPerView: 3.5,
      });
      return;
    } else if (window.innerWidth > 320) {
      setSwiperSetting({
        slidesPerView: 2,
      });
      return;
    } else {
      setSwiperSetting({
        slidesPerView: 1,
      });
      return;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [swiperSetting]);

  return (
    <SwiperStyle
      spaceBetween={20}
      slidesPerView={swiperSetting.slidesPerView}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 1000 }}
    >
      <SwiperSlide
        style={{
          backgroundColor: "#FFC000",
          color: "black",
          borderRadius: "15px",
          cursor: "pointer",
        }}
      >
        Slide 1
      </SwiperSlide>
      <SwiperSlide
        style={{
          backgroundColor: "#FFC000",
          color: "black",
          borderRadius: "15px",
          cursor: "pointer",
        }}
      >
        Slide 2
      </SwiperSlide>
      <SwiperSlide
        style={{
          backgroundColor: "#FFC000",
          color: "black",
          borderRadius: "15px",
          cursor: "pointer",
        }}
      >
        Slide 3
      </SwiperSlide>
      <SwiperSlide
        style={{
          backgroundColor: "#FFC000",
          color: "black",
          borderRadius: "15px",
          cursor: "pointer",
        }}
      >
        Slide 4
      </SwiperSlide>
    </SwiperStyle>
  );
}

export default SwiperCard;
