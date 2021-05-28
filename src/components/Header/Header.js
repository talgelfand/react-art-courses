import React from "react";
import cart from "./cart.png";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <section className="header">
      <Link to="/" className="header__title">
        Vodafone Art Academy
      </Link>
      <div className="header__menu">
        <Link to="/mycourses" className="header__courses">
          My courses
        </Link>
        <Link to="/wishlist" className="header__wishlist">
          Wishlist
        </Link>
        <Link to="/cart" className="header__cart-link">
          <img src={cart} alt="" className="header__cart-icon" />
        </Link>
      </div>
    </section>
  );
};

export default Header;
