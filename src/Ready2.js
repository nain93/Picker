import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { initialData } from "./data/initialData";

const Container = styled.section`
  font-size: 1.5rem;
  background-color: white;
  height: 100%;
  padding: 20px;
  @media screen and (min-width: 0px) {
    position: fixed;
    font-size: 0.8rem;
    button {
      font-size: 0.8rem;
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
    width: 100%;
    height: 100%;
    margin-top: 10%;
    border-radius: 15px;
    background-size: cover;
    background-position: center center;
  }
`;

const DetailDesc = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 5% 10px;
  @media screen and (max-width: 375px) {
    margin: 2% 10px;
  }
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
  text-align: center;
  color: black;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 12%;
`;

function Ready2() {
  const history = useHistory();
  const { id } = useParams();

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
        <div
          style={{
            backgroundImage: `url(${initialData.funItem2.result[1].img})`,
          }}
        ></div>
      </DetailContentBox>
      <DetailDesc>
        <span>{initialData.funItem2.result[1].title}</span>
        <span>나에게 맞는 운동은?</span>
      </DetailDesc>
      <JoinBtnBox>
        <span>182명 참여중</span>
        <JoinBtn to={`/ready2/swap/${id}`}>참여시작!</JoinBtn>
      </JoinBtnBox>
    </Container>
    // ! swap인지 choice인지 확인해야됨
  );
}

export default Ready2;
