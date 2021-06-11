import React from "react";
import { Button } from "reactstrap";
import styled from "styled-components";

const StyledButton = styled(Button)`
  display: block;
  margin-top: 20px;
  background-color: var(--dark-color);
  border: var(--dark-color);
  &:hover {
    background-color: var(--accent-color);
  }
`;

const SecondaryButton = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};

export default SecondaryButton;
