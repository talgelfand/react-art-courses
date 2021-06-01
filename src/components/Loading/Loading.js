import React from "react";
import { Spinner } from "reactstrap";
import styled from "styled-components";

const Section = styled.section`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  z-index: 1;
  margin-top: 200px;
`;

const StyledSpinner = styled(Spinner)`
  margin: 0 20px;
`;

const Loading = () => {
  return (
    <Section>
      <StyledSpinner type="grow" color="primary" children="" />
      <StyledSpinner type="grow" color="primary" children="" />
      <StyledSpinner type="grow" color="primary" children="" />
    </Section>
  );
};

export default Loading;
