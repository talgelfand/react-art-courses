import React, { useContext } from "react";
import { Card, CardBody, Form, CardTitle, Label, CardText } from "reactstrap";
import styled from "styled-components";
import { Context } from "../../context/context";

const StyledCard = styled(Card)`
  width: 500px;
  display: block;
  margin: 0 auto;
  margin-top: 30px;
  padding: 20px;
`;

const StyledTitle = styled(CardTitle)`
  text-align: center;
  font-size: 18px;
`;

const StyledLabel = styled(Label)`
  font-weight: bold;
  margin-top: 15px;
`;

const StyledText = styled(CardText)`
  margin-top: 15px;
`;

const ProfileInfo = () => {
  const { phone, name, artist, currentUser } = useContext(Context);

  return (
    <>
      <StyledCard>
        <CardBody>
          <StyledTitle>Profile information</StyledTitle>
          <Form onSubmit={(e) => e.preventDefault()}>
            <StyledLabel>Email:</StyledLabel>
            <StyledText>{currentUser.email}</StyledText>
            <StyledLabel>Phone number:</StyledLabel>
            <StyledText>{phone}</StyledText>
            <StyledLabel>Name:</StyledLabel>
            <StyledText>{name}</StyledText>
            <StyledLabel>Favourite artist:</StyledLabel>
            <StyledText>{artist}</StyledText>
          </Form>
        </CardBody>
      </StyledCard>
    </>
  );
};

export default ProfileInfo;
