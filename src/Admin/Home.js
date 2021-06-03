import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsPeopleCircle } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import Chart from "react-apexcharts";

const Container = styled.div`
  width: 100%;
  height: 100vh;
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
  margin-top: 6%;

  img {
    width: 35%;
  }
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  color: #4f4f4f;
  font-size: 3rem;
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

const Detail = styled.div``;

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
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 15px;
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

function Home() {
  const [openBar, setOpenBar] = useState(false);
  const [dayTerm, setDayTerm] = useState([]);
  let today = new Date();

  useEffect(() => {
    for (let i = 0; i < 15; i++) {
      var afterDay = new Date(today.setDate(today.getDate() + 1));
      let afterDayMonth = afterDay.getMonth() + 1;
      let afterDayDate = afterDay.getDate();
      setDayTerm([dayTerm.push(`${afterDayMonth}.${afterDayDate}`)]);
    }
    console.log(dayTerm);
  }, []);
  const [options, setOptions] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
  });

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
            <ItemHeadLink>
              <span>PICK</span>
            </ItemHeadLink>
            <ul>
              <li>- 전체</li>
              <li>- 승인대기</li>
              <li>- 거절</li>
            </ul>
          </Item>

          <Item>
            <ItemHeadLink>
              <span>FUN</span>
            </ItemHeadLink>
            <ul>
              <li>- 전체</li>
              <li>- 신고확인대기</li>
            </ul>
          </Item>

          <Item>
            <ItemHeadLink>
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
            <Link>
              <BsPeopleCircle />
            </Link>
            <Link>
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
          <Chart
            options={options.options}
            series={options.series}
            type="bar"
            width="500"
          />
        </Detail>
      </DetailBox>
    </Container>
  );
}

export default Home;
