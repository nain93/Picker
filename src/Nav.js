import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fc913a;
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  position: sticky;
  top: 0;
`;

const NavLink = styled(Link)`
  padding-bottom: 5px;
  border-bottom: 2px solid ${(props) => (props.current ? "white" : "inherit")};
`;

function Nav() {
  const { pathname } = useLocation();
  return (
    <Container>
      <NavLink to="/" current={pathname === "/"}>
        NOW
      </NavLink>
      <NavLink to="/fun" current={pathname === "/fun"}>
        FUN
      </NavLink>
      <NavLink to="/my" current={pathname === "/my"}>
        MY
      </NavLink>
    </Container>
  );
}

export default Nav;
