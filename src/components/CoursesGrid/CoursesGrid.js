import React from "react";
import CourseCard from "../CourseCard/CourseCard";
import * as data from "../../data/data.json";

import "./CoursesGrid.scss";

const CoursesGrid = () => {
  const courses = data.courses.map((course) => {
    return (
      <CourseCard
        key={course.id}
        id={course.id}
        image={course.image}
        title={course.title}
        price={course.price}
        duration={course.duration}
        isAddedToWishlist={course.addedToWishlist}
        isAddedToCart={course.addedToCart}
      />
    );
  });

  return <section className="coursesGrid">{courses}</section>;
};

export default CoursesGrid;
