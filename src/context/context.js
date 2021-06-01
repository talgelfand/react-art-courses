import React, { createContext, useState } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(["first", "second"]);
  const [wishlistItems, setWishlistItems] = useState([]);

  return (
    <Context.Provider value={{ cartItems, wishlistItems }}>
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
