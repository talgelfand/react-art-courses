import React from "react";

import "./MyCourses.scss";

const MyCourses = () => {
  return (
    <section className="myCourses">
      <h1 className="myCourses__title">My courses</h1>
      <ul>
        <li>Course 1</li>
        <li>Course 2</li>
        <li>Course 3</li>
        <li>Course 4</li>
        <p>TODO tabs: completed courses and the ones in progress</p>
      </ul>
    </section>
  );
};

export default MyCourses;
