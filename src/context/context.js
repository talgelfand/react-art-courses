import React, { createContext, useEffect, useState } from "react";
import { auth } from "..";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
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
        logout,
        resetPassword,
        phone,
        name,
        artist,
        setPhone,
        setName,
        setArtist,
      }}
    >
      {!loading && children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
