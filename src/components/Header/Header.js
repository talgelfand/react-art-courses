import React from "react";
import cart from "./cart.png";

import "./Header.scss";

const Header = () => {
  return (
    <section className="header">
      <a href="#" className="header__title">
        Vodafone Art Academy
      </a>
      <div className="header__menu">
        <a href="#" className="header__courses">
          My courses
        </a>
        <a href="#" className="header__wishlist">
          Wishlist
        </a>
        <a href="#" className="header__cart-link">
          <img src={cart} alt="" className="header__cart-icon" />
        </a>
      </div>
    </section>
  );
};

export default Header;
