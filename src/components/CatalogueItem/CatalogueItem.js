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
import styled from "styled-components";

const Image = styled(CardImg)`
  width: 200px;
  height: 150px;
  object-fit: cover;
  filter: grayscale(30%);
`;

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
        <Image src={image} alt={title} />
      </Card>
    </section>
  );
};

export default CatalogueItem;
