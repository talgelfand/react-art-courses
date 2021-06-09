import React, { useContext } from "react";
import { Redirect, useParams } from "react-router-dom";
import * as data from "../../data/data.json";
import { Button } from "reactstrap";
import { Context } from "../../context/context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./SingleCourse.scss";

const SingleCourse = () => {
  const { id } = useParams();
  const course = data.courses.find((item) => item.id === parseInt(id));

  const { cartItems, wishlistItems } = useContext(Context);

  if (!course) {
    return <Redirect to="/error" />;
  }

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

  const { title, image, duration, requirements, price } = course;

  return (
    <section className="singleCourse">
      <h1 className="singleCourse__title">{title}</h1>
      <div className="singleCourse__content">
        <img src={image} alt={title} className="singleCourse__image" />
        <div className="singleCourse__descr">
          <h2 className="singleCourse__duration">
            <span>Duration: </span>
            {duration}
          </h2>
          <h2 className="singleCourse__requirements">
            <span>Requirements: </span>
            {requirements || "none"}
          </h2>
          <h2 className="singleCourse__price">
            <span>Price: </span>
            {price}
          </h2>
          <p className="singleCourse__text">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? But who has any right to find fault with a man
            who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultant pleasure?
          </p>
          <div className="singleCourse__buttons">
            <Button className="singleCourse__buttons-btn" onClick={addToCart}>
              Add to cart
            </Button>
            <Button
              className="singleCourse__buttons-btn"
              onClick={addToWishlist}
            >
              Add to wishlist
            </Button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default SingleCourse;
