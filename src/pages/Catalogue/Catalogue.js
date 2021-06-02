import React from "react";
import { Form, Input } from "reactstrap";
import CatalogueItem from "../../components/CatalogueItem";
import * as data from "../../data/data.json";
import styled from "styled-components";

const Search = styled(Input)`
  display: block;
  margin: 0 auto;
  margin-top: 200px;
  max-width: 400px;
`;

const Catalogue = () => {
  const courses = data.courses.map((course) => {
    return <CatalogueItem key={course.id} {...course} />;
  });

  return (
    <section className="catalogue">
      <Form onSubmit={() => alert("Submitted")}>
        <Search type="text" placeholder="Search" />
      </Form>
      {courses}
    </section>
  );
};

export default Catalogue;
