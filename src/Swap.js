import React, { useMemo, useState } from "react";
import { IoIosArrowBack, IoIosRedo, IoIosUndo } from "react-icons/io";
import styled from "styled-components";
import TinderCard from "react-tinder-card";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { initialData } from "./data/initialData";

const Container = styled.section`
  background-color: #ffc000;
  font-size: 2rem;
  height: 100%;
  padding: 20px;

  @media screen and (min-width: 0px) {
    position: fixed;
    font-size: 1rem;
    button {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 321px) {
    position: fixed;
    font-size: 1.5rem;
    button {
      font-size: 1.2rem;
    }
  }
  @media screen and (min-width: 768px) {
    position: static;
    font-size: 1.5rem;
    button {
      font-size: 1.5rem;
    }
  }
`;

const GobackBtn = styled.button`
  border: none;
  background-color: inherit;
  width: 100%;
  font-size: 1.5rem;
  @media screen and (max-width: 320px) {
    font-size: 1rem;
  }
  font-weight: 600;
  color: inherit;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Title = styled.div`
  @media screen and (min-width: 0px) {
    margin: 30px;
  }
  @media screen and (min-width: 320px) {
    margin: 50px;
  }
  @media screen and (min-width: 769px) {
    margin: 100px;
  }
  text-align: center;
`;

const Tinder = styled.div`
  @media screen and (min-width: 0px) {
    height: 200px;
    width: 200px;
  }
  @media screen and (min-width: 321px) {
    height: 240px;
    width: 240px;
  }
  @media screen and (min-width: 768px) {
    height: 320px;
    width: 320px;
  }
  margin: 0 auto;
  border-radius: 20px;
  background-color: white;
  background-position: center center;
  background-size: cover;
`;

const Count = styled.div`
  text-align: center;
  position: relative;
  margin-top: auto;
  margin-bottom: 60px;
  color: white;
`;

const SwapBtnBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SwapBtn = styled(Link)`
  border: 0;
  background: inherit;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  font-size: 2rem;

  @media screen and (max-width: 320px) {
    font-size: 1.5rem;
  }
`;

const TinderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media screen and (min-height: 320px) {
    height: 40%;
  }
  @media screen and (min-height: 768px) {
    height: 45%;
  }
  margin: auto auto;
  > div {
    display: flex;
    height: 100%;
    position: absolute;
    color: black;
  }
`;

const alreadyRemoved = [];
let charactersState = initialData.swapItems.result;

function Swap() {
  const [countPage, setCountPage] = useState(1);
  const [characters, setCharacters] = useState(initialData.swapItems.result);
  const [lastDirection, setLastDirection] = useState();
  const [swaping, setSwaping] = useState(false);
  const history = useHistory();
  const { pathname } = useLocation();

  const handleGoback = () => {
    history.goBack(1);
  };

  const childRefs = useMemo(
    () =>
      Array(initialData.swapItems.result.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );
  const swipe = (dir) => {
    const cardsLeft = characters.filter(
      (person) => !alreadyRemoved.includes(person.name)
    );
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name; // Find the card object to be removed
      const index = initialData.swapItems.result
        .map((person) => person.name)
        .indexOf(toBeRemoved); // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved); // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir);
    }
    return;
  };
  const swiped = (direction, nameToDelete) => {
    if (countPage === 5) {
      //todo 결과페이지로 이동
      return;
    }
    if (swaping) {
      return;
    }
    setLastDirection(direction);
    alreadyRemoved.push(nameToDelete);
  };

  const outOfFrame = (name) => {
    charactersState = charactersState.filter(
      (character) => character.name !== name
    );
    setCharacters(charactersState);
  };
  const handleLeftSwap = () => {
    if (countPage === 5) {
      //todo 결과페이지로 이동
      console.log("return");
      return;
    }
    setSwaping(true);
    swipe("left");
    setCountPage((countPage) => countPage + 1);
  };

  const handleRightSwap = () => {
    if (countPage === 5) {
      console.log("return");
      return;
    }
    setSwaping(true);
    swipe("right");
    setCountPage((countPage) => countPage + 1);
  };

  return (
    <Container>
      <GobackBtn onClick={handleGoback}>
        <IoIosArrowBack />
        뒤로
      </GobackBtn>
      <Title>Q)당신의 연애스타일은..?</Title>
      <TinderBox className="cardContainer">
        {characters.map((character, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="swipe"
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name)}
            onCardLeftScreen={() => outOfFrame(character.name)}
          >
            <Tinder
              className="card"
              style={{ backgroundImage: `url(${character.img})` }}
            >
              {/* <h3>{character.name}</h3> */}
            </Tinder>
          </TinderCard>
        ))}
      </TinderBox>

      <Count>{countPage}/5</Count>
      <SwapBtnBox>
        <SwapBtn
          to={countPage === 5 ? "/result" : pathname}
          onClick={handleLeftSwap}
        >
          <IoIosUndo />
          NOT
        </SwapBtn>
        <SwapBtn
          to={countPage === 5 ? "/result" : pathname}
          onClick={handleRightSwap}
        >
          <IoIosRedo />
          YES
        </SwapBtn>
      </SwapBtnBox>
    </Container>
  );
}

export default Swap;
