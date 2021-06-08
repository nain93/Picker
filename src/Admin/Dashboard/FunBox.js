import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import OverRay from "../Components/OverRay";
import { IoIosArrowForward } from "react-icons/io";
import { RiArrowDownSFill } from "react-icons/ri";

const Container = styled.div`
  width: 70%;
  height: 100%;
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
    display: flex;
    padding: 15px;
    justify-content: space-between;
    align-items: center;
    > a {
      display: flex;
      align-items: center;
    }
  }
  > div:nth-child(2) {
    display: grid;
    width: 100%;
    height: 80%;
    grid-template-columns: repeat(8, 1fr);
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;
      h1 {
        padding: 10px;
      }
      div {
        padding: 0 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        font-size: 1rem;
        height: 100%;
      }
    }
  }
  > a {
    height: 10%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

function FunBox() {
  return (
    <Container>
      <div>
        <span>FUN</span>
        <Link>
          <span>생성</span>
          <RiArrowDownSFill />
        </Link>
      </div>
      <div>
        <div>
          <h1>일자</h1>
          <div>2021.06.03 04:04</div>
          <div>2021.06.03 04:04</div>
          <div>2021.06.03 04:04</div>
          <div>2021.06.03 04:04</div>
          <div>2021.06.03 04:04</div>
          <div>2021.06.03 04:04</div>
          <div>2021.06.03 04:04</div>
        </div>
        <div>
          <h1>카테고리</h1>
          <div>이미지</div>
          <div>GIF</div>
          <div>텍스트</div>
          <div>이미지</div>
          <div>이미지</div>
          <div>이미지</div>
          <div>텍스트</div>
        </div>
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
          <h1>예정리워드</h1>
          <div>이미지</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <h1>좋아요</h1>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <h1>공유</h1>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <h1>댓글</h1>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <h1>신고</h1>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <Link>
        <span>view all</span>
        <IoIosArrowForward />
      </Link>
    </Container>
  );
}

export default FunBox;
