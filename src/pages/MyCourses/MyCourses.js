import React from "react";
import styled from "styled-components";
import Title from "../../components/Title";

const Section = styled.section`
  margin-top: 200px;
  margin-left: 50px;
`;

const MyCourses = () => {
  return (
    <>
      <Section>
        <Title text="My courses" />
        <p>TODO tabs: completed courses and the ones in progress</p>
        <p>TODO styles: styled components</p>
      </Section>
    </>
  );
};

export default MyCourses;
