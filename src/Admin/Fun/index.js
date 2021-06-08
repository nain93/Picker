import React, { useState } from "react";
import styled from "styled-components";
import Nav from "../Dashboard/Nav";
// import { HiOutlineSearch } from "react-icons/hi";
import OverRay from "../Components/OverRay";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Container = styled.div`
  width: 100%;
  display: flex;
  font-size: 1.5rem;
  svg {
    font-size: 2rem;
  }
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const DetailBox = styled.div`
  width: 80%;
  margin-left: 20%;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
  background-color: #fafafa;
`;

const Detail = styled.div`
  padding: 0px 2%;
`;

const DetailHeader = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  color: black;
  div {
    width: 22%;
    min-width: 135px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: white;
    height: 15vh;
    padding: 1%;
    margin-top: 2%;
    p {
      margin-bottom: 5%;
    }
    p:first-child {
      width: 100%;
    }
    p:nth-child(2) {
      width: 100%;
      text-align: right;
      font-weight: 700;
      font-size: 1.8rem;
      @media screen and (max-width: 1024px) {
        font-size: 1.5rem;
      }
      @media screen and (max-width: 768px) {
        font-size: 1rem;
      }
    }
    p:last-child {
      width: 100%;
      text-align: right;
      font-weight: 400;
      font-size: 1rem;
      @media screen and (max-width: 1024px) {
        font-size: 1rem;
      }
      @media screen and (max-width: 768px) {
        font-size: 0.8rem;
      }
    }
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 10vh;
  margin: 1% 0px;
  padding: 0 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 1.5rem;
`;

const FunBox = styled.div`
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
    height: 90%;
    grid-template-columns: repeat(11, 1fr);
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

const Pagenation = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    border: none;
    background-color: inherit;
    cursor: pointer;
    font-size: 1.5rem;
    margin: 0 5%;
    padding: 0 10%;
    svg {
      font-size: 1.2rem;
    }
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function Fun() {
  const [page, setPage] = useState("1");
  const handlePageClick = (e) => {
    const { value } = e.target;
    setPage((page) => (page = value));
    return;
  };
  return (
    <Container>
      <DetailBox>
        <Nav />
        <Detail>
          <DetailHeader>
            <div>
              <p>Total Fun</p>
              <p>21,000,081</p>
              <p>+1,008 (7days)</p>
            </div>
            <div>
              <p>이미지</p>
              <p>21,000,081</p>
              <p>+1,008 (7days)</p>
            </div>
            <div>
              <p>GIF</p>
              <p>21,000,081</p>
              <p>+1,008 (7days)</p>
            </div>
            <div>
              <p>신고</p>
              <p>21,000,081</p>
              <p>+1,008 (7days)</p>
            </div>
          </DetailHeader>
          <SearchInput placeholder="Search"></SearchInput>
          <FunBox>
            <div>FUN</div>
            <div>
              <div>
                <h1>NO</h1>
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
                <div>24</div>
                <div>134</div>
                <div>24</div>
                <div>253</div>
                <div>550</div>
                <div>1</div>
                <div>14</div>
                <div>12</div>
              </div>
              <div>
                <h1>누적리워드</h1>
                <div>620</div>
                <div>80</div>
                <div>230</div>
                <div>10</div>
                <div>62</div>
                <div>60</div>
                <div>30</div>
                <div>52</div>
              </div>
              <div>
                <h1>좋아요</h1>
                <div>20</div>
                <div>42</div>
                <div>2</div>
                <div>3</div>
                <div>40</div>
                <div>610</div>
                <div>2</div>
                <div>10</div>
              </div>
              <div>
                <h1>공유</h1>
                <div>11</div>
                <div>24</div>
                <div>2</div>
                <div>130</div>
                <div>624</div>
                <div>22</div>
                <div>3</div>
                <div>10</div>
              </div>
              <div>
                <h1>댓글</h1>
                <div>140</div>
                <div>23</div>
                <div>44</div>
                <div>23</div>
                <div>50</div>
                <div>20</div>
                <div>10</div>
                <div>0</div>
              </div>
              <div>
                <h1>신고</h1>
                <div>610</div>
                <div>20</div>
                <div>43</div>
                <div>6</div>
                <div>0</div>
                <div>0</div>
                <div>15</div>
                <div>2</div>
              </div>
              <div>
                <h1>내용</h1>
                <div>10</div>
                <div>230</div>
                <div>23</div>
                <div>42</div>
                <div>605</div>
                <div>240</div>
                <div>24</div>
                <div>3</div>
              </div>
            </div>
            <Pagenation>
              <div>
                <button>
                  <IoIosArrowBack />
                </button>
                <button
                  onClick={handlePageClick}
                  value="1"
                  style={
                    page === "1"
                      ? {
                          color: "#ffc000",
                          border: "1px solid #ffc000",
                          borderRadius: "50%",
                        }
                      : { color: "black" }
                  }
                >
                  1
                </button>
                <button
                  onClick={handlePageClick}
                  value="2"
                  style={
                    page === "2"
                      ? {
                          color: "#ffc000",
                          border: "1px solid #ffc000",
                          borderRadius: "50%",
                        }
                      : { color: "black" }
                  }
                >
                  2
                </button>
                <button
                  onClick={handlePageClick}
                  value="3"
                  style={
                    page === "3"
                      ? {
                          color: "#ffc000",
                          border: "1px solid #ffc000",
                          borderRadius: "50%",
                        }
                      : { color: "black" }
                  }
                >
                  3
                </button>
                <button
                  onClick={handlePageClick}
                  value="4"
                  style={
                    page === "4"
                      ? {
                          color: "#ffc000",
                          border: "1px solid #ffc000",
                          borderRadius: "50%",
                        }
                      : { color: "black" }
                  }
                >
                  4
                </button>
                <button
                  onClick={handlePageClick}
                  value="5"
                  style={
                    page === "5"
                      ? {
                          color: "#ffc000",
                          border: "1px solid #ffc000",
                          borderRadius: "50%",
                        }
                      : { color: "black" }
                  }
                >
                  5
                </button>
                <button>
                  <IoIosArrowForward />
                </button>
              </div>
            </Pagenation>
          </FunBox>
        </Detail>
      </DetailBox>
    </Container>
  );
}

export default Fun;
