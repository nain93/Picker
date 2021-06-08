import React, { useState } from "react";
import styled from "styled-components";
import Nav from "../Dashboard/Nav";
// import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
import OverRay from "../Components/OverRay";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { initialData } from "../../data/initialData";

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

const ItemBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 5%;
  grid-column-gap: 3%;
  width: 100%;
  height: 90vh;
  color: black;
  > div {
    border: 1px solid black;
  }
`;

const Item = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
  div {
  }
`;

const ItemHeader = styled.div`
  height: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div:first-child {
    width: 80px;
    height: 80px;
    border-radius: 15px;
    background-color: gray;
    background-position: center center;
    background-size: cover;
    margin-bottom: 2%;
  }
  > div:last-child {
    height: 100%;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    div {
      border-radius: 20px;
      height: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      color: white;
    }
    a {
      background-color: #fee000;
      border-radius: 20px;
      height: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
    }
  }
`;

const Status = styled.div`
  background-color: ${(props) => {
    if (props.current === "승인대기") {
      return "#1cac48";
    } else if (props.current === "진행중") {
      return "#0021FF";
    } else if (props.current === "종료") {
      return "#B6B6B6";
    }
    return "#FF3300";
  }};
`;

const ItemBody = styled.div`
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  > div:last-child {
    span:first-child {
      width: 150px;
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 1rem;
    }
  }
  > div:first-child {
    display: flex;
    flex-direction: column;
    span:first-child {
      margin-bottom: 3%;
    }
    span:last-child {
      font-size: 1rem;
    }
  }
`;

const ItemFooter = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
  div {
    width: 100%;
    button {
      border: none;
      background-color: black;
      color: white;
      margin-right: 1%;
      border-radius: 10px;
      height: 4vh;
      width: 20%;
      cursor: pointer;
    }
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

function Pick() {
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
              <p>Total Pick</p>
              <p>21,000,081</p>
              <p>+1,008 (7days)</p>
            </div>
            <div>
              <p>승인대기</p>
              <p>21,000,081</p>
              <p>+1,008 (7days)</p>
            </div>
            <div>
              <p>진행</p>
              <p>21,000,081</p>
              <p>+1,008 (7days)</p>
            </div>
            <div>
              <p>종료</p>
              <p>21,000,081</p>
              <p>+1,008 (7days)</p>
            </div>
          </DetailHeader>
          <SearchInput placeholder="Search"></SearchInput>
          <ItemBox>
            {initialData.funItem1.result.map((item, idx) => (
              <Item key={idx}>
                <ItemHeader>
                  <div style={{ backgroundImage: `url(${item.img})` }}></div>
                  <div>
                    <Status current={item.status}>{item.status}</Status>
                    <Link to={`/admin/pick/${item.id}`}>자세히 보기</Link>
                  </div>
                </ItemHeader>
                <ItemBody>
                  <div>
                    <span>{item.title}</span>
                    <span>2021.06.03 04:04</span>
                  </div>
                  <OverRay right={"none"} />
                </ItemBody>
                <ItemFooter>
                  <div>
                    <button>공개</button>
                    <button>10개</button>
                    <button>스와이프</button>
                  </div>
                </ItemFooter>
              </Item>
            ))}

            <Item>
              <ItemHeader>
                <div></div>
                <div>
                  <div style={{ backgroundColor: "#0021FF" }}>진행중</div>
                  <Link to="/detail">자세히 보기</Link>
                </div>
              </ItemHeader>
              <ItemBody>
                <div>
                  <span>픽 제목</span>
                  <span>2021.06.03 04:04 ~ 2021.06.12 04:04</span>
                </div>
                <OverRay right={"none"} />
              </ItemBody>
              <ItemFooter>
                <div>
                  <button>비공개</button>
                  <button>10개</button>
                  <button>스와이프</button>
                </div>
              </ItemFooter>
            </Item>
            <Item>
              <ItemHeader>
                <div></div>
                <div>
                  <div style={{ backgroundColor: "#0021FF" }}>진행중</div>
                  <Link to="/detail">자세히 보기</Link>
                </div>
              </ItemHeader>
              <ItemBody>
                <div>
                  <span>픽 제목</span>
                  <span>2021.06.03 04:04 ~ 2021.06.12 04:04</span>
                </div>
                <OverRay right={"none"} />
              </ItemBody>
              <ItemFooter>
                <div>
                  <button>공개</button>
                  <button>10개</button>
                  <button>스와이프</button>
                </div>
              </ItemFooter>
            </Item>
            <Item>
              <ItemHeader>
                <div></div>
                <div>
                  <div style={{ backgroundColor: "#1cac48" }}>승인대기</div>
                  <Link to="/detail">자세히 보기</Link>
                </div>
              </ItemHeader>
              <ItemBody>
                <div>
                  <span>픽 제목</span>
                  <span>2021.06.03 04:04</span>
                </div>
                <OverRay right={"none"} />
              </ItemBody>
              <ItemFooter>
                <div>
                  <button>공개</button>
                  <button>10개</button>
                  <button>스와이프</button>
                </div>
              </ItemFooter>
            </Item>
            <Item>
              <ItemHeader>
                <div></div>
                <div>
                  <div style={{ backgroundColor: "#FF3300" }}>거절</div>
                  <Link to="/detail">자세히 보기</Link>
                </div>
              </ItemHeader>
              <ItemBody>
                <div>
                  <span>픽 제목</span>
                  <span>2021.06.03 04:04</span>
                </div>
                <OverRay right={"none"} />
              </ItemBody>
              <ItemFooter>
                <div>
                  <button>비공개</button>
                  <button>10개</button>
                  <button>스와이프</button>
                </div>
              </ItemFooter>
            </Item>

            <Item>
              <ItemHeader>
                <div></div>
                <div>
                  <div style={{ backgroundColor: "#B6B6B6" }}>종료</div>
                  <Link to="/detail">자세히 보기</Link>
                </div>
              </ItemHeader>
              <ItemBody>
                <div>
                  <span>픽 제목</span>
                  <span>2021.06.03 04:04 ~ 2021.06.12 04:04</span>
                </div>
                <OverRay right={"none"} />
              </ItemBody>
              <ItemFooter>
                <div>
                  <button>공개</button>
                  <button>10개</button>
                  <button>스와이프</button>
                </div>
              </ItemFooter>
            </Item>
          </ItemBox>
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
        </Detail>
      </DetailBox>
    </Container>
  );
}

export default Pick;
