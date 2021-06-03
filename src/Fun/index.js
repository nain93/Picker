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
  border: 1px solid black;
  position: relative;
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

const ImgBox = styled.img`
  height: 80%;
  border-radius: 15px;
  object-fit: cover;
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
  span:last-child {
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
  button {
    display: flex;
    align-items: center;
    margin: 2% 0px;
    margin-right: 4%;
    padding: 0;
    border: none;
    background-color: inherit;
    cursor: pointer;
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
  @media screen and (max-width: 768px) {
  }
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
              <OtherContentLink to="/">
                <OtherDesc>
                  <span>나의 연애 MBTI는..?</span>
                  <div>
                    <FaHeart />
                    <span>1,456</span>
                    <BiShare />
                    <span>150</span>
                  </div>
                </OtherDesc>
              </OtherContentLink>

              <OtherContentLink to="/">
                <OtherDesc>
                  <span>이번엔 어떤 정책을?!</span>
                  <div>
                    <FaHeart />
                    <span>1,456</span>
                    <BiShare />
                    <span>150</span>
                  </div>
                </OtherDesc>
              </OtherContentLink>
              <OtherContentLink to="/">
                <OtherDesc>
                  <span>나의 연애 MBTI는..?</span>
                  <div>
                    <FaHeart />
                    <span>1,456</span>
                    <BiShare />
                    <span>150</span>
                  </div>
                </OtherDesc>
              </OtherContentLink>

              <OtherContentLink to="/">
                <OtherDesc>
                  <span>이번엔 어떤 정책을?!</span>
                  <div>
                    <FaHeart />
                    <span>1,456</span>
                    <BiShare />
                    <span>150</span>
                  </div>
                </OtherDesc>
              </OtherContentLink>
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
            <DetailItem>
              <div>
                <ImgBox src={resultImg} alt="result" />
                <DescBox>
                  <Desc>
                    <span>동화 여우와 두루미의 결말</span>
                    <div>
                      <span>멋쟁이신사</span>
                      <span>2021.05.22</span>
                    </div>
                  </Desc>

                  <DescBtn>
                    <button>
                      <FaHeart />
                      <span>188</span>
                    </button>
                    <button>
                      <BiShare />
                      <span>1,888</span>
                    </button>
                  </DescBtn>
                </DescBox>
              </div>
            </DetailItem>
            <DetailItem>
              <div>
                <ImgBox src={resultImg} alt="result" />
                <DescBox>
                  <Desc>
                    <span>김대희의 밥묵자 역사상 최대 위기</span>
                    <div>
                      <span>웃고살자</span>
                      <span>2021.05.22</span>
                    </div>
                  </Desc>

                  <DescBtn>
                    <button>
                      <FaHeart />
                      <span>188</span>
                    </button>
                    <button>
                      <BiShare />
                      <span>1,888</span>
                    </button>
                  </DescBtn>
                </DescBox>
              </div>
            </DetailItem>

            <DetailItem>
              <div>
                <ImgBox src={resultImg} alt="result" />
                <DescBox>
                  <Desc>
                    <span>인간극장 레전드.. 두더지 포획</span>
                    <div>
                      <span>룰루랄라</span>
                      <span>2021.05.22</span>
                    </div>
                  </Desc>

                  <DescBtn>
                    <button>
                      <FaHeart />
                      <span>188</span>
                    </button>
                    <button>
                      <BiShare />
                      <span>1,888</span>
                    </button>
                  </DescBtn>
                </DescBox>
              </div>
            </DetailItem>
            <DetailItem>
              <div>
                <ImgBox src={resultImg} alt="result" />
                <DescBox>
                  <Desc>
                    <span>라면 매니아들이 인정하는 의외</span>
                    <div>
                      <span>멋쟁이신사</span>
                      <span>2021.05.22</span>
                    </div>
                  </Desc>

                  <DescBtn>
                    <button>
                      <FaHeart />
                      <span>1,888</span>
                    </button>
                    <button>
                      <BiShare />
                      <span>188</span>
                    </button>
                  </DescBtn>
                </DescBox>
              </div>
            </DetailItem>
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
