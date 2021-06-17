import React, { useContext, useEffect, useState } from "react"
import { Context } from "../../context/context"
import styled from "styled-components"
import WishlistItem from "../../components/WishlistItem"
import { Button } from "reactstrap"
import Title from "../../components/Title"
import app, { auth } from "../../firebase"
import Loading from "../../components/Loading"

const Section = styled.section`
  margin-top: 200px;
`

const StyledButton = styled(Button)`
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  font-size: 22px;
  color: var(--dark-color);
  &:hover {
    color: var(--accent-color);
  }
`

const Wishlist = () => {
  const { wishlistItems, setWishlistItems } = useContext(Context)

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const ref = app.firestore().collection("users")

  const getCourses = () => {
    setLoading(true)
    ref
      .doc(auth.currentUser.uid)
      .get()
      .then((doc) => {
        setData(doc.data()["wishlistItems"])
      })
    setLoading(false)
  }

  useEffect(() => {
    getCourses()
  }, [])

  const clearAllCourses = () => {
    setWishlistItems([])
  }

  const courses = data.map((item) => {
    const removeItem = (id) => {
      const newItems = wishlistItems.filter((item) => item.id !== id)
      setWishlistItems(newItems)
    }

    return <WishlistItem key={item.id} {...item} removeItem={removeItem} />
  })

  if (loading) {
    return <Loading />
  }

  if (courses.length === 0) {
    return <Title text="No courses saved to wishlist" />
  }

  return (
    <Section>
      {courses}
      <StyledButton color="link" onClick={clearAllCourses}>
        Clear all
      </StyledButton>
    </Section>
  )
}

export default Wishlist
