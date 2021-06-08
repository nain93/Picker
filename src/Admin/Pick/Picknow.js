import React from "react";
import styled from "styled-components";
import { initialData } from "../../data/initialData";
import OverRay from "../Components/OverRay";

const Container = styled.div`
  width: 35%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-right: 2%;
  display: flex;
  flex-direction: column;
`;

const PickHeader = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  div {
    padding: 0 20px;
  }
  > div:first-child {
    width: 35%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    div {
      width: 100px;
      height: 100px;
      border-radius: 20px;
      background-position: center center;
      background-size: cover;
    }
  }
  > div:last-child {
    width: 65%;
    display: flex;
    justify-content: flex-end;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      width: 100px;

      margin-top: 2%;
      background-color: #1cac48;
      border-radius: 30px;
      height: 5vh;
    }
  }
`;

const Desc = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  > div {
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > div:first-child {
    width: 35%;
    font-size: 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  > div:last-child {
    width: 65%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    > div {
      span:first-child {
        width: 200px;
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
`;

const DescFormBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 35.5vh;
  align-items: center;
  padding: 20px;
  form {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
    button {
      height: 5vh;
      border-radius: 30px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      background-color: #ffc000;
      cursor: pointer;
      color: white;
    }
    input {
      height: 5vh;
      border: 1px solid rgba(0, 0, 0, 0.1);
      padding: 0 10px;
    }
  }
`;

function Picknow({ id }) {
  return (
    <Container>
      {id === "1" ? (
        <>
          <PickHeader>
            <div>
              <div
                style={{
                  backgroundImage: `url(${initialData.funItem1.result[0].img})`,
                }}
              ></div>
            </div>
            <div>
              <div>승인대기</div>
            </div>
          </PickHeader>
          <Desc>
            <div>제목</div>
            <div>{initialData.funItem1.result[0].title}</div>
          </Desc>
          <Desc>
            <div>작성자 정보</div>
            <div>
              <OverRay />
            </div>
          </Desc>
          <Desc>
            <div>작성일</div>
            <div>2021-06-03 04:04</div>
          </Desc>
          <Desc>
            <div>픽타입</div>
            <div>공개형 / 10개 / 스와이프</div>
          </Desc>
          <Desc>
            <div>카테고리</div>
            <div>동물</div>
          </Desc>
          <DescFormBox>
            <form>
              <input placeholder="거절메세지 (max 30 text)" required></input>
              <button>거절하기</button>
            </form>
            <form>
              <input placeholder="승인메세지 (max 30 text)" required></input>
              <button>승인하기</button>
            </form>
          </DescFormBox>
        </>
      ) : id === "2" ? (
        <>
          <PickHeader>
            <div>
              <div
                style={{
                  backgroundImage: `url(${initialData.funItem1.result[1].img})`,
                }}
              ></div>
            </div>
            <div>
              <div style={{ backgroundColor: "#0021FF" }}>진행중</div>
            </div>
          </PickHeader>
          <Desc>
            <div>제목</div>
            <div>{initialData.funItem1.result[0].title}</div>
          </Desc>
          <Desc>
            <div>작성자 정보</div>
            <div>
              <OverRay />
            </div>
          </Desc>
          <Desc>
            <div>작성일</div>
            <div>2021-06-03 04:04</div>
          </Desc>
          <Desc>
            <div>픽타입</div>
            <div>공개형 / 10개 / 스와이프</div>
          </Desc>
          <Desc>
            <div>카테고리</div>
            <div>동물</div>
          </Desc>
          <Desc>
            <div>참여 수</div>
            <div>1,102,505</div>
          </Desc>
          <Desc>
            <div>좋아요 / 공유 수</div>
            <div>1,105 / 255,523</div>
          </Desc>
          <Desc>
            <div>신고수</div>
            <div>3</div>
          </Desc>
          <Desc>
            <div>예정 종료일</div>
            <div>2021-06-12 4:04</div>
          </Desc>
          <Desc>
            <div>예정 리워드</div>
            <div>50 BNT</div>
          </Desc>
        </>
      ) : id === "3" ? (
        <>
          <PickHeader>
            <div>
              <div
                style={{
                  backgroundImage: `url(${initialData.funItem1.result[2].img})`,
                }}
              ></div>
            </div>
            <div>
              <div style={{ backgroundColor: "#FF3300" }}>거절</div>
            </div>
          </PickHeader>
          <Desc>
            <div>제목</div>
            <div>{initialData.funItem1.result[0].title}</div>
          </Desc>
          <Desc>
            <div>작성자 정보</div>
            <div>
              <OverRay />
            </div>
          </Desc>
          <Desc>
            <div>작성일</div>
            <div>2021-06-03 04:04</div>
          </Desc>
          <Desc>
            <div>픽타입</div>
            <div>공개형 / 10개 / 스와이프</div>
          </Desc>
          <Desc>
            <div>카테고리</div>
            <div>동물</div>
          </Desc>
          <Desc>
            <div>거절사유</div>
            <div>사유입니다.....!</div>
          </Desc>
        </>
      ) : (
        <>
          <PickHeader>
            <div>
              <div
                style={{
                  backgroundImage: `url(${initialData.funItem1.result[3].img})`,
                }}
              ></div>
            </div>
            <div>
              <div style={{ backgroundColor: "#B6B6B6" }}>종료</div>
            </div>
          </PickHeader>
          <Desc>
            <div>제목</div>
            <div>{initialData.funItem1.result[0].title}</div>
          </Desc>
          <Desc>
            <div>작성자 정보</div>
            <div>
              <OverRay />
            </div>
          </Desc>
          <Desc>
            <div>작성일</div>
            <div>2021-06-03 04:04</div>
          </Desc>
          <Desc>
            <div>픽타입</div>
            <div>공개형 / 10개 / 스와이프</div>
          </Desc>
          <Desc>
            <div>카테고리</div>
            <div>동물</div>
          </Desc>
          <DescFormBox>
            <form>
              <input placeholder="거절메세지 (max 30 text)" required></input>
              <button>거절하기</button>
            </form>
            <form>
              <input placeholder="승인메세지 (max 30 text)" required></input>
              <button>승인하기</button>
            </form>
          </DescFormBox>
        </>
      )}
    </Container>
  );
}

export default Picknow;
