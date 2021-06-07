import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { RiArrowDownSFill } from "react-icons/ri";

const PickBox = styled.div`
  width: 30%;
  height: 100%;
  margin-right: 2%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    height: 15%;
    a {
      display: flex;
      align-items: center;
    }
  }
  > div:nth-child(2) {
    display: flex;
    height: 75%;
    flex-direction: column;
  }
  > div:last-child {
    height: 10%;
    a {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 100%;
    }
  }
`;

const PickItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  > div:first-child {
    border-radius: 15px;
    width: 17%;
    height: 7vh;
    background-color: black;
    margin-right: 5%;
  }
  > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

function index() {
  return (
    <PickBox>
      <div>
        <span>PICK</span>
        <Link>
          <span>승인요청</span>
          <RiArrowDownSFill />
        </Link>
      </div>
      <div>
        <PickItem>
          <div></div>
          <div>
            <span>Pick 제목</span>
            <span>2021.06.03</span>
          </div>
        </PickItem>
        <PickItem>
          <div></div>
          <div>
            <span>Pick 제목</span>
            <span>2021.06.03</span>
          </div>
        </PickItem>
        <PickItem>
          <div></div>
          <div>
            <span>Pick 제목</span>
            <span>2021.06.03</span>
          </div>
        </PickItem>
        <PickItem>
          <div></div>
          <div>
            <span>Pick 제목</span>
            <span>2021.06.03</span>
          </div>
        </PickItem>
      </div>
      <div>
        <Link>
          <span>view all</span>
          <IoIosArrowForward />
        </Link>
      </div>
    </PickBox>
  );
}

export default index;
