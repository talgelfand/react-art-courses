import React from "react";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <section className="navbar">
      <a href="#" className="navbar__item">
        Catalogue
      </a>
      <a href="#" className="navbar__item">
        Teachers
      </a>
      <a href="#" className="navbar__item">
        Contacts
      </a>
      <a href="#" className="navbar__item">
        Rules
      </a>
    </section>
  );
};

export default Navbar;
