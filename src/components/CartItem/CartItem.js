import React from "react";
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardText,
  CardImg,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
const Image = styled(CardImg)`
  width: 200px;
  object-fit: cover;
  filter: grayscale(30%);
`;

const StyledButton = styled(Button)`
  display: block;
  margin-top: 20px;
`;

const CartItem = ({ id, title, image, duration, price }) => {
  return (
    <StyledCard key={id}>
      <CardBody>
        <Title>{title}</Title>
        <CardSubtitle>{duration}</CardSubtitle>
        <CardText>{price}</CardText>
        <Link to={`/course/${id}`}>View more</Link>
        <StyledButton>Remove</StyledButton>
      </CardBody>
      <Image src={image} alt={title} />
    </StyledCard>
  );
};

export default CartItem;
