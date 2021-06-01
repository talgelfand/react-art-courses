import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import styled from "styled-components";

const Title = styled.h1`
  margin-top: 200px;
  color: var(--primary-color);
  text-align: center;
`;

const Details = styled(CardTitle)`
  font-weight: bold;
  text-align: center;
`;

const StyledCard = styled(Card)`
  width: 400px;
  display: block;
  margin: 0 auto;
  margin-top: 50px;
`;

const Contacts = () => {
  return (
    <>
      <Title>Contact us</Title>
      <h2>Here will be a contact form</h2>
      <StyledCard>
        <CardBody>
          <Details>Contact Details</Details>
          <ul>
            <li>
              <span>E-mail: </span>
              <a href="mailto: artacademy@gmail.com">art.academy@gmail.com</a>
            </li>
            <li>
              <span>Phone: </span> <a href="tel:+37122345678">+371 22345678</a>
            </li>
            <li>
              <span>Instagram: </span> @artacademy
            </li>
            <li>
              <span>Facebook: </span> Art Academy
            </li>
          </ul>
        </CardBody>
      </StyledCard>
    </>
  );
};

export default Contacts;
