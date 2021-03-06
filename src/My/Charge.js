import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import bannerImg from "../img/banner.png";
import { IoIosArrowBack } from "react-icons/io";
import SwiperCard from "../SwiperCard";

const LongContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  button {
    font-size: 1.5rem;
  }
  font-size: 1.5rem;
  @media screen and (max-width: 768px) {
    button {
      font-size: 1.2rem;
    }
    font-size: 1rem;
  }
`;

const Container = styled.section`
  padding: 20px;
`;

const GobackBtn = styled.button`
  border: none;
  background-color: inherit;
  width: 100%;
  padding: 0;
  margin-bottom: 10%;
  font-weight: 600;
  color: #ffc000;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const MainBox = styled.div`
  margin: 7% 0;
`;

const OtherContentBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  flex-wrap: wrap;
  a:nth-child(3),
  a:last-child {
    margin-top: 5%;
  }
`;

const OtherContentLink = styled(Link)`
  border-radius: 15px;
  width: 48%;
  height: 30vh;
  border: 1px solid black;
  position: relative;
  background-color: #ffc000;
  border: none;
`;

const Header = styled.div`
  color: #ffc000;
`;

const ChargeBtnBox = styled.div`
  width: 100%;
  height: 6vh;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    width: 60%;
    height: 100%;
    border: 1px solid #ffc000;
    border-radius: 15px;
    background-color: white;
    cursor: pointer;
  }
`;

const Divider = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 5% auto;
`;

//! page1 css

const ImgBox = styled.img`
  width: 100%;
  object-fit: cover;
`;

const SwiperBox = styled.div`
  margin: 5% 0px;
`;

const AdBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5% 0px;
  button {
    text-align: left;
    padding: 2% 4%;
    margin-bottom: 2%;
    height: 7vh;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    background-color: #ffc000;
    color: white;
    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

//! page2 css

function Charge() {
  const history = useHistory();

  const handleGoback = () => {
    history.goBack(1);
  };
  return (
    <>
      <LongContainer>
        <Container>
          <GobackBtn onClick={handleGoback}>
            <IoIosArrowBack />
            ??????
          </GobackBtn>
          <Header>
            <span>????????? ??????</span>
          </Header>
          <MainBox>
            <OtherContentBox>
              <OtherContentLink to="/"></OtherContentLink>
              <OtherContentLink to="/"></OtherContentLink>
              <OtherContentLink to="/"></OtherContentLink>
              <OtherContentLink to="/"></OtherContentLink>
            </OtherContentBox>
          </MainBox>
          <ChargeBtnBox>
            <button>????????????</button>
          </ChargeBtnBox>
        </Container>
        <Divider>
          <ImgBox src={bannerImg} alt="banner" />
        </Divider>
        <Container>
          <Header>
            <span>FUN ??????</span>
          </Header>
          <SwiperBox>
            <SwiperCard />
          </SwiperBox>
          <Header>
            <span>????????????</span>
          </Header>
          <AdBtnBox>
            <button>????????????</button>
            <button>????????????</button>
          </AdBtnBox>
        </Container>
      </LongContainer>
    </>
  );
}

export default Charge;
