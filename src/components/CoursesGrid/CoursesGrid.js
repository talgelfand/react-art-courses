import React from "react";
import CourseCard from "../CourseCard/CourseCard";
import * as data from "../../data/data.json";

import "./CoursesGrid.scss";

const CoursesGrid = () => {
  const courses = data.courses.map((course) => {
    return <CourseCard key={course.id} {...course} />;
  });

  return <section className="coursesGrid">{courses}</section>;
};

export default CoursesGrid;
