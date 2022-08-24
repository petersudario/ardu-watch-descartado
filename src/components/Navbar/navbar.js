import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "../Navbar/navbar.css"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <NavLink to={"/"}><Logo>ARDU-WATCH</Logo></NavLink>
      <Hamburguer onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburguer>
      <Menu isOpen={isOpen}>
        
        <NavLink to="/Gps">GPS</NavLink>
        <NavLink to="/oxim">Oxímetro</NavLink>
        

      </Menu>
    </Nav>
  );
}; 

const Nav = styled.nav`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: white;
  margin-bottom: 200px;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
  }
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: black;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  transition: all 0.3s ease-in;
  &:hover {
    color: gray;
  }
`;
const Hamburguer = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: black;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

export default Navbar;