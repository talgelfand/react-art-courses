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

const StyledCard = styled(Card)`
  width: 650px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  margin-top: 30px;
`;

const Title = styled(CardTitle)`
  font-weight: bold;
`;

const CatalogueItem = ({ id, title, image, duration, price }) => {
  return (
    <StyledCard key={id}>
      <CardBody>
        <Title>{title}</Title>
        <CardSubtitle>{duration}</CardSubtitle>
        <CardText>{price}</CardText>
        <Link to={`/course/${id}`}>View more</Link>
      </CardBody>
      <Image src={image} alt={title} />
    </StyledCard>
  );
};

export default CatalogueItem;
