import React, { useState } from "react";
import { Link } from "react-router-dom";
import monet from "./monet.jpeg";

import "./CourseCard.scss";

const CourseCard = ({ image, title, price, duration }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const handleHoverLeave = () => {
    setIsHovered(!isHovered);
  };

  if (!isHovered) {
    return (
      <img
        src={monet}
        alt={title}
        className="courseCard__image"
        onMouseEnter={handleHover}
      />
    );
  }

  return (
    <section className="courseCard" onMouseLeave={handleHoverLeave}>
      <div className={`courseCard__content-${isHovered ? "block" : "none"}`}>
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
      </div>
    </section>
  );
};

export default CourseCard;
