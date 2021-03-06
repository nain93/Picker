import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { BiPlayCircle } from "react-icons/bi";
import { FaRegPauseCircle } from "react-icons/fa";
import { IoStopCircle } from "react-icons/io5";
import { BsPlusCircleFill } from "react-icons/bs";
import { useHistory } from "react-router";

const Container = styled.section`
  background-color: white;
  height: 100%;
  font-size: 1.5rem;
  padding: 20px;
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
      font-size: 1rem;
    }
    > button:first-child {
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
  padding: 0;
  margin-bottom: 6%;
  color: #ffc000;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const MoreBtnBox = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2% 0%;
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

const FilterBtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
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

const DataBox = styled.div``;

const StartItem = styled.div`
  svg {
    color: blue;
    width: 70px;
    margin-right: 4%;
    font-size: 3rem;
    @media screen and (max-width: 320px) {
      font-size: 2rem;
      width: 50px;
    }
  }
  border: 1px solid rgba(0, 0, 0, 0.5);
  width: 100%;
  margin-bottom: 2%;
  color: black;
  padding: 4%;
  display: flex;
  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    span {
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

const ItemCountBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemBtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 3%;
  button {
    cursor: pointer;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    border-radius: 7px;
    border: none;
    height: 6vh;
    width: 48%;
  }
`;

const PauseItem = styled.div`
  svg {
    color: #ffc000;
    width: 70px;
    margin-right: 4%;
    font-size: 3rem;
    @media screen and (max-width: 320px) {
      font-size: 2rem;
      width: 50px;
    }
  }
  border: 1px solid rgba(0, 0, 0, 0.5);
  width: 100%;
  margin-bottom: 2%;
  color: black;
  padding: 4%;
  display: flex;
  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    span {
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

const EndItem = styled.div`
  svg {
    color: black;
    width: 70px;
    margin-right: 4%;
    font-size: 3rem;
    @media screen and (max-width: 320px) {
      font-size: 2rem;
      width: 50px;
    }
  }
  border: 1px solid rgba(0, 0, 0, 0.5);
  width: 100%;
  margin-bottom: 2%;
  color: black;
  padding: 4%;
  display: flex;
  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    span {
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
function MyPick() {
  const [isClick, setIsClick] = useState("??????");
  const handleClick = (e) => {
    const { value } = e.target;
    setIsClick(value);
    return;
  };
  const handleMoreClick = () => {
    // ! adData??? ????????? concat?????? ??????
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
          MY PICK
        </GobackBtn>

        <FilterBtnBox>
          <button
            onClick={handleClick}
            value="??????"
            style={
              isClick === "??????"
                ? { backgroundColor: "#ffc000" }
                : { backgroundColor: "#BCBCBC" }
            }
          >
            ??????
          </button>
          <button
            onClick={handleClick}
            value="??????"
            style={
              isClick === "??????"
                ? { backgroundColor: "#ffc000" }
                : { backgroundColor: "#BCBCBC" }
            }
          >
            ??????
          </button>
          <button
            onClick={handleClick}
            value="??????"
            style={
              isClick === "??????"
                ? { backgroundColor: "#ffc000" }
                : { backgroundColor: "#BCBCBC" }
            }
          >
            ??????
          </button>
          <button
            onClick={handleClick}
            value="??????"
            style={
              isClick === "??????"
                ? { backgroundColor: "#ffc000" }
                : { backgroundColor: "#BCBCBC" }
            }
          >
            ??????
          </button>
        </FilterBtnBox>
        <DataBox>
          <StartItem>
            <div>
              <BiPlayCircle />
            </div>
            <div>
              <h1>PICK ??????</h1>
              <span>2021.05.07 16:08 ~ 2021.06.07 16:00</span>
              <ItemCountBox>
                <span>?????? 999</span>
                <span>????????? 999</span>
                <span>?????? 999</span>
              </ItemCountBox>
              <ItemBtnBox>
                <button>????????????</button>
                <button>????????????</button>
              </ItemBtnBox>
            </div>
          </StartItem>

          <PauseItem>
            <div>
              <FaRegPauseCircle />
            </div>
            <div>
              <h1>PICK ??????</h1>
              <span>2021.05.07 16:08 ~ 2021.06.07 16:00</span>
              <ItemBtnBox>
                <button>????????????</button>
                <button>????????????</button>
              </ItemBtnBox>
            </div>
          </PauseItem>

          <EndItem>
            <div>
              <IoStopCircle />
            </div>
            <div>
              <h1>PICK ??????</h1>
              <span>2021.05.07 16:08 ~ 2021.06.07 16:00</span>
              <ItemCountBox>
                <span>?????? 999</span>
                <span>????????? 999</span>
                <span>?????? 999</span>
              </ItemCountBox>
              <ItemBtnBox>
                <button>????????????</button>
                <button>????????? ??????</button>
              </ItemBtnBox>
            </div>
          </EndItem>
        </DataBox>
        <MoreBtnBox>
          <button onClick={handleMoreClick}>
            <span>??? ??????</span>
            <BsPlusCircleFill />
          </button>
        </MoreBtnBox>
        <MoreBtnBox>
          <button onClick={handleMoreClick}>
            <span>PICK ??????</span>
            <BsPlusCircleFill />
          </button>
        </MoreBtnBox>
      </Container>
    </>
  );
}

export default MyPick;
