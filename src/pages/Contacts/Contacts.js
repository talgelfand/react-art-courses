import React from "react";
import { Card, CardBody } from "reactstrap";
import styled from "styled-components";
import Title from "../../components/Title";

const StyledCard = styled(Card)`
  width: 400px;
  display: block;
  margin: 0 auto;
  margin-top: 50px;
`;

const Span = styled.span`
  font-weight: bold;
`;

const Contacts = () => {
  return (
    <>
      <Title text="Contact us" />
      <StyledCard>
        <CardBody>
          <ul>
            <li>
              <Span>E-mail: </Span>
              <a href="mailto: artacademy@gmail.com">art.academy@gmail.com</a>
            </li>
            <li>
              <Span>Phone: </Span> <a href="tel:+37122345678">+371 22345678</a>
            </li>
            <li>
              <Span>Instagram: </Span> @artacademy
            </li>
            <li>
              <Span>Facebook: </Span> Art Academy
            </li>
          </ul>
        </CardBody>
      </StyledCard>
    </>
  );
};

export default Contacts;
