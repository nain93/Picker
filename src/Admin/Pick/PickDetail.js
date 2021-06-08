import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Nav from "../Dashboard/Nav";
import Picknow from "./Picknow";
import PickSee from "./PickSee";

const Container = styled.div`
  width: 100%;
  display: flex;
  font-size: 1.2rem;
  svg {
    font-size: 2rem;
  }
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  button {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.2rem;
  }
  color: black;
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
  padding: 3% 2%;
  display: flex;
`;

const DescDetail = styled.div`
  width: 100%;
  padding: 3% 2%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const DescDetailBox = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const DescDetailHeader = styled.div`
  width: 100%;
  padding: 10px 20px;
`;

const DescGridBox = styled.div`
  display: grid;
  height: 100%;
`;

function PickDetail() {
  const { id } = useParams();

  return (
    <Container>
      <DetailBox>
        <Nav />
        <Detail>
          <Picknow id={id} />
          <PickSee />
        </Detail>
        {console.log(id === "2")}
        {id === "2" || id === "4" ? (
          <DescDetail>
            <DescDetailBox>
              <DescDetailHeader>
                <span>픽 결과 자세히 보기</span>
              </DescDetailHeader>
              <DescGridBox>
                <div></div>
              </DescGridBox>
            </DescDetailBox>
          </DescDetail>
        ) : (
          ""
        )}
      </DetailBox>
    </Container>
  );
}

export default PickDetail;
