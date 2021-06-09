import React, { useContext } from "react";
import { Context } from "../../context/context";
import styled from "styled-components";
import WishlistItem from "../../components/WishlistItem";
import { Button } from "reactstrap";

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

const Wishlist = () => {
  const { wishlistItems, setWishlistItems } = useContext(Context);

  const clearAllCourses = () => {
    setWishlistItems([]);
  };

  const courses = wishlistItems.map((item) => {
    const removeItem = (id) => {
      const newItems = wishlistItems.filter((item) => item.id !== id);
      setWishlistItems(newItems);
    };

    return <WishlistItem key={item.id} {...item} removeItem={removeItem} />;
  });

  if (courses.length === 0) {
    return <Title>No courses saved to wishlist</Title>;
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

export default Wishlist;
