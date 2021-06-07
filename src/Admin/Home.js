import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsPeopleCircle, BsFiles } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import Chart from "react-apexcharts";
import { Overlay } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IoIosArrowForward } from "react-icons/io";

const Container = styled.div`
  width: 100%;
  display: flex;
  font-size: 1.5rem;
  svg {
    font-size: 2rem;
  }
  @media screen and (max-width: 1024px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    svg {
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 420px) {
    font-size: 1.2rem;
    svg {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 320px) {
    font-size: 1rem;
    svg {
      font-size: 1.2rem;
    }
  }
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const MenuBar = styled.div`
  width: 20%;
  height: 100vh;
  position: fixed;
  /* overflow: scroll; */
  top: 0;
  bottom: 0;
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 320px) {
    display: none;
  }
`;

const ImgBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;

  img {
    width: 35%;
    margin-bottom: 3%;
  }
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  color: #4f4f4f;
  font-size: 2.5rem;
  font-family: "yg-jalnan";
  @media screen and (max-width: 1024px) {
    font-size: 2rem;
  }
  margin: 1.5% 0px;
`;

const MenuItemBox = styled.div`
  width: 100%;
  height: 200vh;
  color: black;
  padding-top: 8%;
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

const Nav = styled.div`
  width: 100%;
  height: 8vh;
  background-color: #ffc000;
  display: flex;
  justify-content: space-between;
  padding: 0 5%;
`;

const NavBurgerBtn = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  align-items: center;
  color: black;
  svg {
    display: none;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      display: inline;
    }
    @media screen and (max-width: 320px) {
    }
  }
`;

const NavItemBtn = styled.div`
  width: 12%;
  @media screen and (max-width: 1024px) {
    width: 20%;
  }
  @media screen and (max-width: 768px) {
    width: 25%;
  }

  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: black;
  svg {
    margin: 0 8%;
  }
`;

const Detail = styled.div`
  padding: 1% 2%;
`;

const ItemHeadLink = styled(Link)`
  width: 100%;
  height: 100px;
  margin-bottom: 5%;
`;

const Item = styled.div`
  margin-bottom: 8%;
  padding-left: 20%;
  width: 100%;
  ul {
    margin: 5%;
  }
  li {
    margin: 8% 0px;
  }
`;

const DetailHeader = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  color: black;
  div {
    width: 22%;
    min-width: 135px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: white;
    height: 15vh;
    padding: 1%;
    margin-top: 3%;
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

const ChartBox = styled.div`
  display: flex;
`;

const BarChartStyle = styled(Chart)`
  height: 100%;
`;

const PieChartStyle = styled(Chart)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const BarChartBox = styled.div`
  color: black;
  width: 100%;
  margin: 2% 0;
  margin-right: 2%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  > div:first-child {
    width: 100%;
    padding: 10px 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const PieChartBox = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 2% 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  > div:first-child {
    width: 100%;
    padding: 10px 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const WalletBox = styled.div`
  width: 100%;
  height: 50vh;
  color: black;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div:first-child {
    width: 100%;
    padding: 10px 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const WalletDescBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > div:first-child {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    height: 15%;
    padding-left: 15px;
    padding-right: 40px;
  }

  > a {
    height: 10%;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0 15px;
  }
`;

const MainDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1rem;
  height: 75%;
  padding: 15px;
  span:first-child {
    width: 150px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const AllDescLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const PickFunBox = styled.div`
  width: 100%;
  height: 50vh;
  margin: 2% 0;
  display: flex;
  color: black;
`;

const PickBox = styled.div`
  width: 30%;
  height: 100%;
  margin-right: 2%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  > div:first-child {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    height: 15%;
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

const FunBox = styled.div`
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
  > div:last-child {
    height: 10%;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

function Home() {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const walletRef = useRef(null);
  const [openBar, setOpenBar] = useState(false);
  const [barOptions, setBarOptions] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["0"],
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
        },
      },
    },
    series: [
      {
        name: "지갑 생성",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "픽 생성",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "FUN 생성",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
  });
  const [pieOptions, setPieOptions] = useState({
    options: {
      labels: ["PNT 보유량", "PNT 교환량", "PNT 충전량"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: "bottom",
      },
    },
    series: [44, 55, 80],
  });

  useEffect(() => {
    const calday = async () => {
      let today = new Date();
      let initDay = new Date(today.setDate(today.getDate() - 14));
      let initMonth = initDay.getMonth() + 1;
      let initDayDate = initDay.getDate();
      let newDay = [`${initMonth}.${initDayDate}`];

      for (let i = 0; i < 14; i++) {
        let afterDay = new Date(today.setDate(today.getDate() + 1));
        let afterDayMonth = afterDay.getMonth() + 1;
        let afterDayDate = afterDay.getDate();
        newDay.push(`${afterDayMonth}.${afterDayDate}`);
      }
      setBarOptions((options) => ({
        ...options,
        options: {
          xaxis: { categories: newDay },
        },
      }));
    };
    calday();
  }, []);

  // useEffect(() => {
  //   setPieOptions((options) => ({
  //     ...options,
  //     series: [{ data: 14, name: "hi" }],
  //     labels:[]
  //   }));

  // }, []);

  const handleBurger = () => {
    if (openBar) {
      setOpenBar(true);
      return;
    }
    setOpenBar(false);
    return;
  };

  return (
    <Container>
      <MenuBar>
        <ImgBox>
          <img src={logo} alt="logo" />
        </ImgBox>
        <Title>PICK n PICK</Title>
        <MenuItemBox>
          <Item>
            <ItemHeadLink to="/adminhome">
              <span>대시보드</span>
            </ItemHeadLink>
          </Item>

          <Item>
            <ItemHeadLink to="/adminhome">
              <span>PICK</span>
            </ItemHeadLink>
            <ul>
              <li>- 전체</li>
              <li>- 승인대기</li>
              <li>- 거절</li>
            </ul>
          </Item>

          <Item>
            <ItemHeadLink to="/adminhome">
              <span>FUN</span>
            </ItemHeadLink>
            <ul>
              <li>- 전체</li>
              <li>- 신고확인대기</li>
            </ul>
          </Item>

          <Item>
            <ItemHeadLink to="/adminhome">
              <span>토큰관리</span>
            </ItemHeadLink>
            <ul>
              <li>- 전체지갑</li>
              <li>- 전체내역</li>
              <li>- 교환내역</li>
              <li>- 충전내역</li>
            </ul>
          </Item>
        </MenuItemBox>
      </MenuBar>
      <DetailBox>
        <Nav>
          <NavBurgerBtn>
            <GiHamburgerMenu onClick={handleBurger} />
          </NavBurgerBtn>
          <NavItemBtn>
            <Link to="adinmhome">
              <BsPeopleCircle />
            </Link>
            <Link to="adinmhome">
              <HiOutlineLogout />
            </Link>
          </NavItemBtn>
        </Nav>
        <Detail>
          <DetailHeader>
            <div>
              <p>Total Wallet</p>
              <p>21,000,081</p>
              <p>+1,008 (7days)</p>
            </div>
            <div>
              <p>Total Token</p>
              <p>21,000,081</p>
              <p>+1,008 (7days)</p>
            </div>
            <div>
              <p>Total Pick</p>
              <p>21,000,081</p>
              <p>+1,008 (7days)</p>
            </div>
            <div>
              <p>Total Fun</p>
              <p>21,000,081</p>
              <p>+1,008 (7days)</p>
            </div>
          </DetailHeader>

          <ChartBox>
            <BarChartBox>
              <div>15일간 데이터</div>
              <BarChartStyle
                options={barOptions.options}
                series={barOptions.series}
                type="bar"
                width="950"
                height="500"
              />
            </BarChartBox>

            <PieChartBox>
              <div>PNT</div>
              <PieChartStyle
                options={pieOptions.options}
                series={pieOptions.series}
                type="donut"
                width="450"
              />
            </PieChartBox>
          </ChartBox>

          <WalletBox>
            <div>월렛</div>
            <WalletDescBox>
              <div>
                <span style={{ width: "12%" }}>지갑주소</span>
                <span style={{ width: "14%" }}>일자</span>
                <span style={{ width: "11%" }}>타입</span>
                <span style={{ width: "15%" }}>보유PNT</span>
                <span style={{ width: "14%" }}>교환횟수</span>
                <span style={{ width: "13%" }}>닉네임</span>
                <span style={{ width: "16%" }}>추천인코드</span>
                <span style={{ width: "5%" }}>계정상태</span>
              </div>

              <MainDesc>
                <div>
                  <Overlay
                    target={target.current}
                    show={show}
                    placement="right"
                  >
                    {({
                      placement,
                      arrowProps,
                      show: _show,
                      popper,
                      delay,
                      ...props
                    }) => (
                      <div
                        {...props}
                        style={{
                          backgroundColor: "#0061ff",
                          padding: "2px 10px",
                          color: "white",
                          fontFamily: "Arial, Helvetica, sans-serif",
                          borderRadius: 3,
                          ...props.style,
                        }}
                      >
                        클립보드에 복사되었습니다
                      </div>
                    )}
                  </Overlay>
                  <div
                    style={{
                      display: "inline-block",
                      position: "relative",
                      marginRight: "2%",
                    }}
                  >
                    <span ref={walletRef}>SW5q12x363sa6c0asdascx</span>
                    <CopyToClipboard text={walletRef.current?.textContent}>
                      <span
                        style={{
                          position: "absolute",
                          cursor: "pointer",
                          right: "-15%",
                        }}
                        ref={target}
                        onClick={() => {
                          setTimeout(() => setShow(true), 100);
                          setTimeout(() => setShow(false), 700);
                        }}
                      >
                        <BsFiles style={{ height: "0.5em" }} />
                      </span>
                    </CopyToClipboard>
                  </div>
                  <span style={{ marginRight: "5%" }}>2021-06-03 04:04</span>
                  <span style={{ marginRight: "11%" }}>연동</span>
                  <span style={{ marginRight: "14%" }}>5</span>
                  <span style={{ marginRight: "10.8%" }}>0</span>
                  <span style={{ marginRight: "9.5%" }}>0805네임</span>
                  <span style={{ marginRight: "11.5%" }}>eaka685s</span>
                  <span>active</span>
                </div>
                <div>
                  <div
                    style={{
                      display: "inline-block",
                      marginRight: "2%",
                      position: "relative",
                    }}
                  >
                    <span ref={walletRef}>SW5q12x363sa6c0asdascx</span>
                    <CopyToClipboard text={walletRef.current?.textContent}>
                      <span
                        style={{
                          position: "absolute",
                          cursor: "pointer",
                          right: "-15%",
                        }}
                        ref={target}
                        onClick={() => {
                          setTimeout(() => setShow(true), 100);
                          setTimeout(() => setShow(false), 700);
                        }}
                      >
                        <BsFiles style={{ height: "0.5em" }} />
                      </span>
                    </CopyToClipboard>
                  </div>
                  <span style={{ marginRight: "5%" }}>2021-06-03 04:04</span>
                  <span style={{ marginRight: "11%" }}>연동</span>
                  <span style={{ marginRight: "14%" }}>5</span>
                  <span style={{ marginRight: "10.8%" }}>0</span>
                  <span style={{ marginRight: "9.5%" }}>0805네임</span>
                  <span style={{ marginRight: "11.5%" }}>eaka685s</span>
                  <span>active</span>
                </div>
                <div>
                  <div
                    style={{
                      display: "inline-block",
                      marginRight: "2%",
                      position: "relative",
                    }}
                  >
                    <span ref={walletRef}>SW5q12x363sa6c0asdascx</span>
                    <CopyToClipboard text={walletRef.current?.textContent}>
                      <span
                        style={{
                          position: "absolute",
                          cursor: "pointer",
                          right: "-15%",
                        }}
                        ref={target}
                        onClick={() => {
                          setTimeout(() => setShow(true), 100);
                          setTimeout(() => setShow(false), 700);
                        }}
                      >
                        <BsFiles style={{ height: "0.5em" }} />
                      </span>
                    </CopyToClipboard>
                  </div>
                  <span style={{ marginRight: "5%" }}>2021-06-03 04:04</span>
                  <span style={{ marginRight: "11%" }}>연동</span>
                  <span style={{ marginRight: "14%" }}>5</span>
                  <span style={{ marginRight: "10.8%" }}>0</span>
                  <span style={{ marginRight: "9.5%" }}>0805네임</span>
                  <span style={{ marginRight: "11.5%" }}>eaka685s</span>
                  <span>active</span>
                </div>
                <div>
                  <div
                    style={{
                      display: "inline-block",
                      marginRight: "2%",
                      position: "relative",
                    }}
                  >
                    <span ref={walletRef}>SW5q12x363sa6c0asdascx</span>
                    <CopyToClipboard text={walletRef.current?.textContent}>
                      <span
                        style={{
                          position: "absolute",
                          cursor: "pointer",
                          right: "-15%",
                        }}
                        ref={target}
                        onClick={() => {
                          setTimeout(() => setShow(true), 100);
                          setTimeout(() => setShow(false), 700);
                        }}
                      >
                        <BsFiles style={{ height: "0.5em" }} />
                      </span>
                    </CopyToClipboard>
                  </div>
                  <span style={{ marginRight: "5%" }}>2021-06-03 04:04</span>
                  <span style={{ marginRight: "11%" }}>연동</span>
                  <span style={{ marginRight: "14%" }}>5</span>
                  <span style={{ marginRight: "10.8%" }}>0</span>
                  <span style={{ marginRight: "9.5%" }}>0805네임</span>
                  <span style={{ marginRight: "11.5%" }}>eaka685s</span>
                  <span>active</span>
                </div>
                <div>
                  <div
                    style={{
                      display: "inline-block",
                      marginRight: "2%",
                      position: "relative",
                    }}
                  >
                    <span ref={walletRef}>SW5q12x363sa6c0asdascx</span>
                    <CopyToClipboard text={walletRef.current?.textContent}>
                      <span
                        style={{
                          position: "absolute",
                          cursor: "pointer",
                          right: "-15%",
                        }}
                        ref={target}
                        onClick={() => {
                          setTimeout(() => setShow(true), 100);
                          setTimeout(() => setShow(false), 700);
                        }}
                      >
                        <BsFiles style={{ height: "0.5em" }} />
                      </span>
                    </CopyToClipboard>
                  </div>
                  <span style={{ marginRight: "5%" }}>2021-06-03 04:04</span>
                  <span style={{ marginRight: "11%" }}>연동</span>
                  <span style={{ marginRight: "14%" }}>5</span>
                  <span style={{ marginRight: "10.8%" }}>0</span>
                  <span style={{ marginRight: "9.5%" }}>0805네임</span>
                  <span style={{ marginRight: "11.5%" }}>eaka685s</span>
                  <span>active</span>
                </div>
                <div>
                  <div
                    style={{
                      display: "inline-block",
                      marginRight: "2%",
                      position: "relative",
                    }}
                  >
                    <span ref={walletRef}>SW5q12x363sa6c0asdascx</span>
                    <CopyToClipboard text={walletRef.current?.textContent}>
                      <span
                        style={{
                          position: "absolute",
                          cursor: "pointer",
                          right: "-15%",
                        }}
                        ref={target}
                        onClick={() => {
                          setTimeout(() => setShow(true), 100);
                          setTimeout(() => setShow(false), 700);
                        }}
                      >
                        <BsFiles style={{ height: "0.5em" }} />
                      </span>
                    </CopyToClipboard>
                  </div>
                  <span style={{ marginRight: "5%" }}>2021-06-03 04:04</span>
                  <span style={{ marginRight: "11%" }}>연동</span>
                  <span style={{ marginRight: "14%" }}>5</span>
                  <span style={{ marginRight: "10.8%" }}>0</span>
                  <span style={{ marginRight: "9.5%" }}>0805네임</span>
                  <span style={{ marginRight: "10%" }}>eaka685s</span>
                  <span>정지(신고)</span>
                </div>
                <div>
                  <div
                    style={{
                      display: "inline-block",
                      marginRight: "2%",
                      position: "relative",
                    }}
                  >
                    <span ref={walletRef}>SW5q12x363sa6c0asdascx</span>
                    <CopyToClipboard text={walletRef.current?.textContent}>
                      <span
                        style={{
                          position: "absolute",
                          cursor: "pointer",
                          right: "-15%",
                        }}
                        ref={target}
                        onClick={() => {
                          setTimeout(() => setShow(true), 100);
                          setTimeout(() => setShow(false), 700);
                        }}
                      >
                        <BsFiles style={{ height: "0.5em" }} />
                      </span>
                    </CopyToClipboard>
                  </div>
                  <span style={{ marginRight: "5%" }}>2021-06-03 04:04</span>
                  <span style={{ marginRight: "11%" }}>연동</span>
                  <span style={{ marginRight: "14%" }}>5</span>
                  <span style={{ marginRight: "10.8%" }}>0</span>
                  <span style={{ marginRight: "9.5%" }}>0805네임</span>
                  <span style={{ marginRight: "11.5%" }}>eaka685s</span>
                  <span>active</span>
                </div>
                <div>
                  <div
                    style={{
                      display: "inline-block",
                      marginRight: "2%",
                      position: "relative",
                    }}
                  >
                    <span ref={walletRef}>SW5q12x363sa6c0asdascx</span>
                    <CopyToClipboard text={walletRef.current?.textContent}>
                      <span
                        style={{
                          position: "absolute",
                          cursor: "pointer",
                          right: "-15%",
                        }}
                        ref={target}
                        onClick={() => {
                          setTimeout(() => setShow(true), 100);
                          setTimeout(() => setShow(false), 700);
                        }}
                      >
                        <BsFiles style={{ height: "0.5em" }} />
                      </span>
                    </CopyToClipboard>
                  </div>
                  <span style={{ marginRight: "5%" }}>2021-06-03 04:04</span>
                  <span style={{ marginRight: "11%" }}>연동</span>
                  <span style={{ marginRight: "14%" }}>5</span>
                  <span style={{ marginRight: "10.8%" }}>0</span>
                  <span style={{ marginRight: "9.5%" }}>0805네임</span>
                  <span style={{ marginRight: "11.5%" }}>eaka685s</span>
                  <span>active</span>
                </div>
              </MainDesc>
              <AllDescLink>
                <span>view all</span>
                <IoIosArrowForward />
              </AllDescLink>
            </WalletDescBox>
          </WalletBox>
          <PickFunBox>
            <PickBox>
              <div>
                <span>PICK</span>
                <span>승인요청</span>
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
            <FunBox>
              <div></div>
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
                  <div
                    style={{
                      position: "relative",
                    }}
                  >
                    <span ref={walletRef}>SW5q12x363sa6c0asdascx</span>
                    <CopyToClipboard text={walletRef.current?.textContent}>
                      <span
                        style={{
                          position: "absolute",
                          cursor: "pointer",
                          right: "-10%",
                        }}
                        ref={target}
                        onClick={() => {
                          setTimeout(() => setShow(true), 100);
                          setTimeout(() => setShow(false), 700);
                        }}
                      >
                        <BsFiles style={{ height: "0.5em" }} />
                      </span>
                    </CopyToClipboard>
                  </div>
                  <div
                    style={{
                      position: "relative",
                    }}
                  >
                    <span ref={walletRef}>SW5q12x363sa6c0asdascx</span>
                    <CopyToClipboard text={walletRef.current?.textContent}>
                      <span
                        style={{
                          position: "absolute",
                          cursor: "pointer",
                          right: "-10%",
                        }}
                        ref={target}
                        onClick={() => {
                          setTimeout(() => setShow(true), 100);
                          setTimeout(() => setShow(false), 700);
                        }}
                      >
                        <BsFiles style={{ height: "0.5em" }} />
                      </span>
                    </CopyToClipboard>
                  </div>
                  <div
                    style={{
                      position: "relative",
                    }}
                  >
                    <span ref={walletRef}>SW5q12x363sa6c0asdascx</span>
                    <CopyToClipboard text={walletRef.current?.textContent}>
                      <span
                        style={{
                          position: "absolute",
                          cursor: "pointer",
                          right: "-10%",
                        }}
                        ref={target}
                        onClick={() => {
                          setTimeout(() => setShow(true), 100);
                          setTimeout(() => setShow(false), 700);
                        }}
                      >
                        <BsFiles style={{ height: "0.5em" }} />
                      </span>
                    </CopyToClipboard>
                  </div>
                  <div
                    style={{
                      position: "relative",
                    }}
                  >
                    <span ref={walletRef}>SW5q12x363sa6c0asdascx</span>
                    <CopyToClipboard text={walletRef.current?.textContent}>
                      <span
                        style={{
                          position: "absolute",
                          cursor: "pointer",
                          right: "-10%",
                        }}
                        ref={target}
                        onClick={() => {
                          setTimeout(() => setShow(true), 100);
                          setTimeout(() => setShow(false), 700);
                        }}
                      >
                        <BsFiles style={{ height: "0.5em" }} />
                      </span>
                    </CopyToClipboard>
                  </div>
                  <div
                    style={{
                      position: "relative",
                    }}
                  >
                    <span ref={walletRef}>SW5q12x363sa6c0asdascx</span>
                    <CopyToClipboard text={walletRef.current?.textContent}>
                      <span
                        style={{
                          position: "absolute",
                          cursor: "pointer",
                          right: "-10%",
                        }}
                        ref={target}
                        onClick={() => {
                          setTimeout(() => setShow(true), 100);
                          setTimeout(() => setShow(false), 700);
                        }}
                      >
                        <BsFiles style={{ height: "0.5em" }} />
                      </span>
                    </CopyToClipboard>
                  </div>
                  <div
                    style={{
                      position: "relative",
                    }}
                  >
                    <span ref={walletRef}>SW5q12x363sa6c0asdascx</span>
                    <CopyToClipboard text={walletRef.current?.textContent}>
                      <span
                        style={{
                          position: "absolute",
                          cursor: "pointer",
                          right: "-10%",
                        }}
                        ref={target}
                        onClick={() => {
                          setTimeout(() => setShow(true), 100);
                          setTimeout(() => setShow(false), 700);
                        }}
                      >
                        <BsFiles style={{ height: "0.5em" }} />
                      </span>
                    </CopyToClipboard>
                  </div>
                  <div
                    style={{
                      position: "relative",
                    }}
                  >
                    <span ref={walletRef}>SW5q12x363sa6c0asdascx</span>
                    <CopyToClipboard text={walletRef.current?.textContent}>
                      <span
                        style={{
                          position: "absolute",
                          cursor: "pointer",
                          right: "-10%",
                        }}
                        ref={target}
                        onClick={() => {
                          setTimeout(() => setShow(true), 100);
                          setTimeout(() => setShow(false), 700);
                        }}
                      >
                        <BsFiles style={{ height: "0.5em" }} />
                      </span>
                    </CopyToClipboard>
                  </div>
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
              <div></div>
            </FunBox>
          </PickFunBox>
        </Detail>
      </DetailBox>
    </Container>
  );
}

export default Home;
