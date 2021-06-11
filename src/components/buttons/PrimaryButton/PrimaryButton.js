import React from "react"
import { Button } from "reactstrap"
import styled from "styled-components"

const StyledButton = styled(Button)`
  display: block;
  margin: ${(props) => (props.centered ? "auto" : "")};
  margin-top: ${(props) => (props.marginTop ? "20px" : "0")};
  background-color: var(--accent-color);
  border: var(--accent-color);
  &:hover {
    background-color: ${(props) =>
      props.darkBg ? "var(--bg-color)" : "var(--dark-color)"};
  }
`

const PrimaryButton = ({ text, clickEvent, darkBg, marginTop, centered }) => {
  return (
    <StyledButton
      onClick={clickEvent}
      darkBg={darkBg}
      marginTop={marginTop}
      centered={centered}
    >
      {text}
    </StyledButton>
  )
}

export default PrimaryButton
