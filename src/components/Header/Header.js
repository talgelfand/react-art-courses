import React, { useContext, useState } from "react";
import cart from "./cart.png";
import { Link, useHistory } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import styled from "styled-components";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { Context } from "../../context/context";

const Section = styled.section`
  position: fixed;
  top: 0;
  padding: 0 60px 0 60px;
  width: 100%;
  min-height: 100px;
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
  &:hover {
    color: #fff;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 22px;
  transition: all 0.5s;
  &:hover {
    color: var(--primary-color);
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
  width: 70%;
`;

const StyledDropdown = styled(DropdownToggle)`
  background-color: var(--accent-color);
  border-color: var(--accent-color);
`;

const StyledButton = styled(Button)`
  color: #fff;
  background-color: var(--accent-color);
  border-color: var(--accent-color);
`;

const SignIn = styled(Link)`
  text-decoration: none;
  color: #fff;
  &:hover {
    color: #fff;
  }
`;

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const [error, setError] = useState("");
  const { currentUser, logout } = useContext(Context);
  const history = useHistory();

  const handleLogout = async () => {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  };

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
        {currentUser ? (
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <StyledDropdown caret>{currentUser.email}</StyledDropdown>
            <DropdownMenu>
              <DropdownItem>
                <Link to="/profile">My profile</Link>
              </DropdownItem>
              <DropdownItem>Settings</DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem onClick={handleLogout}>Log out</DropdownItem>
              {error && <DropdownItem disabled>{error}</DropdownItem>}
            </DropdownMenu>
          </Dropdown>
        ) : (
          <StyledButton>
            <SignIn to="/login">Sign in</SignIn>
          </StyledButton>
        )}
      </Menu>
    </Section>
  );
};

export default Header;
