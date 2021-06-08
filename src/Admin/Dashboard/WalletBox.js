import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import OverRay from "../Components/OverRay";
import { IoIosArrowForward } from "react-icons/io";

const Container = styled.div`
  width: 100%;
  height: 50vh;
  color: black;
  border: 1px solid rgba(0, 0, 0, 0.1);
  > div {
    > div {
      span:first-child {
        width: 150px;
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  > div:first-child {
    width: 100%;
    height: 10%;
    padding: 10px 15px;
  }
  > div:nth-child(2) {
    display: grid;
    width: 100%;
    height: 80%;
    grid-template-columns: repeat(8, 1fr);
    > div {
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;
      h1 {
        padding: 10px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }
      div {
        padding: 0 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        height: 100%;
      }
    }
  }
  > a {
    height: 10%;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

function index() {
  return (
    <Container>
      <div>월렛</div>
      <div>
        <div>
          <h1>지갑주소</h1>
          <OverRay right={-10} />
          <OverRay right={-10} />
          <OverRay right={-10} />
          <OverRay right={-10} />
          <OverRay right={-10} />
          <OverRay right={-10} />
          <OverRay right={-10} />
        </div>
        <div>
          <h1>일자</h1>
          <div>2021-06-03 04:04</div>
          <div>2021-06-03 04:04</div>
          <div>2021-06-03 04:04</div>
          <div>2021-06-03 04:04</div>
          <div>2021-06-03 04:04</div>
          <div>2021-06-03 04:04</div>
          <div>2021-06-03 04:04</div>
          <div>2021-06-03 04:04</div>
        </div>
        <div>
          <h1>타입</h1>
          <div>생성</div>
          <div>연동</div>
          <div>연동</div>
          <div>연동</div>
          <div>연동</div>
          <div>생성</div>
          <div>생성</div>
          <div>생성</div>
        </div>
        <div>
          <h1>보유PNT</h1>
          <div>5</div>
          <div>5</div>
          <div>5</div>
          <div>5</div>
          <div>5</div>
          <div>5</div>
          <div>5</div>
          <div>5</div>
        </div>
        <div>
          <h1>교환횟수</h1>
          <div>0</div>
          <div>5</div>
          <div>0</div>
          <div>5</div>
          <div>0</div>
          <div>5</div>
          <div>0</div>
          <div>0</div>
        </div>
        <div>
          <h1>닉네임</h1>
          <div>0805네임</div>
          <div>0805네임</div>
          <div>0805네임</div>
          <div>0805네임</div>
          <div>0805네임</div>
          <div>0805네임</div>
          <div>0805네임</div>
          <div>0805네임</div>
        </div>
        <div>
          <h1>추천인코드</h1>
          <div>eaka685s</div>
          <div>eaka685s</div>
          <div>eaka685s</div>
          <div>eaka685s</div>
          <div>eaka685s</div>
          <div>eaka685s</div>
          <div>eaka685s</div>
          <div>eaka685s</div>
        </div>
        <div>
          <h1>계정상태</h1>
          <div>active</div>
          <div>active</div>
          <div>active</div>
          <div>active</div>
          <div>active</div>
          <div>active</div>
          <div>정지(신고)</div>
          <div>active</div>
        </div>
      </div>
      <Link>
        <span>view all</span>
        <IoIosArrowForward />
      </Link>
    </Container>
  );
}

export default index;
