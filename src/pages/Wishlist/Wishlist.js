import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import * as data from "../../data/data.json";

import "./Wishlist.scss";

const Wishlist = () => {
  const courses = data.courses.map((course) => {
    if (!course.addedToWishlist) {
      return null;
    }

    return (
      <Card key={course.id}>
        <CardBody>
          <CardTitle>{course.title}</CardTitle>
        </CardBody>
      </Card>
    );
  });
  return <section className="wishlist">{courses}</section>;
};

export default Wishlist;
