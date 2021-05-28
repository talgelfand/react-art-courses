import React from "react";
import CoursesGrid from "../../components/CoursesGrid";
import Navbar from "../../components/Navbar";

const Main = () => {
  return (
    <section className="main">
      <Navbar />
      <CoursesGrid />
    </section>
  );
};

export default Main;
