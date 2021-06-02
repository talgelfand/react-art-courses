import React, { useContext } from "react";
import CourseCard from "../CourseCard/CourseCard";
import * as data from "../../data/data.json";
import styled from "styled-components";
import { Context } from "../../context/context";

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
  const { cartItems, wishlistItems } = useContext(Context);

  const courses = data.courses.map((course) => {
    const addToCart = (id) => {
      if (course.id === id) {
        cartItems.push(course);
      }
    };

    const addToWishlist = (id) => {
      if (course.id === id) {
        wishlistItems.push(course);
      }
    };

    return (
      <CourseCard
        key={course.id}
        {...course}
        addToCart={() => addToCart(course.id)}
        addToWishlist={() => addToWishlist(course.id)}
      />
    );
  });

  return <Section>{courses}</Section>;
};

export default CoursesGrid;
