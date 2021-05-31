import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <section className="navbar">
      <Link to="/about" className="navbar__item">
        About us
      </Link>
      <Link to="/catalogue" className="navbar__item">
        Catalogue
      </Link>
      <Link to="/teachers" className="navbar__item">
        Teachers
      </Link>
      <Link to="/contacts" className="navbar__item">
        Contacts
      </Link>
    </section>
  );
};

export default Navbar;
