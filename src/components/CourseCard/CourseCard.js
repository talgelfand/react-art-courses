import React from "react";
import { Link } from "react-router-dom";

import "./CourseCard.scss";

const CourseCard = ({ image, title, price, duration }) => {
  return (
    <section className="courseCard">
      <h1 className="courseCard__title">
        <span>Title:</span> {title}
      </h1>
      <h2 className="courseCard__duration">
        <span>Duration:</span> {duration}
      </h2>
      <h2 className="courseCard__price">
        <span>Price:</span> {price}
      </h2>
      <Link to={`course/${"id"}`} className="courseCard__link">
        View more
      </Link>
    </section>
  );
};

export default CourseCard;
