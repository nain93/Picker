import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../img/logo.png";

const Container = styled.div`
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

function index() {
  return (
    <Container>
      <ImgBox>
        <img src={logo} alt="logo" />
      </ImgBox>
      <Title>PICK n PICK</Title>
      <MenuItemBox>
        <Item>
          <ItemHeadLink to="/admin">
            <span>대시보드</span>
          </ItemHeadLink>
        </Item>

        <Item>
          <ItemHeadLink to="/admin/pick">
            <span>PICK</span>
          </ItemHeadLink>
          <ul>
            <li>- 전체</li>
            <li>- 승인대기</li>
            <li>- 거절</li>
          </ul>
        </Item>

        <Item>
          <ItemHeadLink to="/admin">
            <span>FUN</span>
          </ItemHeadLink>
          <ul>
            <li>- 전체</li>
            <li>- 신고확인대기</li>
          </ul>
        </Item>

        <Item>
          <ItemHeadLink to="/admin">
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
    </Container>
  );
}

export default index;
