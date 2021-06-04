import React from "react";
import styled from "styled-components";
import Nav from "../Nav";
import { Link } from "react-router-dom";
import bannerImg from "../img/banner.png";
import crown from "../img/icon3.png";
import profile from "../img/result/result9.png";

const LongContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1.5rem;
  position: relative;

  @media screen and (max-width: 768px) {
    button {
      font-size: 1rem;
    }
    font-size: 1rem;
  }
  @media screen and (max-width: 320px) {
    button {
      font-size: 0.8rem;
    }
    font-size: 0.8rem;
  }
`;

const Container = styled.section`
  padding: 10px 20px;
`;

const ProfileBox = styled.div`
  color: #ffc000;
  margin: 5% 0px;
  display: flex;
`;

const ImgBox = styled.img`
  @media screen and (min-width: 0px) {
    width: 25%;
  }
  @media screen and (min-width: 320px) {
    width: 25%;
  }
  @media screen and (min-width: 768px) {
    width: 25%;
  }

  height: 90%;
  border-radius: 15px;
  object-fit: cover;
  margin-right: 5%;
`;

const ProfileDescBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  span:not(:last-child) {
    margin-bottom: 5%;
  }
  div {
    display: flex;
    align-items: center;
    img {
      width: 13%;
      margin-right: 3%;
    }
  }
`;

const GridBtnBox = styled.div`
  a {
    background-color: #ffc000;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  display: grid;
  height: 38vh;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10% 2%;
  > a:nth-child(4) {
    grid-row: 2;
    grid-column: 1/4;
  }
  > a:last-child {
    grid-row: 3;
    grid-column: 1/4;
  }
`;

const Divider = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  margin-top: 4%;
`;
//! page1 css

const BannerImgBox = styled.img`
  width: 100%;
  object-fit: cover;
`;

//! page2 css

const SettingLink = styled(Link)`
  border: none;
  margin: 3% 0px;

  background-color: inherit;
  width: 100%;
  color: #ffc000;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const OthersLinkBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 40vh;
  padding-bottom: 5%;
`;

const OthersLink = styled(Link)`
  background-color: #ffc000;
  height: 27%;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function My() {
  return (
    <>
      <LongContainer>
        <Nav />
        <Container>
          <ProfileBox>
            <ImgBox src={profile} alt="profile" />
            <ProfileDescBox>
              <span>빛나는 루카스</span>
              <span>SW1q2w3e...2q2w5e</span>
              <div>
                <img src={crown} alt="crown" />
                <span>120</span>
              </div>
            </ProfileDescBox>
          </ProfileBox>

          <GridBtnBox>
            <Link to="/my/exchange">
              <span>교환</span>
            </Link>
            <Link to="/my/charge">
              <span>충전</span>
            </Link>
            <Link to="/my/mydetail">
              <span>내역</span>
            </Link>
            <Link to="/my/mypick">
              <span>MY PICK</span>
            </Link>
            <Link to="/my/myfun">
              <span>MY FUN</span>
            </Link>
          </GridBtnBox>
        </Container>
        <Divider>
          <BannerImgBox src={bannerImg} alt="banner" />
        </Divider>
        <Container>
          <SettingLink>설정</SettingLink>
          <OthersLinkBox>
            <OthersLink>공지 사항</OthersLink>
            <OthersLink>이용 약관</OthersLink>
            <OthersLink>FAQ / 문의</OthersLink>
          </OthersLinkBox>
        </Container>
      </LongContainer>
    </>
  );
}

export default My;
