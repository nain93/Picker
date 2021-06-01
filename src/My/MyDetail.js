import React from "react";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { BsFiles } from "react-icons/bs";
import { RiVipCrown2Fill } from "react-icons/ri";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { BsPlusCircleFill } from "react-icons/bs";

const Container = styled.section`
  background-color: white;
  height: 100%;
  font-size: 1.5rem;
  button,
  a {
    font-size: 1.5rem;
  }
  @media screen and (min-width: 0px) {
    font-size: 1rem;
    button,
    a {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 375px) {
    font-size: 1rem;
    button,
    a {
      font-size: 1.2rem;
    }
  }
  @media screen and (min-width: 769px) {
    font-size: 1.5rem;
    a,
    > button:first-child,
    button {
      font-size: 1.5rem;
    }
  }
`;

const GobackBtn = styled.button`
  border: none;
  background-color: inherit;
  width: 100%;
  padding: 0 20px;
  margin: 4% 0;
  color: #ffc000;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const MainBox = styled.div`
  margin: 7% 0;
  width: 100%;
  height: 20vh;
  background-color: #ffc000;
  display: flex;
  align-items: center;
`;

const MoreBtnBox = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2% 6%;

  button {
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.5);
    height: 100%;
    background-color: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(0, 0, 0, 0.5);
    span {
      margin-right: 2%;
    }
  }
`;

const ProfileBox = styled.div`
  color: black;
  margin: 5% 0px;
  padding-left: 5%;
  width: 100%;
`;

const DetailLinkBox = styled.div`
  display: flex;
  width: 100%;
  > span {
    width: 20%;
    @media screen and (max-width: 768px) {
      width: 30%;
    }
    @media screen and (max-width: 375px) {
      width: 40%;
    }
    margin-right: 2%;
  }
  div {
    width: 100%;
    span {
      margin-right: 1%;
    }
  }
`;

const CrownBox = styled.div`
  margin-top: 2%;
  display: flex;
  align-items: center;
  svg {
    margin-right: 1%;
    color: white;
  }
`;

const FilterBtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 20px;
  button {
    margin-right: 2%;
    margin-bottom: 7%;
    border: none;
    width: 20%;
    height: 5vh;
    cursor: pointer;
    border-radius: 5px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
  }
`;

const DataBox = styled.div`
  padding: 0 6%;
`;

const Item = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 12vh;
  margin-bottom: 2%;
  color: black;
  padding: 2%;
  display: flex;
  justify-content: space-between;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    span:last-child {
      font-size: 1rem;
      @media screen and (max-width: 375px) {
        font-size: 0.8rem;
      }
      margin-top: 2%;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 400;
    }
  }
`;

function MyDetail() {
  const [isClick, setIsClick] = useState("전체");
  const [adData, setAdData] = useState([]);
  const handleClick = (e) => {
    const { value } = e.target;
    setIsClick(value);
    return;
  };
  const handleMoreClick = () => {
    // ! adData에 데이터 concat으로 삽입
    // https://codesandbox.io/s/day-seven-blueprint-forked-qbpdu?file=/src/index.js:270-275
  };
  const history = useHistory();

  const handleGoback = () => {
    history.goBack(1);
  };

  return (
    <>
      <Container>
        <GobackBtn onClick={handleGoback}>
          <IoIosArrowBack />
          내역
        </GobackBtn>
        <MainBox>
          <ProfileBox>
            <DetailLinkBox>
              <span>지갑 주소</span>
              <div>
                <span>SW1q2w3e...2q2w5e</span>
                <Link>
                  <BsFiles />
                </Link>
              </div>
            </DetailLinkBox>

            <CrownBox>
              <RiVipCrown2Fill />
              <span>120</span>
            </CrownBox>
          </ProfileBox>
        </MainBox>
        <FilterBtnBox>
          <button
            onClick={handleClick}
            value="전체"
            style={
              isClick === "전체"
                ? { backgroundColor: "#ffc000" }
                : { backgroundColor: "#BCBCBC" }
            }
          >
            전체
          </button>
          <button
            onClick={handleClick}
            value="충전"
            style={
              isClick === "충전"
                ? { backgroundColor: "#ffc000" }
                : { backgroundColor: "#BCBCBC" }
            }
          >
            충전
          </button>
          <button
            onClick={handleClick}
            value="이용"
            style={
              isClick === "이용"
                ? { backgroundColor: "#ffc000" }
                : { backgroundColor: "#BCBCBC" }
            }
          >
            이용
          </button>
          <button
            onClick={handleClick}
            value="교환"
            style={
              isClick === "교환"
                ? { backgroundColor: "#ffc000" }
                : { backgroundColor: "#BCBCBC" }
            }
          >
            교환
          </button>
        </FilterBtnBox>
        <DataBox>
          <Item>
            <div>
              <span>충전_광고</span>
              <span>SWesaWct...voXoHH</span>
            </div>
            <div>
              <span>102.10 PNT</span>
              <span>2021.05.07 16:08</span>
            </div>
          </Item>
          <Item>
            <div>
              <span>충전_광고</span>
              <span>SWesaWct...voXoHH</span>
            </div>
            <div>
              <span>102.10 PNT</span>
              <span>2021.05.07 16:08</span>
            </div>
          </Item>
          <Item>
            <div>
              <span>충전_광고</span>
              <span>SWesaWct...voXoHH</span>
            </div>
            <div>
              <span>102.10 PNT</span>
              <span>2021.05.07 16:08</span>
            </div>
          </Item>
          <Item>
            <div>
              <span>충전_광고</span>
              <span>SWesaWct...voXoHH</span>
            </div>
            <div>
              <span>102.10 PNT</span>
              <span>2021.05.07 16:08</span>
            </div>
          </Item>
          <Item>
            <div>
              <span>충전_광고</span>
              <span>SWesaWct...voXoHH</span>
            </div>
            <div>
              <span>102.10 PNT</span>
              <span>2021.05.07 16:08</span>
            </div>
          </Item>
          <Item>
            <div>
              <span>충전_광고</span>
              <span>SWesaWct...voXoHH</span>
            </div>
            <div>
              <span>102.10 PNT</span>
              <span>2021.05.07 16:08</span>
            </div>
          </Item>
        </DataBox>
        <MoreBtnBox>
          <button onClick={handleMoreClick}>
            <span>더 보기</span>
            <BsPlusCircleFill />
          </button>
        </MoreBtnBox>
      </Container>
    </>
  );
}

export default MyDetail;
