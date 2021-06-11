import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledLink = styled(Link)`
  display: block;
  margin-top: ${(props) => (props.marginTop ? "20px" : "0px")};
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  color: var(--dark-color);
  &:hover {
    color: var(--accent-color);
  }
`

const PrimaryLink = ({ path, text, marginTop, bold }) => {
  return (
    <StyledLink to={path} marginTop={marginTop} bold={bold}>
      {text}
    </StyledLink>
  )
}

export default PrimaryLink
