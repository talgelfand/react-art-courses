import React, { useContext } from "react";
import { Context } from "../../context/context";
import styled from "styled-components";
import { Button } from "reactstrap";
import CartItem from "../../components/CartItem";

const Section = styled.section`
  margin-top: 200px;
`;

const Title = styled.h1`
  margin-top: 200px;
  text-align: center;
  color: var(--primary-color);
`;

const StyledButton = styled(Button)`
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  font-size: 22px;
`;

const Cart = () => {
  const { cartItems, setCartItems } = useContext(Context);

  const clearAllCourses = () => {
    setCartItems([]);
  };

  const courses = cartItems.map((item) => {
    return <CartItem key={item.id} {...item} />;
  });

  if (courses.length === 0) {
    return <Title>No courses added to cart</Title>;
  }

  return (
    <Section>
      {courses}
      <StyledButton color="link" onClick={clearAllCourses}>
        Clear all
      </StyledButton>
    </Section>
  );
};

export default Cart;
