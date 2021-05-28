import React from "react";
import { Link } from "react-router-dom";

import "./ErrorPage.scss";

const ErrorPage = () => {
  return (
    <section className="errorPage">
      <h1 className="errorPage__title">Oops... This is the wrong address</h1>
      <Link to="/" className="errorPage__link">
        Go back home
      </Link>
    </section>
  );
};

export default ErrorPage;
