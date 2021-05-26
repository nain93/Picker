import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RiVipCrown2Fill } from "react-icons/ri";
import { BiShare } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import SwiperCard from "./SwiperCard";

const LongContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1.5rem;
  @media screen and (max-width: 450px) {
    font-size: 1rem;
  }
`;

const Container = styled.section`
  padding: 0 20px;
`;

const Title = styled.h1`
  color: black;
  text-align: center;
  margin: 40px 0px;
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
    border: 1px solid black;
    width: 100%;
    height: 100%;
    margin-top: 10%;
    border-radius: 15px;
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

const MorePickBtn = styled(Link)`
  border: 1px solid #fc913a;
  border-radius: 15px;
  color: #fc913a;
  width: 70%;
  height: 5vh;
  background-color: white;
  cursor: pointer;
  margin: 10% 0px;
  font-weight: 600;
  grid-column: 1;
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

const Divider = styled.div`
  width: 100%;
  margin: 0 auto;
  border: 1px solid rgba(1, 1, 1, 0.3);
`;
//! page1 css

const AwardContainer = styled.div`
  color: black;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  padding: 16%;
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
  justify-content: space-between;
  align-items: center;
  button {
    font-size: 1.2rem;
    font-weight: 600;
    @media screen and (max-width: 450px) {
      font-size: 0.8rem;
    }
    @media screen and (min-width: 768px) {
      font-size: 1rem;
    }
    background-color: white;
    width: 48%;
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
  width: 100%;
  button {
    width: 100%;
    height: 7vh;
    border-radius: 10px;
    margin-top: 5%;
    background-color: #fc913a;
    font-size: 1.2rem;
    font-weight: 600;
    @media screen and (max-width: 720px) {
      font-size: 1rem;
    }
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
    border: 1px solid black;
    width: 100%;
    height: 100%;
    margin-top: 10%;
    border-radius: 15px;
  }
`;

const SlideHeader = styled.div`
  color: black;
  width: 100%;
  text-align: center;
  margin: 5% 0px;
`;

const SwiperBox = styled.div``;

//! page3 css
function Result() {
  return (
    <>
      <LongContainer>
        <Container>
          <Title>나에게 맞는 운동은?</Title>
          <DescBox>
            <span>집중 기초체력 키우기</span>
            <span>전체 참여자 중 ()%이 같은 결과입니다.</span>
          </DescBox>
          <MainContent>
            <div></div>
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
          <ResultBtnBox to="/resultAll">
            <button>다른 결과 확인</button>
          </ResultBtnBox>
        </AwardContainer>

        <Container>
          <Title>추천</Title>
          <RecommonContent>
            <div></div>
          </RecommonContent>

          <SlideHeader>
            <span>이번엔?! 무슨 PICK</span>
          </SlideHeader>
          <SwiperBox>
            <SwiperCard />
          </SwiperBox>
          <BtnBox>
            <MorePickBtn to="/">
              <span>다른 PICK 해보기</span>
            </MorePickBtn>
          </BtnBox>
        </Container>
      </LongContainer>
    </>
  );
}

export default Result;
