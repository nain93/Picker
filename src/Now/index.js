import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Nav from "../Nav";
import { BiShare } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import bannerImg from "../img/banner.png";
import { noticeApi } from "../apis/api";
import { initialData } from "../data/initialData";

const LongContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1.5rem;
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
  padding: 0 20px;
`;

const Title = styled.h1`
  color: black;

  margin: 10% 0px;
`;

const MainBox = styled.div``;

const MainContent = styled.div`
  height: 30vh;
  border-radius: 15px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  background-image: url(${(props) => props.bgurl});
  background-position: center center;
  background-size: cover;
`;

const MainDesc = styled.div`
  width: 100%;
  height: 35%;
  @media screen and (max-width: 320px) {
    height: auto;
  }
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 0 0 15px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  padding: 10px 4%;
  bottom: 0;
  span,
  svg {
    margin: 7px 0;
    margin-right: 7px;
  }
  > div {
    display: flex;
  }
`;

const OtherContentBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  flex-wrap: wrap;
`;

const OtherContentLink = styled(Link)`
  margin-top: 5%;
  border-radius: 15px;
  width: 48%;
  height: 30vh;
  background-image: url(${(props) => props.bgurl});
  background-position: center center;
  background-size: cover;
`;

const OtherDesc = styled.div`
  width: 48%;
  height: 35%;
  @media screen and (max-width: 720px) {
    height: auto;
  }

  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 0 0 15px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  bottom: 0;
  padding: 10px 3%;
  span,
  svg {
    margin: 5px 0;
    margin-right: 5px;
  }
  > div {
    display: flex;
  }
`;

const BtnBox = styled.div`
  width: 100%;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MorePickBtn = styled.button`
  border: 1px solid #fc913a;
  border-radius: 15px;
  color: #fc913a;
  width: 70%;
  @media screen and (max-width: 320px) {
    width: 80%;
  }
  height: 5vh;
  background-color: white;
  cursor: pointer;
  margin: 5% 0px;
  font-weight: 600;
  font-size: 1.2rem;
  grid-column: 1;
  @media screen and (max-width: 320px) {
    font-size: small;
  }
`;

const Divider = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`;
//! page1 css

const ImgBox = styled.img`
  width: 100%;
  object-fit: cover;
`;

const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
`;

const MenuBtn = styled.button`
  color: white;
  font-weight: 600;
  font-size: 1.2rem;
  margin-right: 3%;
  background-color: #ffc000;
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  @media screen and (max-width: 320px) {
    margin-right: 0;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const GridContainer = styled.div`
  display: grid;
  color: black;
  grid-template-columns: repeat(2, minmax(120px, 1fr));
  grid-template-rows: repeat(4);
  gap: 15px;
  @media screen and (max-width: 320px) {
    gap: 2px;
  }
  margin-top: 40px;
  a {
    background-image: url(${(props) => props.bgurl});
    border-radius: 15px;

    background-position: center center;
    background-size: cover;
  }
  > a div:nth-child(2n-1) {
    /* position: relative; */
    min-height: 250px;
  }
  > a:nth-child(3) {
    grid-row: 1;
    grid-column: 2/3;
  }
  > a:nth-child(7) {
    grid-row: 3;
    grid-column: 2/3;
  }
`;

const GridLink = styled.div``;

const GridDesc = styled.div`
  div {
    display: flex;
    align-items: center;
    margin-top: 2%;
    svg {
      margin: 0px 1%;
    }
  }
`;
//! page2 css

function Now() {
  const [pickTopCount, setPickTopCount] = useState(1);
  const [pickBottomCount, setPickBottomCount] = useState(1);
  const [clickMenu, setClickMenu] = useState("All");

  const handleMorePickTop = () => {
    if (pickTopCount === 3) {
      setPickTopCount(1);
      return;
    }
    setPickTopCount((pickCount) => pickCount + 1);
  };

  const handleMorePickBottom = () => {
    if (pickBottomCount === 3) {
      setPickBottomCount(1);
      return;
    }
    setPickBottomCount((pickCount) => pickCount + 1);
  };

  const handleFilterClick = async (e) => {
    const { value } = e.target;
    setClickMenu(value);
    if (noticeApi) {
      try {
        if (noticeApi) {
          const data = await noticeApi.getNotice();
          console.log(data);
        }
      } catch (e) {
        console.log(e);
      } finally {
      }
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <LongContainer>
        <Nav />
        <Container>
          <Title>지금 떠오르는 PICK!</Title>
          <MainBox>
            <Link to="/now">
              <MainContent bgurl={initialData.funItem1.result[0].img}>
                <MainDesc>
                  <span>내 안에 꼰대가??!</span>
                  <div>
                    <FaHeart />
                    <span>1,456</span>
                    <BiShare />
                    <span>150</span>
                  </div>
                </MainDesc>
              </MainContent>
            </Link>

            <OtherContentBox>
              <OtherContentLink
                to="/now"
                bgurl={initialData.funItem1.result[1].img}
              >
                <OtherDesc>
                  <span>나의 연애 MBTI는..?</span>
                  <div>
                    <FaHeart />
                    <span>1,456</span>
                    <BiShare />
                    <span>150</span>
                  </div>
                </OtherDesc>
              </OtherContentLink>

              <OtherContentLink
                to="/now"
                bgurl={initialData.funItem1.result[2].img}
              >
                <OtherDesc>
                  <span>이번엔 어떤 정책을?!</span>
                  <div>
                    <FaHeart />
                    <span>1,456</span>
                    <BiShare />
                    <span>150</span>
                  </div>
                </OtherDesc>
              </OtherContentLink>
            </OtherContentBox>
          </MainBox>
          <BtnBox>
            <MorePickBtn onClick={handleMorePickTop}>
              <span>인기 PICK 더 보기 {pickTopCount}/3</span>
            </MorePickBtn>
          </BtnBox>
        </Container>
        <Divider>
          <ImgBox src={bannerImg} alt="banner" />
        </Divider>
        <Container>
          <Title>이번에는 무슨 PICK?</Title>
          <MenuContainer>
            <MenuBtn
              onClick={handleFilterClick}
              value="All"
              style={
                clickMenu === "All"
                  ? {
                      backgroundColor: "white",
                      color: "black",
                      border: "1px solid red",
                    }
                  : {}
              }
            >
              전체
            </MenuBtn>
            <MenuBtn
              onClick={handleFilterClick}
              value="Exr"
              style={
                clickMenu === "Exr"
                  ? {
                      backgroundColor: "white",
                      color: "black",
                      border: "1px solid red",
                    }
                  : {}
              }
            >
              운동
            </MenuBtn>
            <MenuBtn
              onClick={handleFilterClick}
              value="love"
              style={
                clickMenu === "love"
                  ? {
                      backgroundColor: "white",
                      color: "black",
                      border: "1px solid red",
                    }
                  : {}
              }
            >
              연애
            </MenuBtn>
            <MenuBtn
              onClick={handleFilterClick}
              value="other"
              style={
                clickMenu === "other"
                  ? {
                      backgroundColor: "white",
                      color: "black",
                      border: "1px solid red",
                    }
                  : {}
              }
            >
              정치
            </MenuBtn>
          </MenuContainer>
          <GridContainer>
            {initialData.funItem2.result.map((item, idx) => {
              return (
                <React.Fragment key={idx}>
                  <Link
                    to={`/ready${item.ready}/${item.id}`}
                    style={{ backgroundImage: `url(${item.img})` }}
                  >
                    <GridLink>{item.test}</GridLink>
                  </Link>
                  <GridDesc>
                    <span>{item.title}</span>
                    <div>
                      <FaHeart />
                      <span>{item.likes}</span>
                      <BiShare />
                      <span>{item.share}</span>
                    </div>
                  </GridDesc>
                </React.Fragment>
              );
            })}
          </GridContainer>
          <BtnBox>
            <MorePickBtn onClick={handleMorePickBottom}>
              <span>운동 PICK 더 보기 {pickBottomCount}/3</span>
            </MorePickBtn>
          </BtnBox>
        </Container>
      </LongContainer>
    </>
  );
}

export default Now;
