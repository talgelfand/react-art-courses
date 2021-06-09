import React from "react";
import styled from "styled-components";

const Section = styled.section`
  margin-top: 200px;
  margin-left: 50px;
`;

const Title = styled.h1`
  text-align: center;
  color: var(--dark-color);
`;

const MyCourses = () => {
  return (
    <>
      <Section>
        <Title>My courses</Title>
        <p>TODO tabs: completed courses and the ones in progress</p>
        <p>TODO styles: styled components</p>
      </Section>
    </>
  );
};

export default MyCourses;
