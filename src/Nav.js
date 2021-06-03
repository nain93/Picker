import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background-color: #ffc000;
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 320px) {
    font-size: 0.6rem;
  }
  position: sticky;
  top: 0;
  height: 64px;
  z-index: 999;
`;

const Item = styled.div`
  padding: 0px 3%;
  padding-bottom: 6px;
  border-bottom: 5px solid
    ${(props) => (props.current ? "rgba(255,255,255,0.8)" : "inherit")};
`;

function Nav() {
  const { pathname } = useLocation();
  return (
    <Container>
      <Item current={pathname === "/now"}>
        <Link to="/now">NOW.</Link>
      </Item>
      <Item current={pathname === "/fun"}>
        <Link to="/fun">FUN.</Link>
      </Item>
      <Item current={pathname === "/my"}>
        <Link to="/my">MY.</Link>
      </Item>
    </Container>
  );
}

export default Nav;
