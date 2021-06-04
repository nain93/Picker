import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
// import "swiper/components/navigation/navigation.scss";
// import "swiper/components/pagination/pagination.scss";
import "swiper/swiper.scss";
import styled from "styled-components";
import { initialData } from "./data/initialData";

const SwiperStyle = styled(Swiper)`
  color: "black";
  height: 25vh;
  border-radius: 15px;

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
    if (window.innerWidth > 768) {
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
    handleResize();
  }, []);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [swiperSetting]);

  return (
    <SwiperStyle
      spaceBetween={20}
      slidesPerView={swiperSetting.slidesPerView}
      loop={true}
      autoplay={{ delay: 1000 }}
      // scrollbar={props.scrollbar ? { draggable: true } : ""}
      // pagination={props.pagination ? { clickable: true } : ""}
    >
      {initialData.funItem1.result.map((item, idx) => (
        <SwiperSlide
          key={idx}
          style={{
            backgroundImage: `url(${item.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            color: "black",
            borderRadius: "15px",
            cursor: "pointer",
          }}
        ></SwiperSlide>
      ))}
    </SwiperStyle>
  );
}

export default SwiperCard;
