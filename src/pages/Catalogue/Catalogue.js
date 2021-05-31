import React from "react";
import { Form, Input } from "reactstrap";
import CatalogueItem from "../../components/CatalogueItem";
import * as data from "../../data/data.json";

import "./Catalogue.scss";

const Catalogue = () => {
  const courses = data.courses.map((course) => {
    return <CatalogueItem key={course.id} {...course} />;
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
