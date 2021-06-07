import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsPeopleCircle } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";

const Container = styled.div`
  width: 100%;
  height: 8vh;
  background-color: #ffc000;
  display: flex;
  justify-content: flex-end;
  padding: 0 5%;
`;

// const NavBurgerBtn = styled.div`
//   height: 100%;
//   width: 20%;
//   display: flex;
//   align-items: center;
//   color: black;
//   svg {
//     display: none;
//     cursor: pointer;
//     @media screen and (max-width: 768px) {
//       display: inline;
//     }
//     @media screen and (max-width: 320px) {
//     }
//   }
// `;

const NavItemBtn = styled.div`
  width: 12%;
  @media screen and (max-width: 1024px) {
    width: 20%;
  }
  @media screen and (max-width: 768px) {
    width: 25%;
  }

  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: black;
  svg {
    margin: 0 8%;
  }
`;
function Nav() {
  return (
    <Container>
      <NavItemBtn>
        <Link to="adinmhome">
          <BsPeopleCircle />
        </Link>
        <Link to="adinmhome">
          <HiOutlineLogout />
        </Link>
      </NavItemBtn>
    </Container>
  );
}

export default Nav;
