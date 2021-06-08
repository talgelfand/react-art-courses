import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Signup from "../../components/Forms/Signup";

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

const SignupPage = () => {
  return (
    <Section>
      <Title>Sign up</Title>
      <Signup />
      <Subtitle>
        Already have an account? <StyledLink to="login">Log in</StyledLink>
      </Subtitle>
    </Section>
  );
};

export default SignupPage;
