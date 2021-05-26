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
  position: sticky;
  top: 0;
  z-index: 999;
`;

const Item = styled.div`
  padding-bottom: 5px;
  border-bottom: 2px solid ${(props) => (props.current ? "white" : "inherit")};
`;

function Nav() {
  const { pathname } = useLocation();
  return (
    <Container>
      <Item current={pathname === "/"}>
        <Link to="/">NOW</Link>
      </Item>
      <Item current={pathname === "/fun"}>
        <Link to="/fun">FUN</Link>
      </Item>
      <Item current={pathname === "/my"}>
        <Link to="/my">MY</Link>
      </Item>
    </Container>
  );
}

export default Nav;
