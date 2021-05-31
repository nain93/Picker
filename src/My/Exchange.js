import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.section`
  font-size: 1.5rem;
  background-color: white;
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
      font-size: 1.5rem;
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
  color: #ffc000;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const JoinBtn = styled(Link)`
  background-color: #ffc000;
  margin-top: 5%;
  height: 80px;
  border-radius: 10px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const JoinBtnBox = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 12%;
`;

function Exchange() {
  return (
    <Container>
      <GobackBtn>
        <IoIosArrowBack />
        교환
      </GobackBtn>
      <JoinBtnBox>
        <JoinBtn>
          <span>SUC</span>
          <span></span>
        </JoinBtn>
      </JoinBtnBox>
      <JoinBtnBox>
        <JoinBtn>
          <span>5</span>
          <span>SUC</span>
        </JoinBtn>
      </JoinBtnBox>
      <JoinBtnBox>
        <JoinBtn>교환하기</JoinBtn>
      </JoinBtnBox>
    </Container>
  );
}

export default Exchange;
