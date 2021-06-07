import React, { useContext } from "react";
import { Context } from "../../context/context";
import styled from "styled-components";
import { Button } from "reactstrap";
import CartItem from "../../components/CartItem";
import { remove } from "../../utils/utils";

const Section = styled.section`
  margin-top: 200px;
`;

const Title = styled.h1`
  margin-top: 200px;
  text-align: center;
  color: var(--dark-color);
`;

const StyledButton = styled(Button)`
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  font-size: 22px;
`;

const TotalItems = styled.h3`
  font-size: 18px;
`;

const TotalPrice = styled.h2`
  margin-top: 20px;
  font-size: 20px;
`;

const Checkout = styled(Button)`
  display: block;
  background-color: var(--accent-color);
  border-color: var(--accent-color);
  &:hover {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 650px;
  margin: 0 auto;
  margin-top: 40px;
  justify-content: space-between;
  align-items: center;
`;

const Cart = () => {
  const { cartItems, setCartItems } = useContext(Context);
  let totalPrice = 0;
  const amountOfCourses = cartItems.length;

  const clearAllCourses = () => {
    setCartItems([]);
  };

  const countTotalPrice = () => {
    cartItems.forEach((item) => {
      totalPrice += item.priceNum;
    });

    return totalPrice;
  };

  const courses = cartItems.map((item) => {
    const removeItem = (id) => {
      const newItems = cartItems.filter((item) => item.id !== id);
      // const newItems = remove(cartItems, id);
      setCartItems(newItems);
    };

    return <CartItem key={item.id} {...item} removeItem={removeItem} />;
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
      <Wrapper>
        <div>
          <TotalItems>{`${amountOfCourses} course(s)`}</TotalItems>
          <TotalPrice>{`Total: ${countTotalPrice()} euros`}</TotalPrice>
        </div>
        <Checkout>Go to checkout</Checkout>
      </Wrapper>
    </Section>
  );
};

export default Cart;
