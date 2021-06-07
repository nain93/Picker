import React from "react";
import styled from "styled-components";
import Nav from "../Dashboard/Nav";
import { HiOutlineSearch } from "react-icons/hi";

const Container = styled.div`
  width: 100%;
  display: flex;
  font-size: 1.5rem;
  svg {
    font-size: 2rem;
  }
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const DetailBox = styled.div`
  width: 80%;
  margin-left: 20%;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
  }

  background-color: #fafafa;
`;

const Detail = styled.div`
  padding: 0px 2%;
`;

const DetailHeader = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  color: black;
  div {
    width: 22%;
    min-width: 135px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: white;
    height: 15vh;
    padding: 1%;
    margin-top: 2%;
    p {
      margin-bottom: 5%;
    }
    p:first-child {
      width: 100%;
    }
    p:nth-child(2) {
      width: 100%;
      text-align: right;
      font-weight: 700;
      font-size: 1.8rem;
      @media screen and (max-width: 1024px) {
        font-size: 1.5rem;
      }
      @media screen and (max-width: 768px) {
        font-size: 1rem;
      }
    }
    p:last-child {
      width: 100%;
      text-align: right;
      font-weight: 400;
      font-size: 1rem;
      @media screen and (max-width: 1024px) {
        font-size: 1rem;
      }
      @media screen and (max-width: 768px) {
        font-size: 0.8rem;
      }
    }
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 10vh;
  margin: 1% 0px;
  padding: 0 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const ItemBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 5%;
  grid-column-gap: 3%;
  width: 100%;
  height: 80vh;
  div {
    border: 1px solid black;
  }
`;

function index() {
  return (
    <Container>
      <DetailBox>
        <Nav />
        <Detail>
          <DetailHeader>
            <div>
              <p>Total Pick</p>
              <p>21,000,081</p>
              <p>+1,008 (7days)</p>
            </div>
            <div>
              <p>승인대기</p>
              <p>21,000,081</p>
              <p>+1,008 (7days)</p>
            </div>
            <div>
              <p>진행</p>
              <p>21,000,081</p>
              <p>+1,008 (7days)</p>
            </div>
            <div>
              <p>종료</p>
              <p>21,000,081</p>
              <p>+1,008 (7days)</p>
            </div>
          </DetailHeader>
          <SearchInput placeholder="Search"></SearchInput>
          <ItemBox>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </ItemBox>
        </Detail>
      </DetailBox>
    </Container>
  );
}

export default index;
