import React from "react";
import CourseCard from "../CourseCard/CourseCard";
import * as data from "../../data/data.json";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  margin: 0 auto;
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(4, 300px);
  justify-content: center;
  gap: 10px;
`;

const CoursesGrid = () => {
  const courses = data.courses.map((course) => {
    return <CourseCard key={course.id} {...course} />;
  });

  return <Section>{courses}</Section>;
};

export default CoursesGrid;
