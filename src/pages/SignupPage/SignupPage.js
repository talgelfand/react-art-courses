import React from "react";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Signup from "../../components/Forms/Signup";
import Title from "../../components/Title";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: var(--bg-color);
  }
`;

const Section = styled.section`
  width: 400px;
  display: block;
  margin: 0 auto;
  margin-top: 200px;
`;

const Subtitle = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const StyledLink = styled(Link)`
  margin-top: 10px;
  color: var(--dark-color);
  font-weight: bold;
  &:hover {
    color: var(--accent-color);
  }
`;

const SignupPage = () => {
  return (
    <Section>
      <GlobalStyle />
      <Title text="Sign up" />
      <Signup />
      <Subtitle>
        Already have an account? <StyledLink to="login">Log in</StyledLink>
      </Subtitle>
    </Section>
  );
};

export default SignupPage;
