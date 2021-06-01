import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";

const Container = styled.section`
  background-color: #ffc000;
  height: 100%;
  padding: 20px;
  @media screen and (min-width: 0px) {
    position: fixed;
    font-size: 1rem;
    button {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 321px) {
    position: fixed;
    font-size: 1.5rem;
    button {
      font-size: 1.2rem;
    }
  }
  @media screen and (min-width: 768px) {
    position: static;
    font-size: 1.5rem;
    button {
      font-size: 1.5rem;
    }
  }
`;

const GobackBtn = styled.button`
  border: none;
  background-color: inherit;
  width: 100%;
  font-size: 1.5rem;
  font-weight: 600;
  color: inherit;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Title = styled.div`
  @media screen and (min-width: 0px) {
    margin: 30px;
  }
  @media screen and (min-width: 320px) {
    margin: 50px;
  }
  @media screen and (min-width: 768px) {
    margin: 100px;
  }
  text-align: center;
`;

const Count = styled.div`
  text-align: center;
  position: relative;
  margin-top: 10%;
  margin-bottom: 60px;
  color: white;
`;

const DescBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 10%;
  span {
    margin-top: 2%;
  }
`;

const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const PickBtnLink = styled(Link)`
  color: black;
  cursor: pointer;
  margin-bottom: 5%;
  height: 10vh;
  width: 60%;
  border-radius: 10px;
  background-color: white;
  display: flex;
  justify-content: center;
  font-size: 1.3rem;
  align-items: center;
`;

function Choice() {
  const [countPage, setCountPage] = useState(1);
  const { pathname } = useLocation();
  const history = useHistory();

  const handleGoback = () => {
    history.goBack(1);
  };

  const handleAPick = () => {
    if (countPage === 6) {
      //todo 결과페이지로 이동
      return;
    }
    setCountPage((countPage) => countPage + 1);
    //todo 픽한 데이터 저장소 관리 해야됨
  };

  const handleBPick = () => {
    if (countPage === 6) {
      //todo 결과페이지로 이동
      return;
    }
    setCountPage((countPage) => countPage + 1);
    //todo 픽한 데이터 저장소 관리 해야됨
  };

  return (
    <Container>
      <GobackBtn onClick={handleGoback}>
        <IoIosArrowBack />
        뒤로
      </GobackBtn>
      <Title>Q)당신의 연애스타일은..?</Title>
      <DescBox>
        <span>당신은 이러이러한 상황에 있다.</span>
        <span>이때 당신의 선택은?</span>
      </DescBox>
      <BtnBox>
        <PickBtnLink
          onClick={handleAPick}
          to={countPage === 5 ? "/result" : pathname}
        >
          A. 버린다
        </PickBtnLink>
        <PickBtnLink
          onClick={handleBPick}
          to={countPage === 5 ? "/result" : pathname}
        >
          B. 좋아한다
        </PickBtnLink>
      </BtnBox>
      <Count>{countPage}/5</Count>
    </Container>
  );
}

export default Choice;
