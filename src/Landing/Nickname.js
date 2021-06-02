import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.section`
  font-size: 1.5rem;
  background-color: #ffc000;
  height: 100%;
  padding: 20px;
  @media screen and (min-width: 0px) {
    position: fixed;
    font-size: 1rem;
    button,
    input {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 321px) {
    position: fixed;
    font-size: 1.5rem;
    button,
    input {
      font-size: 1.2rem;
    }
  }
  @media screen and (min-width: 768px) {
    position: static;
    font-size: 1.5rem;
    button,
    input {
      font-size: 1.5rem;
    }
  }
`;

const Header = styled.div`
  width: 100%;
  margin-top: 10%;
  padding: 20px 15%;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const InputBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  input {
    border-radius: 50px;
    border: none;
    width: 70%;
    height: 8vh;
    padding: 0px 4%;
    font-family: "yg-jalnan";
    outline: none;
    color: #ffc000;
    ::placeholder {
      color: #ffc000;
      opacity: 0.4;
    }
  }
`;

const NicknameBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60%;
  width: 100%;
  button {
    border-radius: 50px;
    border: 1px solid white;
    width: 80%;
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffc000;
    color: white;
    cursor: pointer;
  }
`;

function Nickname() {
  const [inputValue, setInputValue] = useState("");
  const [validate, setValidate] = useState(true);
  const { push } = useHistory();

  const handleInputValue = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleNextClick = () => {
    if (inputValue === "") {
      setValidate(false);
      return;
    }
    setValidate(true);
    push("/now");
    return;
  };

  return (
    <Container>
      <Header>
        <h1>환영합니다! PICKnPICK에서 사용하실 닉네임을 설정해주세요.</h1>
      </Header>
      <InputBox>
        <input placeholder="닉네임" type="id" onChange={handleInputValue} />
      </InputBox>
      <NicknameBtnBox>
        <button onClick={handleNextClick}>다음</button>
        {validate ? (
          ""
        ) : (
          <span style={{ color: "red", marginTop: "2%" }}>
            닉네임을 입력하세요
          </span>
        )}
      </NicknameBtnBox>
    </Container>
  );
}

export default Nickname;
