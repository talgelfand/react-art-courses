import React from "react";
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardText,
  CardImg,
} from "reactstrap";
import { Link } from "react-router-dom";

const CatalogueItem = ({ id, title, image, duration, price }) => {
  return (
    <section className="catalogueItem">
      <Card key={id} className="catalogue__card">
        <CardBody>
          <CardTitle className="catalogue__card-title">{title}</CardTitle>
          <CardSubtitle>{duration}</CardSubtitle>
          <CardText>{price}</CardText>
          <Link to={`/course/${id}`}>View more</Link>
        </CardBody>
        <CardImg src={image} />
      </Card>
    </section>
  );
};

export default CatalogueItem;
