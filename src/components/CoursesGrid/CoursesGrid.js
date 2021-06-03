import React, { useContext } from "react";
import CourseCard from "../CourseCard/CourseCard";
import * as data from "../../data/data.json";
import styled from "styled-components";
import { Context } from "../../context/context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    const addToCart = () => {
      if (!cartItems.includes(course)) {
        toast.info("Added to cart");
        cartItems.push(course);
      } else {
        toast.error("This course is already in the cart");
      }
    };

    const addToWishlist = () => {
      if (!wishlistItems.includes(course)) {
        toast("Added to wishlist");
        wishlistItems.push(course);
      } else {
        toast.error("This course is already in the wishlist");
      }
    };

    return (
      <CourseCard
        key={course.id}
        {...course}
        addToCart={addToCart}
        addToWishlist={addToWishlist}
      />
    );
  });

  return (
    <Section>
      {courses}
      <ToastContainer />
    </Section>
  );
};

export default CoursesGrid;
