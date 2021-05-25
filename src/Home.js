import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.section``;

const Title = styled.h1`
  color: black;
  font-size: 1.5rem;
  margin-top: 40px;
`;

const MainBox = styled.div`
  margin-top: 60px;
`;

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
    height: 25vh;
    border: 1px solid black;
  }
`;

const BtnBox = styled.div`
  width: 100%;
  border-radius: 15px;
  padding: 40px;
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
`;

function Home() {
  const [pickCount, setPickCount] = useState(1);

  const handleMorePick = () => {
    if (pickCount === 3) {
      return;
    }
    setPickCount((pickCount) => pickCount + 1);
  };

  return (
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
        <MorePickBtn onClick={handleMorePick}>
          <h2>인기 PICK 더보기 {pickCount}/3</h2>
        </MorePickBtn>
      </BtnBox>
    </Container>
  );
}

export default Home;
