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

const TotalPrice = styled.h2`
  text-align: center;
  margin-top: 20px;
  font-size: 20px;
`;

const Checkout = styled(Button)`
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  background-color: var(--accent-color);
  border-color: var(--accent-color);
  &:hover {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
  }
`;

const Cart = () => {
  const { cartItems, setCartItems } = useContext(Context);
  let totalPrice = 0;

  const clearAllCourses = () => {
    setCartItems([]);
  };

  const countTotalPrice = () => {
    cartItems.forEach((item) => {
      totalPrice += item.priceNum;
    });

    return totalPrice;
  };

  console.table(cartItems);
  console.log(totalPrice);

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
      <TotalPrice>{`Total: ${countTotalPrice()} euros`}</TotalPrice>
      <Checkout>Go to checkout</Checkout>
    </Section>
  );
};

export default Cart;
