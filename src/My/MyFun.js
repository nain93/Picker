import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { BsPlusCircleFill } from "react-icons/bs";
import profile from "../img/result/result9.png";
import { BiShare } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import resultImg from "../img/result/result1.png";
import { BsPencil } from "react-icons/bs";
import { Link, useHistory } from "react-router-dom";

const Container = styled.section`
  background-color: white;
  height: 100%;
  font-size: 1.5rem;
  padding: 20px;
  @media screen and (min-width: 0px) {
    font-size: 1rem;
    button {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 375px) {
    font-size: 1rem;
    button {
      font-size: 1rem;
    }
    > button:first-child {
      font-size: 1.2rem;
    }
  }
  @media screen and (min-width: 769px) {
    font-size: 1.5rem;
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
  margin-bottom: 5%;
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

const ProfileBox = styled.div`
  margin: 5% 0px;
  display: flex;
`;

const ImgBox = styled.img`
  @media screen and (min-width: 0px) {
    width: 25%;
  }
  @media screen and (min-width: 320px) {
    width: 25%;
  }
  @media screen and (min-width: 768px) {
    width: 25%;
  }

  height: 90%;
  border-radius: 15px;
  object-fit: cover;
  margin-right: 2%;
`;

const ProfileDescBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  span:first-child {
    color: black;
  }
  span:not(:first-child) {
    color: rgba(0, 0, 0, 0.6);
    font-size: 1rem;
  }
  span {
    margin-bottom: 8%;
  }

  div {
    display: flex;
    align-items: center;
    img {
      width: 13%;
      margin-right: 3%;
    }
  }
`;

const ImgDataBox = styled.img`
  height: 60%;
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

const UploadLink = styled(Link)`
  background-color: #ff6f33;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 415px) {
    font-size: 1.5rem;
    width: 60px;
    height: 60px;
    right: 5%;
    top: 10%;
    box-shadow: rgba(0, 0, 0, 0.3) 1px 1px 3px;
  }
  @media screen and (max-width: 320px) {
    font-size: 1rem;
    width: 40px;
    height: 40px;
    right: 5%;
    top: 12%;
  }
  position: absolute;
  top: 20%;
  right: 35%;
  box-shadow: rgba(0, 0, 0, 0.3) 3px 3px 5px;
  z-index: 999;
`;

function MyFun() {
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
          MY FUN
        </GobackBtn>
        <ProfileBox>
          <ImgBox src={profile} alt="profile" />
          <ProfileDescBox>
            <span>빛나는 루카스</span>
            <span>내가 쓴 글 10</span>
            <span>내가 쓴 댓글 99</span>
          </ProfileDescBox>
        </ProfileBox>
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
            value="글"
            style={
              isClick === "글"
                ? { backgroundColor: "#ffc000" }
                : { backgroundColor: "#BCBCBC" }
            }
          >
            글
          </button>
          <button
            onClick={handleClick}
            value="댓글"
            style={
              isClick === "댓글"
                ? { backgroundColor: "#ffc000" }
                : { backgroundColor: "#BCBCBC" }
            }
          >
            댓글
          </button>
        </FilterBtnBox>

        <DetailContentBox>
          <DetailItem>
            <div>
              <ImgDataBox src={resultImg} alt="result" />
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
              <ImgDataBox src={resultImg} alt="result" />
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
              <ImgDataBox src={resultImg} alt="result" />
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
              <ImgDataBox src={resultImg} alt="result" />
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

        <MoreBtnBox>
          <button onClick={handleMoreClick}>
            <span>더 보기</span>
            <BsPlusCircleFill />
          </button>
        </MoreBtnBox>
        <UploadLink to="/upload">
          <BsPencil />
        </UploadLink>
      </Container>
    </>
  );
}

export default MyFun;
