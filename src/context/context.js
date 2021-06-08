import React, { createContext, useEffect, useState } from "react";
import { auth } from "..";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <Context.Provider
      value={{
        cartItems,
        wishlistItems,
        setCartItems,
        setWishlistItems,
        signup,
        login,
        currentUser,
      }}
    >
      {!loading && children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
