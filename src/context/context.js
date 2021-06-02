import React, { createContext, useState } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  return (
    <Context.Provider
      value={{ cartItems, wishlistItems, setCartItems, setWishlistItems }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
