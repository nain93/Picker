import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.section`
  font-size: 1.5rem;
  background-color: white;
  height: 100%;
  padding: 6%;
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
  font-weight: 600;
  color: black;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const DetailContentBox = styled.form`
  width: 100%;
  height: 50%;
  @media screen and (max-width: 320px) {
    height: 40%;
  }
  padding: 0 4%;
  input {
    border: 1px solid black;
    width: 100%;
    height: 20%;
    margin: 5% 0;
    padding: 0 6%;
    font-size: 1.2rem;
  }
  input:nth-child(3) {
    height: 80%;
  }
`;

const UploadContentBox = styled.div`
  button {
    cursor: pointer;
    margin-right: 5%;
    width: 20%;
    @media screen and (max-width: 768px) {
      width: 35%;
    }
    height: 6vh;
    border: 1px solid #ffc000;
    border-radius: 35px;
    color: #ffc000;
    background-color: white;
  }
`;

const UploadBtnLink = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5% 0;
  button {
    cursor: pointer;
    width: 70%;
    height: 6vh;
    border: 1px solid #ffc000;
    border-radius: 35px;
    color: #ffc000;
    background-color: white;
  }
`;

function Upload() {
  const history = useHistory();

  const handleGoback = () => {
    history.goBack(1);
  };

  return (
    <Container>
      <GobackBtn onClick={handleGoback}>
        <IoIosArrowBack />
        뒤로
      </GobackBtn>
      <DetailContentBox>
        <input placeholder="제목"></input>
        <UploadContentBox>
          <button>이미지</button>
          <button>GIF</button>
        </UploadContentBox>
        <input placeholder="내용"></input>
        <input placeholder="태그"></input>
        <UploadBtnLink to="/">
          <button>등록</button>
        </UploadBtnLink>
      </DetailContentBox>
    </Container>
  );
}

export default Upload;
