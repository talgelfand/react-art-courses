import React from "react";
import { Link } from "react-router-dom";
import { Card, CardTitle } from "reactstrap";
import styled, { createGlobalStyle } from "styled-components";
import Login from "../../components/Forms/Login";

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

const Title = styled.h1`
  text-align: center;
  color: var(--dark-color);
`;

const Subtitle = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const StyledLink = styled(Link)`
  margin-top: 10px;
`;

const LoginPage = () => {
  return (
    <Section>
      <GlobalStyle />
      <Title>Log in</Title>
      <Login />
      <Subtitle>
        Don't have an account? <StyledLink to="signup">Sign up</StyledLink>
      </Subtitle>
    </Section>
  );
};

export default LoginPage;
