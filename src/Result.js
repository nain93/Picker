import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { RiVipCrown2Fill } from "react-icons/ri";
import { BiShare } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import SwiperCard from "./SwiperCard";
import { initialData } from "./data/initialData";
import { IoIosArrowBack } from "react-icons/io";

const LongContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1.5rem;

  @media screen and (min-width: 0px) {
    font-size: 1rem;
    button {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 321px) {
    font-size: 1rem;
    button {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
    button {
      font-size: 1.5rem;
    }
  }
`;

const Container = styled.section`
  padding: 20px;
`;

const GobackBtn = styled.button`
  border: none;
  background-color: inherit;
  width: 100%;
  font-weight: 600;
  color: black;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Title = styled.h1`
  color: black;
  text-align: center;
  margin: 5% 0px;
`;

const MainContent = styled.div`
  width: 100%;
  height: 40vh !important;
  margin: 7% 0px;
  @media screen and (max-width: 320px) {
    height: 40%;
  }
  padding: 0 12%;
  div {
    width: 100%;
    height: 100%;
    margin-top: 10%;
    border-radius: 15px;
    background-size: cover;
    background-position: center center;
  }
`;

const BtnBox = styled.div`
  width: 100%;
  border-radius: 15px;
  padding-top: 3%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const MorePickBtn = styled(Link)`
  border: 1px solid #fc913a;
  border-radius: 15px;
  color: #fc913a;
  width: 70%;
  height: 5vh;
  background-color: white;
  margin: 5% 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const DescBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 5%;
  span {
    margin-bottom: 3%;
    color: black;
  }
  span:last-child {
    color: rgba(0, 0, 0, 0.5);
    font-size: 1.2rem;
  }
`;

const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  text-align: center;
  span {
    margin: 2% 0px;
  }
`;

// const Divider = styled.div`
//   width: 100%;
//   margin: 0 auto;
//   border: 1px solid rgba(1, 1, 1, 0.3);
// `;

//! page1 css

const AwardContainer = styled.div`
  color: black;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  padding: 10%;
  button {
    border: none;
    cursor: pointer;
  }
`;

const AwardBox = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 5%;
  span {
    margin-bottom: 1%;
    color: black;
  }
`;

const ReactBtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 7%;
  button {
    margin: 0 1%;
    font-size: 1.2rem;
    font-weight: 600;

    @media screen and (min-width: 0px) {
      font-size: 0.8rem;
      width: 60%;
    }
    @media screen and (min-width: 768px) {
      font-size: 1rem;
      width: 45%;
    }
    @media screen and (min-width: 1024px) {
      width: 27%;
    }
    background-color: white;
    height: 7vh;
    border: 1px solid #c2f43b;
    border-radius: 10px;
    svg {
      margin-right: 2%;
    }
  }
  span {
    margin-left: 3%;
  }
`;

const ResultBtnBox = styled(Link)`
  height: 7vh;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fc913a;
  @media screen and (min-width: 0px) {
    width: 85%;
  }
  @media screen and (min-width: 768px) {
    font-size: 1rem;
    width: 75%;
  }
  @media screen and (min-width: 1024px) {
    width: 48%;
    font-size: 1.5rem;
  }
`;
//! page2 css

const RecommonContent = styled.div`
  width: 100%;
  height: 30vh !important;
  margin: 7% 0px;
  @media screen and (max-width: 320px) {
    height: 40%;
  }
  padding: 0 12%;
  div {
    width: 100%;
    height: 100%;
    margin-top: 10%;
    border-radius: 15px;
    background-position: center center;
    background-size: cover;
  }
`;

const SlideHeader = styled.div`
  color: black;
  width: 100%;
  text-align: center;
  margin: 5% 0px;
`;

//! page3 css
function Result() {
  const history = useHistory();

  const handleGoback = () => {
    history.goBack(1);
  };
  return (
    <LongContainer>
      <Container>
        <GobackBtn onClick={handleGoback}>
          <IoIosArrowBack />
          뒤로
        </GobackBtn>
        <Title>나에게 맞는 운동은?</Title>
        <DescBox>
          <span>집중 기초체력 키우기</span>
          <span>전체 참여자 중 ()%이 같은 결과입니다.</span>
        </DescBox>
        <MainContent>
          <div
            style={{
              backgroundImage: `url(${initialData.funItem2.result[0].img})`,
            }}
          ></div>
        </MainContent>

        <ResultBox>
          <span>당신의 결과는 설명과 같습니다</span>
          <span>당신의 결과는 설명과 같습니다</span>
          <span>당신의 결과는 설명과 같습니다</span>
        </ResultBox>
      </Container>
      <AwardContainer>
        <RiVipCrown2Fill style={{ color: "#FFC000", fontSize: "2.5rem" }} />
        <AwardBox>
          <span>이번 PICK으로 PKT를 모았습니다!</span>
          <span>좋아요나 공유하면 PKT를 더 모을 수 있어요!</span>
        </AwardBox>
        <ReactBtnBox>
          <button>
            <FaHeart />
            좋아요
            <span>172</span>
          </button>
          <button>
            <BiShare />
            공유
            <span>12</span>
          </button>
        </ReactBtnBox>
        <BtnBox>
          <ResultBtnBox to="/resultAll">
            <span>다른 결과 확인</span>
          </ResultBtnBox>
        </BtnBox>
      </AwardContainer>

      <Container>
        <Title>추천</Title>
        <RecommonContent>
          <div
            style={{
              backgroundImage: `url(${initialData.funItem1.result[3].img})`,
            }}
          ></div>
        </RecommonContent>

        <SlideHeader>
          <span>이번엔?! 무슨 PICK</span>
        </SlideHeader>

        <SwiperCard />

        <BtnBox>
          <MorePickBtn to="/now">
            <span>다른 PICK 해보기</span>
          </MorePickBtn>
        </BtnBox>
      </Container>
    </LongContainer>
  );
}

export default Result;
