import React, { useState } from "react";
import styled from "styled-components";
import Nav from "../Nav";
import { BiShare } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import bannerImg from "../img/banner.png";
import SwiperCard from "../SwiperCard";
import resultImg from "../img/result/result1.png";
import { BsPencil } from "react-icons/bs";
import { initialData } from "../data/initialData";

const LongContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1.5rem;
  position: relative;

  @media screen and (max-width: 768px) {
    button {
      font-size: 1rem;
    }
    font-size: 1rem;
  }

  @media screen and (max-width: 320px) {
    button {
      font-size: 0.8rem;
    }
    font-size: 0.8rem;
  }
`;

const Container = styled.section`
  padding: 0 20px;
`;

const Title = styled.h1`
  color: #ffc000;

  margin: 10% 0px;
`;

const MainBox = styled.div``;

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
  position: relative;
  background-size: cover;
  background-position: center center;
`;

const OtherDesc = styled.div`
  width: 100%;
  height: 38.5%;
  @media screen and (max-width: 720px) {
    height: auto;
  }

  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 0 0 15px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  bottom: 0;
  padding: 10px 6%;
  @media screen and (max-width: 768px) {
    padding: 10px 2%;
  }

  span,
  svg {
    margin: 5px 0;
    margin-right: 5px;
  }
  > div {
    display: flex;
  }
`;

const BtnBox = styled.div`
  width: 100%;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MorePickBtn = styled.button`
  border: 1px solid #ffc000;
  border-radius: 15px;
  color: #ffc000;
  width: 70%;
  @media screen and (max-width: 320px) {
    width: 80%;
  }

  height: 5vh;
  background-color: white;
  cursor: pointer;
  margin: 5% 0px;
  font-weight: 600;
  font-size: 1.2rem;
`;

const Divider = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`;
//! page1 css

const BannerImgBox = styled.img`
  width: 100%;
  object-fit: cover;
`;

const ImgBox = styled(Link)`
  width: 35%;
  height: 80%;
  @media screen and (max-width: 1024px) {
    height: 68%;
  }

  @media screen and (max-width: 768px) {
    height: 65%;
  }

  @media screen and (max-width: 320px) {
    height: 60%;
  }
  border-radius: 15px;
  background-position: center center;
  background-size: cover;
`;

const DetailContentBox = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DetailItem = styled.div`
  width: 100%;
  height: 20vh;
  > div:first-child {
    display: flex;
    height: 100%;
    align-items: center;
  }
`;

const DescBox = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 3%;
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  div {
    font-size: 1rem;
  }
  span {
    margin: 3% 0px;
    margin-right: 3%;
  }
  a {
    margin: 3% 0px;
    margin-right: 3%;
  }

  div span:last-child {
    color: rgba(0, 0, 0, 0.5);
  }
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 1rem;
    div {
      font-size: 0.8rem;
    }
  }
  @media screen and (max-width: 320px) {
    font-size: 0.8rem;
    div {
      font-size: 0.6rem;
    }
  }
`;

const DescBtn = styled.div`
  display: flex;
  div {
    display: flex;
    align-items: center;
    margin: 2% 0px;
    margin-right: 4%;
    padding: 0;
  }

  svg {
    margin-right: 5%;
    font-size: 1.5rem;
  }
  span {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    span {
      font-size: 1.2rem;
    }
    svg {
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 375px) {
    font-size: 0.8rem;
    span {
      font-size: 0.8rem;
    }
  }
`;

//! page2 css

const UploadLink = styled(Link)`
  background-color: #ff6f33;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  right: 25%;

  @media screen and (max-width: 415px) {
    font-size: 1.5rem;
    width: 60px;
    height: 60px;
    right: 5%;
    box-shadow: rgba(0, 0, 0, 0.3) 1px 1px 3px;
  }
  @media screen and (max-width: 320px) {
    font-size: 1.5rem;
    width: 40px;
    height: 40px;
    top: 85%;
    right: 5%;
  }
  position: fixed;
  top: 80%;
  box-shadow: rgba(0, 0, 0, 0.3) 3px 3px 5px;
  z-index: 999;
`;

function Fun() {
  const [pickTopCount, setPickTopCount] = useState(1);

  const handleMorePickTop = () => {
    if (pickTopCount === 3) {
      setPickTopCount(1);
      return;
    }
    setPickTopCount((pickCount) => pickCount + 1);
  };

  return (
    <>
      <LongContainer>
        <Nav />
        <Container>
          <Title>지금 떠오르는 FUN!</Title>
          <MainBox>
            <OtherContentBox>
              {initialData.funItem2.result.map((item, idx) => (
                <OtherContentLink
                  to={`/fun/${item.id}`}
                  style={{ backgroundImage: `url(${item.img})` }}
                  key={idx}
                >
                  <OtherDesc>
                    <span>{item.title}</span>
                    <div>
                      <FaHeart />
                      <span>{item.likes}</span>
                      <BiShare />
                      <span>{item.share}</span>
                    </div>
                  </OtherDesc>
                </OtherContentLink>
              ))}
            </OtherContentBox>
          </MainBox>
          <BtnBox>
            <MorePickBtn onClick={handleMorePickTop}>
              <span>인기 FUN 더 보기 {pickTopCount}/3</span>
            </MorePickBtn>
          </BtnBox>
        </Container>
        <Divider>
          <BannerImgBox src={bannerImg} alt="banner" />
        </Divider>
        <Container>
          <Title>또 찾아보는 FUN & FUN!</Title>
          <SwiperCard />

          <Title style={{ marginBottom: "2%" }}>이번엔 무슨 FUN?!</Title>
          <DetailContentBox>
            {initialData.funItem3.result.map((item, idx) => (
              <DetailItem key={idx}>
                <div>
                  <ImgBox
                    to={`/fun/${item.id}`}
                    style={{ backgroundImage: `url(${item.img})` }}
                  />
                  <DescBox>
                    <Desc>
                      <Link to={`/fun/${item.id}`}>
                        <span>{item.title}</span>
                      </Link>
                      <div>
                        <span>{item.nickname}</span>
                        <span>{item.update}</span>
                      </div>
                    </Desc>
                    <DescBtn>
                      <div>
                        <FaHeart />
                        <span>{item.likes}</span>
                      </div>
                      <div>
                        <BiShare />
                        <span>{item.share}</span>
                      </div>
                    </DescBtn>
                  </DescBox>
                </div>
              </DetailItem>
            ))}
          </DetailContentBox>

          <BtnBox>
            <MorePickBtn>
              <span>더 보기</span>
            </MorePickBtn>
          </BtnBox>
        </Container>
        <UploadLink to="/upload">
          <BsPencil />
        </UploadLink>
      </LongContainer>
    </>
  );
}

export default Fun;
