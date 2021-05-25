import React, { useState } from "react";
import styled from "styled-components";
import Nav from "./Nav";

const LongContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Container = styled.section`
  padding: 0 20px;
`;

const Title = styled.h1`
  color: black;
  font-size: 1.5rem;
  margin: 40px 0px;
`;

const MainBox = styled.div``;

const MainContent = styled.div`
  border: 1px solid black;
  height: 30vh;
  border-radius: 15px;
  width: 100%;
  margin: 0 auto;
`;

const OtherContentBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  div {
    margin-top: 20px;
    border-radius: 15px;
    width: 48%;
    height: 30vh;
    border: 1px solid black;
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
  height: 5vh;
  background-color: white;
  cursor: pointer;
  margin: 50px 0px;
  font-weight: 600;
  font-size: 1.2rem;
  grid-column: 1;
`;

const Divider = styled.div`
  width: 100%;
  margin: 0 auto;
  border: 1px solid rgba(1, 1, 1, 0.3);
`;
//! page1 css

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
  margin-right: 20px;
  background-color: #fc913a;
  border: 1px solid #fc913a;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(120px, 1fr));
  grid-template-rows: repeat(2, minmax(250px, 1fr));
  gap: 15px;
  margin-top: 40px;
  div {
    border: 1px solid black;
    border-radius: 15px;
  }
`;

//! page2 css
function Home() {
  const [pickTopCount, setPickTopCount] = useState(1);
  const [pickBottomCount, setPickBottomCount] = useState(1);

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
  return (
    <>
      <LongContainer>
        <Nav />
        <Container>
          <Title>지금 떠오르는 PICK!</Title>
          <MainBox>
            <MainContent></MainContent>
            <OtherContentBox>
              <div></div>
              <div></div>
            </OtherContentBox>
          </MainBox>
          <BtnBox>
            <MorePickBtn onClick={handleMorePickTop}>
              <h2>인기 PICK 더 보기 {pickTopCount}/3</h2>
            </MorePickBtn>
          </BtnBox>
        </Container>
        <Container>
          <Divider />
          <Title>이번에는 무슨 PICK?</Title>
          <MenuContainer>
            <MenuBtn>전체</MenuBtn>
            <MenuBtn>운동</MenuBtn>
            <MenuBtn>연애</MenuBtn>
            <MenuBtn>정치</MenuBtn>
          </MenuContainer>
          <GridContainer>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </GridContainer>
          <BtnBox>
            <MorePickBtn onClick={handleMorePickBottom}>
              <h2>운동 PICK 더 보기 {pickBottomCount}/3</h2>
            </MorePickBtn>
          </BtnBox>
        </Container>
      </LongContainer>
    </>
  );
}

export default Home;
