import React from "react";
import cart from "./cart.png";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import styled from "styled-components";

const Section = styled.section`
  position: fixed;
  top: 0;
  padding: 0 60px 0 60px;
  width: 100%;
  min-height: 120px;
  background-color: var(--dark-color);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

const Title = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 32px;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 24px;
  transition: all 0.5s;
  &:hover {
    color: var(--accent-color);
    transform: scale(1.2);
  }
`;

const HeartIcon = styled(FaHeart)`
  margin-left: 10px;
  margin-bottom: 5px;
`;

const CartLink = styled(Link)`
  width: 10%;
`;

const CartIcon = styled.img`
  width: 100%;
`;

const Header = () => {
  return (
    <Section>
      <Title to="/">Vodafone Art Academy</Title>
      <Menu>
        <StyledLink to="/mycourses">My courses</StyledLink>
        <StyledLink to="/wishlist">
          Wishlist
          <HeartIcon />
        </StyledLink>
        <CartLink to="/cart">
          <CartIcon src={cart} alt="cart" />
        </CartLink>
      </Menu>
    </Section>
  );
};

export default Header;
