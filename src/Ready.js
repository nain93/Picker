import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.section`
  font-size: 1.5rem;
  background-color: white;
  height: 100%;
  padding: 20px;
  @media screen and (min-width: 0px) {
    position: fixed;
  }
  @media screen and(min-width:320px) {
    position: fixed;
  }
  @media screen and (min-width: 768px) {
    position: static;
  }
`;

const GobackBtn = styled.button`
  border: none;
  background-color: inherit;
  width: 100%;
  font-size: 1.5rem;
  font-weight: 600;
  color: black;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const DetailContentBox = styled.div`
  width: 100%;
  height: 50%;
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

const DetailDesc = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 5% 10px;
  span {
    margin: 10px 0;
    font-weight: 800;
  }
  span:last-child {
    font-size: 1.2rem;
  }
`;

const JoinBtn = styled(Link)`
  background-color: #ffc000;
  margin-top: 5%;
  height: 80px;
  border-radius: 10px;
  border: none;
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const JoinBtnBox = styled.div`
  span {
    margin-top: 5%;
  }
  text-align: center;
  color: black;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 12%;
  margin-bottom: 10%;
`;

function Ready() {
  const history = useHistory();

  const handleGoback = () => {
    history.goBack(1);
  };

  return (
    <Container>
      <GobackBtn onClick={handleGoback}>
        <IoIosArrowBack />
        뒤로
      </GobackBtn>
      <DetailContentBox>
        <div></div>
      </DetailContentBox>
      <DetailDesc>
        <span>코로나 뿌셔! 나랑 맞는 운동은?</span>
        <span>나에게 맞는 운동은?</span>
      </DetailDesc>
      <JoinBtnBox>
        <span>182명 참여중</span>
        <JoinBtn to="/ready/choice">참여시작!</JoinBtn>
      </JoinBtnBox>
    </Container>
    // ! swap인지 choice인지 확인해야됨
  );
}

export default Ready;
