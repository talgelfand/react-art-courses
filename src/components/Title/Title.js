import React from "react";
import styled from "styled-components";

const Title = ({ text }) => {
  const Title = styled.h1`
    margin-top: 200px;
    color: var(--dark-color);
    text-align: center;
  `;

  return <Title>{text}</Title>;
};

export default Title;
