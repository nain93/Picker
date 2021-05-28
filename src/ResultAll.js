import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import resultImg from "./img/result/result1.png";

const Container = styled.section`
  background-color: white;
  height: 100%;
  padding: 20px;
  font-size: 1.5rem;

  @media screen and (min-width: 0px) {
    position: fixed;
    button,
    a {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 320px) {
    position: fixed;
    button,
    a {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 768px) {
    position: static;

    a,
    > button:first-child {
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
  height: 80%;
  padding: 0 4%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DetailItem = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 20%;
  margin-top: 4%;
  border-radius: 15px;
  padding: 1% 4%;
  > div:first-child {
    display: flex;
    height: 100%;
    align-items: center;
  }
`;

const ImgBox = styled.img`
  width: 22%;
  @media screen and (min-width: 0px) {
    width: 26%;
  }
  @media screen and (min-width: 320px) {
    width: 28%;
  }
  @media screen and (min-width: 768px) {
    width: 30%;
  }

  height: 90%;
  border-radius: 15px;
  /* border: 1px solid black; */
  object-fit: cover;
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
  span {
    margin: 3% 0px;
  }
  span:last-child {
    font-size: 1rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 375px) {
    font-size: 0.8rem;
    span:last-child {
      font-size: 0.6rem;
    }
  }
`;

const DescBtn = styled.div`
  button {
    margin: 2% 0px;
    margin-right: 4%;
    padding: 0;
    border: none;
    background-color: inherit;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
    @media screen and (max-width: 375px) {
      font-size: 0.8rem;
    }
  }
`;

const DescResult = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  width: 100%;
  span {
    margin: 1% 8%;
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 375px) {
    font-size: 0.8rem;
  }
`;

const JoinBtn = styled(Link)`
  background-color: #ffc000;
  height: 8vh;
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
  margin-top: 4%;
  margin-bottom: 6%;
`;

function ResultAll() {
  const history = useHistory();
  const [moreClick, setMoreCilck] = useState(false);

  const handleGoback = () => {
    history.goBack(1);
  };

  const handleMoreClick = () => {
    if (moreClick) {
      setMoreCilck(false);
      return;
    }
    setMoreCilck(true);
  };
  return (
    <Container>
      <GobackBtn onClick={handleGoback}>
        <IoIosArrowBack />
        뒤로
      </GobackBtn>
      <DetailContentBox>
        <DetailItem>
          <div>
            <ImgBox src={resultImg} alt="result" />
            <DescBox>
              <Desc>
                <span>집중, 기초 체력 키우기</span>
                <span>전체 이용자 중 ()%가 해당됩니다.</span>
              </Desc>

              <DescBtn>
                <button onClick={handleMoreClick}>
                  <span>자세히 보기</span>
                </button>
                <button>
                  <span>추천 링크</span>
                </button>
              </DescBtn>
            </DescBox>
          </div>
        </DetailItem>
        <DetailItem
          style={
            moreClick
              ? { borderBottom: "0px", borderRadius: "15px 15px 0 0" }
              : { borderRadius: "15px" }
          }
        >
          <div>
            <ImgBox src={resultImg} alt="result" />
            <DescBox>
              <Desc>
                <span>집중, 기초 체력 키우기</span>
                <span>전체 이용자 중 ()%가 해당됩니다.</span>
              </Desc>

              <DescBtn>
                <button onClick={handleMoreClick}>
                  <span>자세히 보기</span>
                </button>
                <button>
                  <span>추천 링크</span>
                </button>
              </DescBtn>
            </DescBox>
          </div>
        </DetailItem>
        {moreClick ? (
          <DescResult
            style={{
              border: "1px solid black",
              borderTop: "0px",
              borderRadius: "0 0 15px 15px",
            }}
          >
            <span>당신의 결과는 설명과 같습니다.</span>
            <span>당신의 결과는 설명과 같습니다.</span>
            <span>당신의 결과는 설명과 같습니다.</span>
          </DescResult>
        ) : (
          ""
        )}

        <DetailItem>
          <div>
            <ImgBox src={resultImg} alt="result" />
            <DescBox>
              <Desc>
                <span>집중, 기초 체력 키우기</span>
                <span>전체 이용자 중 ()%가 해당됩니다.</span>
              </Desc>

              <DescBtn>
                <button onClick={handleMoreClick}>
                  <span>자세히 보기</span>
                </button>
                <button>
                  <span>추천 링크</span>
                </button>
              </DescBtn>
            </DescBox>
          </div>
        </DetailItem>
        <DetailItem>
          <div>
            <ImgBox src={resultImg} alt="result" />
            <DescBox>
              <Desc>
                <span>집중, 기초 체력 키우기</span>
                <span>전체 이용자 중 ()%가 해당됩니다.</span>
              </Desc>

              <DescBtn>
                <button onClick={handleMoreClick}>
                  <span>자세히 보기</span>
                </button>
                <button>
                  <span>추천 링크</span>
                </button>
              </DescBtn>
            </DescBox>
          </div>
        </DetailItem>
      </DetailContentBox>

      <JoinBtnBox style={moreClick ? { marginTop: "8%" } : { marginTop: "4%" }}>
        <JoinBtn to="/">다른 PICK 해보기</JoinBtn>
      </JoinBtnBox>
    </Container>
  );
}

export default ResultAll;
