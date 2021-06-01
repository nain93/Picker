import React, { useState } from "react";
import styled from "styled-components";
import Nav from "./Nav";
import { BiShare } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import bannerImg from "./img/banner.png";

const LongContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1.5rem;
  @media screen and (max-width: 768px) {
    button {
      font-size: 1rem;
    }
    font-size: 1rem;
  }
  @media screen and (max-width: 320px) {
    button {
      font-size: 0.6rem;
    }
    font-size: 0.6rem;
  }
`;

const Container = styled.section`
  padding: 0 20px;
`;

const Title = styled.h1`
  color: black;
  font-size: 1.5rem;
  @media screen and (max-width: 320px) {
    font-size: 1rem;
  }
  margin: 10% 0px;
`;

const MainBox = styled.div``;

const MainContent = styled.div`
  border: 1px solid black;
  height: 30vh;
  border-radius: 15px;
  width: 100%;
  margin: 0 auto;
  position: relative;
`;

const MainDesc = styled.div`
  width: 100%;
  height: 35%;
  @media screen and (max-width: 320px) {
    height: auto;
  }
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 0 0 15px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  padding: 10px 4%;
  bottom: 0;
  span,
  svg {
    margin: 7px 0;
    margin-right: 7px;
  }
  > div {
    display: flex;
  }
`;

const OtherContentBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  flex-wrap: wrap;
`;

const OtherContentLink = styled(Link)`
  margin-top: 5%;
  border-radius: 15px;
  width: 48%;
  height: 30vh;
  border: 1px solid black;
`;

const OtherDesc = styled.div`
  width: 48%;
  height: 35%;
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
  padding: 10px 3%;
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
  border: 1px solid #fc913a;
  border-radius: 15px;
  color: #fc913a;
  width: 70%;
  height: 5vh;
  background-color: white;
  cursor: pointer;
  margin: 5% 0px;
  font-weight: 600;
  font-size: 1.2rem;
  grid-column: 1;
  @media screen and (max-width: 320px) {
    font-size: small;
  }
`;

const Divider = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`;
//! page1 css

const ImgBox = styled.img`
  width: 100%;
  object-fit: cover;
`;

const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
`;

const MenuBtn = styled.button`
  color: white;
  font-weight: 600;
  font-size: 1.2rem;
  margin-right: 3%;
  background-color: #ffc000;
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  @media screen and (max-width: 320px) {
    margin-right: 0;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const GridContainer = styled.div`
  display: grid;
  color: black;
  grid-template-columns: repeat(2, minmax(120px, 1fr));
  grid-template-rows: repeat(4);
  gap: 15px;
  @media screen and (max-width: 320px) {
    gap: 2px;
  }
  margin-top: 40px;
  > a div:nth-child(2n-1) {
    /* position: relative; */
    border: 1px solid black;
    border-radius: 15px;
    min-height: 250px;
  }
  > a:nth-child(3) {
    grid-row: 1;
    grid-column: 2/3;
  }
  > a:nth-child(7) {
    grid-row: 3;
    grid-column: 2/3;
  }
`;

const GridLink = styled.div``;

const GridDesc = styled.div`
  div {
    display: flex;
    align-items: center;
    margin-top: 2%;
    svg {
      margin: 0px 1%;
    }
  }
`;
//! page2 css

function Home() {
  const [pickTopCount, setPickTopCount] = useState(1);
  const [pickBottomCount, setPickBottomCount] = useState(1);
  const [clickMenu, setClickMenu] = useState("All");

  const handleMorePickTop = () => {
    if (pickTopCount === 3) {
      setPickTopCount(1);
      return;
    }
    setPickTopCount((pickCount) => pickCount + 1);
  };

  const handleMorePickBottom = () => {
    if (pickBottomCount === 3) {
      setPickBottomCount(1);
      return;
    }
    setPickBottomCount((pickCount) => pickCount + 1);
  };

  const handleFilterClick = (e) => {
    const { value } = e.target;
    setClickMenu(value);
  };
  return (
    <>
      <LongContainer>
        <Nav />
        <Container>
          <Title>지금 떠오르는 PICK!</Title>
          <MainBox>
            <Link to="/">
              <MainContent>
                <MainDesc>
                  <span>내 안에 꼰대가??!</span>
                  <div>
                    <FaHeart />
                    <span>1,456</span>

                    <BiShare />
                    <span>150</span>
                  </div>
                </MainDesc>
              </MainContent>
            </Link>

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
            </OtherContentBox>
          </MainBox>
          <BtnBox>
            <MorePickBtn onClick={handleMorePickTop}>
              <span>인기 PICK 더 보기 {pickTopCount}/3</span>
            </MorePickBtn>
          </BtnBox>
        </Container>
        <Divider>
          <ImgBox src={bannerImg} alt="banner" />
        </Divider>
        <Container>
          <Title>이번에는 무슨 PICK?</Title>
          <MenuContainer>
            <MenuBtn
              onClick={handleFilterClick}
              value="All"
              style={
                clickMenu === "All"
                  ? {
                      backgroundColor: "white",
                      color: "black",
                      border: "1px solid red",
                    }
                  : {}
              }
            >
              전체
            </MenuBtn>
            <MenuBtn
              onClick={handleFilterClick}
              value="Exr"
              style={
                clickMenu === "Exr"
                  ? {
                      backgroundColor: "white",
                      color: "black",
                      border: "1px solid red",
                    }
                  : {}
              }
            >
              운동
            </MenuBtn>
            <MenuBtn
              onClick={handleFilterClick}
              value="love"
              style={
                clickMenu === "love"
                  ? {
                      backgroundColor: "white",
                      color: "black",
                      border: "1px solid red",
                    }
                  : {}
              }
            >
              연애
            </MenuBtn>
            <MenuBtn
              onClick={handleFilterClick}
              value="other"
              style={
                clickMenu === "other"
                  ? {
                      backgroundColor: "white",
                      color: "black",
                      border: "1px solid red",
                    }
                  : {}
              }
            >
              정치
            </MenuBtn>
          </MenuContainer>
          <GridContainer>
            <Link to="/ready">
              <GridLink>
                테스트 카드 : 투표 준비화면으로 이동(일반선택)
              </GridLink>
            </Link>
            <GridDesc>
              <span>코로나 뿌셔! 무슨 운동?</span>
              <div>
                <FaHeart />
                <span>1,456</span>
                <BiShare />
                <span>150</span>
              </div>
            </GridDesc>

            <Link to="/ready2">
              <GridLink>
                테스트 카드 : 투표 준비화면으로 이동(스와이프선택)
              </GridLink>
            </Link>
            <GridDesc>
              <span>도움이 된, 헬스 핫템!</span>
              <div>
                <FaHeart />
                <span>1,456</span>
                <BiShare />
                <span>150</span>
              </div>
            </GridDesc>

            <Link to="/">
              <GridLink>3</GridLink>
            </Link>
            <GridDesc>
              <span>점심시간엔 무슨 운동?</span>
              <div>
                <FaHeart />
                <span>1,456</span>
                <BiShare />
                <span>150</span>
              </div>
            </GridDesc>

            <Link to="/">
              <GridLink>4</GridLink>
            </Link>
            <GridDesc>
              <span>헬린이! 구출 대작전</span>
              <div>
                <FaHeart />
                <span>1,456</span>
                <BiShare />
                <span>150</span>
              </div>
            </GridDesc>
          </GridContainer>
          <BtnBox>
            <MorePickBtn onClick={handleMorePickBottom}>
              <span>운동 PICK 더 보기 {pickBottomCount}/3</span>
            </MorePickBtn>
          </BtnBox>
        </Container>
      </LongContainer>
    </>
  );
}

export default Home;
