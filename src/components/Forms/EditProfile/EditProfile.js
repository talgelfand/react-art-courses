import React, { useContext } from "react";
import { Card, CardBody, Form, Input, CardTitle, Label } from "reactstrap";
import styled from "styled-components";
import { Context } from "../../../context/context";

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

const StyledInput = styled(Input)`
  width: 300px;
  margin-top: 20px;
`;

const StyledLabel = styled(Label)`
  font-weight: bold;
  margin-top: 15px;
`;

const EditProfile = () => {
  const { phone, name, artist, setPhone, setName, setArtist, currentUser } =
    useContext(Context);

  return (
    <>
      <StyledCard>
        <CardBody>
          <StyledTitle>Edit your profile</StyledTitle>
          <Form onSubmit={(e) => e.preventDefault()}>
            <StyledLabel>Email:</StyledLabel>
            <StyledInput disabled value={currentUser.email} />
            <StyledLabel>Phone number:</StyledLabel>
            <StyledInput
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <StyledLabel>Name:</StyledLabel>
            <StyledInput
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <StyledLabel>Favourite artist:</StyledLabel>
            <StyledInput
              placeholder="Enter the artist name"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
            />
          </Form>
        </CardBody>
      </StyledCard>
    </>
  );
};

export default EditProfile;
