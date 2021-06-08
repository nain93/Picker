import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import logo from "../../img/logo.png";

const Container = styled.div`
  width: 20%;
  position: fixed;
  overflow-y: scroll;
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
  color: black;
  padding-top: 8%;
`;

const ItemHead = styled.div`
  width: 100%;
  border-radius: 10px;
  a {
    height: 6vh;
    display: flex;
    align-items: center;
    border-radius: 15px;
    background-color: ${(props) => (props.current ? "#ee6a27" : "white")};
    color: ${(props) => (props.current ? "white" : "black")};
    padding: 5px;
  }
`;

const Item = styled.div`
  margin-bottom: 2%;
  padding-left: 20%;
  width: 100%;
  ul {
    margin: 3%;
  }
`;

function SideMenuBar() {
  const { pathname } = useLocation();

  return (
    <Container>
      <ImgBox>
        <img src={logo} alt="logo" />
      </ImgBox>
      <Title>PICK n PICK</Title>
      <MenuItemBox>
        <Item>
          <ItemHead current={pathname === "/admin"}>
            <Link to="/admin">
              <span>대시보드</span>
            </Link>
          </ItemHead>
        </Item>

        <Item>
          <ItemHead>
            <Link to="/admin/pick">
              <span>PICK</span>
            </Link>
          </ItemHead>
          <ul>
            <ItemHead current={pathname.includes("/admin/pick")}>
              <Link to="/admin/pick">- 전체</Link>
            </ItemHead>
            <ItemHead>
              <Link>- 승인대기</Link>
            </ItemHead>
            <ItemHead>
              <Link>- 거절</Link>
            </ItemHead>
          </ul>
        </Item>

        <Item>
          <ItemHead>
            <Link to="/admin/fun">
              <span>FUN</span>
            </Link>
          </ItemHead>
          <ul>
            <ItemHead current={pathname === "/admin/fun"}>
              <Link to="/admin/fun">- 전체</Link>
            </ItemHead>
            <ItemHead>
              <Link>- 신고확인대기</Link>
            </ItemHead>
          </ul>
        </Item>

        <Item>
          <ItemHead>
            <Link to="/admin/token">
              <span>토큰관리</span>
            </Link>
          </ItemHead>
          <ul>
            <ItemHead current={pathname === "/admin/token"}>
              <Link to="/admin/token">- 전체지갑</Link>
            </ItemHead>
            <ItemHead>
              <Link>- 전체내역</Link>
            </ItemHead>
            <ItemHead>
              <Link>- 교환내역</Link>
            </ItemHead>
            <ItemHead>
              <Link>- 충전내역</Link>
            </ItemHead>
          </ul>
        </Item>
      </MenuItemBox>
    </Container>
  );
}

export default SideMenuBar;
