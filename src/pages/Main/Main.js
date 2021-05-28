import React from "react";
import CoursesGrid from "../../components/CoursesGrid";
import Navbar from "../../components/Navbar";

import "./Main.scss";

const Main = () => {
  return (
    <section className="main">
      <Navbar />
      <h1 className="main__title">Our best courses</h1>
      <CoursesGrid />
    </section>
  );
};

export default Main;
