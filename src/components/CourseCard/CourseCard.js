import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaCartPlus } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./CourseCard.scss";

const CourseCard = ({ image, title, price, duration }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const handleHoverLeave = () => {
    setIsHovered(!isHovered);
  };

  const notifyAboutAddingToWishlist = () => {
    toast("Added to wishlist");
  };

  const notifyAboutAddingToCart = () => {
    toast.info("Added to cart");
  };

  if (!isHovered) {
    return (
      <img
        src={image}
        alt={title}
        className="courseCard__image"
        onMouseEnter={handleHover}
      />
    );
  }

  return (
    <section className="courseCard" onMouseLeave={handleHoverLeave}>
      <div className={"courseCard__content"}>
        <h1 className="courseCard__title">
          <span>Title:</span> {title}
        </h1>
        <h2 className="courseCard__duration">
          <span>Duration:</span> {duration}
        </h2>
        <h2 className="courseCard__price">
          <span>Price:</span> {price}
        </h2>
        <div className="courseCard__icons">
          <FaHeart
            className="courseCard__icons-item"
            onClick={notifyAboutAddingToWishlist}
          />
          <FaCartPlus
            className="courseCard__icons-item"
            onClick={notifyAboutAddingToCart}
          />
        </div>
        <Link to={`course/${"id"}`} className="courseCard__link">
          View more
        </Link>
      </div>
      <ToastContainer />
    </section>
  );
};

export default CourseCard;
