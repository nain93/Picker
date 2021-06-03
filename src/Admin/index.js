import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import logo from "../img/logo.png";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffc000;
  input,
  button {
    font-size: 2rem;
  }
  @media screen and (max-width: 1024px) {
    input,
    button {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 768px) {
    input,
    button {
      font-size: 1rem;
    }
  }
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  color: #4f4f4f;
  font-size: 6rem;
  margin: 1.5% 0px;
  @media screen and (max-width: 1024px) {
    font-size: 2.5rem;
    margin: 8% 0px;
  }
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
    margin: 10% 0px;
  }
  @media screen and (max-width: 320px) {
    font-size: 2rem;
  }
`;

const ImgBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 20%;
    margin-top: 6%;
    @media screen and (max-width: 1024px) {
      width: 25%;
      margin-top: 8%;
    }
    @media screen and (max-width: 768px) {
      width: 30%;
      margin-top: 15%;
    }
    @media screen and (max-width: 320px) {
      width: 40%;
    }
  }
`;

const InputBox = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5% 0px;
  input,
  button {
    width: 25%;
    border: none;
    border-radius: 40px;
    height: 9vh;
    padding: 0px 2%;
    font-family: "yg-jalnan";
    outline: none;
    margin-bottom: 2%;
    line-height: 30px;
    color: #ffc000;
    ::placeholder {
      color: #ffc000;
      opacity: 0.4;
    }

    @media screen and (max-width: 1024px) {
      width: 40%;
    }
    @media screen and (max-width: 768px) {
      width: 60%;
      height: 8vh;
      margin-bottom: 5%;
    }
    @media screen and (max-width: 320px) {
      margin-bottom: 5%;
    }
  }
  button {
    cursor: pointer;
    color: white;
    background-color: #ffc000;
    border: 1px solid white;

    @media screen and (max-width: 1024px) {
      margin-top: 5%;
    }
  }
`;

function Admin() {
  const [islogin, setIsLogin] = useState(false);
  const [inputValue, setInputValue] = useState({
    id: "",
    password: "",
  });
  const { push } = useHistory();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
    return;
  };

  const handleLogin = () => {
    if (inputValue.id === "" || inputValue.password === "") {
      return;
    }
    setIsLogin(true);
    setInputValue("");
    push("/adminhome");
    return;
  };
  return (
    <Container>
      <ImgBox>
        <img src={logo} alt="logo" />
      </ImgBox>
      <Title>PICK n PICK</Title>
      <InputBox>
        <input
          placeholder="관리자ID"
          type="id"
          name="id"
          required
          onChange={handleInput}
        ></input>
        <input
          placeholder="관리자PW"
          type="password"
          name="password"
          required
          onChange={handleInput}
        ></input>
        <button onClick={handleLogin}>다음</button>
      </InputBox>
    </Container>
  );
}

export default Admin;
