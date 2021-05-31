import React from "react";
import { Form, Input } from "reactstrap";
import CatalogueItem from "../../components/CatalogueItem";
import * as data from "../../data/data.json";

import "./Catalogue.scss";

const Catalogue = () => {
  const courses = data.courses.map((course) => {
    return (
      <CatalogueItem
        id={course.id}
        title={course.title}
        duration={course.duration}
        price={course.price}
        image={course.image}
      />
    );
  });

  return (
    <section className="catalogue">
      <Form onSubmit={() => alert("Submitted")}>
        <Input className="catalogue__search" type="text" placeholder="Search" />
      </Form>
      {courses}
    </section>
  );
};

export default Catalogue;
