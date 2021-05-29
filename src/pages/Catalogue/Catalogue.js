import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Form,
  Input,
} from "reactstrap";
import * as data from "../../data/data.json";

import "./Catalogue.scss";

const Catalogue = () => {
  const courses = data.courses.map((course) => {
    return (
      <Card key={course.id} className="catalogue__card">
        <CardBody>
          <CardTitle className="catalogue__card-title">
            {course.title}
          </CardTitle>
          <CardSubtitle>{course.duration}</CardSubtitle>
          <CardText>{course.price}</CardText>
          <Link to="/course">View more</Link>
        </CardBody>
        <CardImg src={course.image} />
      </Card>
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
