import React, { createContext, useEffect, useState } from "react"
import app, { auth } from "../firebase"
import firebase from "firebase/app"

const Context = createContext()

const ContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [wishlistItems, setWishlistItems] = useState([])
  const [currentUser, setCurrentUser] = useState()
  // const [currentUser, setCurrentUser] = useState({
  //   cartItems: [],
  //   wishlistItems: [],
  //   myCourses: [],
  //   info: { phone: "", name: "", artist: "" },
  // })
  const [authLoading, setAuthLoading] = useState(true)
  const [phone, setPhone] = useState("")
  const [name, setName] = useState("")
  const [artist, setArtist] = useState("")

  const ref = firebase.firestore().collection("users")

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password).then((cred) => {
      return ref.doc(cred.user.uid).set({
        email: email,
        phone: phone,
        name: name,
        artist: artist,
        cartItems: cartItems,
        wishlistItems: wishlistItems,
      })
    })
  }

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
  }

  const logout = () => {
    return auth.signOut()
  }

  const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
      setAuthLoading(false)
    })

    return unsubscribe
  }, [])

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
      {!authLoading && children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }
