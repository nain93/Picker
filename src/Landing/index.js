import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/swiper.scss";
import "./Swiper.css";
import { Link } from "react-router-dom";
import children from "../img/initialData/children.jpg";
import pick1 from "../img/initialData/pick1.jpg";
import smart from "../img/initialData/smart.jpg";

const Container = styled.section`
  font-size: 1.5rem;
  background-color: #ffc000;
  height: 100%;
  padding: 20px;
  @media screen and (min-width: 0px) {
    position: fixed;
    font-size: 1rem;
    a {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 321px) {
    position: fixed;
    font-size: 1.5rem;
    a {
      font-size: 1.2rem;
    }
  }
  @media screen and (min-width: 768px) {
    position: static;
    font-size: 1.5rem;
    a {
      font-size: 1.5rem;
    }
  }
`;

const SwiperStyle = styled(Swiper)`
  color: "black";
  height: 50vh;
  width: 80%;
  margin-top: 10%;
  border-radius: 35px;
`;

const WalletBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6%;
  @media screen and (min-height: 1000px) {
    margin-top: 30% !important;
  }
  @media screen and (max-width: 768px) {
    margin-top: 8%;
  }

  @media screen and (max-width: 420px) {
    margin-top: 10%;
  }

  @media screen and (max-width: 320px) {
    margin-top: 15%;
  }
  width: 100%;
  a {
    border-radius: 50px;
    border: 1px solid white;
    width: 80%;
    height: 10vh;
    margin-top: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a:first-child {
    background-color: #ffc000;
    color: white;
  }
  a:last-child {
    background-color: white;
    color: #ffc000;
  }
`;

SwiperCore.use([Navigation, Pagination, Autoplay]);

function Landing() {
  return (
    <Container>
      <SwiperStyle
        spaceBetween={20}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide
          style={{
            backgroundImage: `url(${smart})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundColor: "white",
            color: "black",
            borderRadius: "35px",
            cursor: "pointer",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${children})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundColor: "white",
            color: "black",
            borderRadius: "35px",
            cursor: "pointer",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${pick1})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundColor: "white",
            color: "black",
            borderRadius: "35px",
            cursor: "pointer",
          }}
        ></SwiperSlide>
      </SwiperStyle>
      <WalletBtnBox>
        <Link to="/now">????????? ?????? ????????????</Link>
        <Link to="/nickname">?????? ?????? ?????? ??????</Link>
      </WalletBtnBox>
    </Container>
  );
}

export default Landing;
