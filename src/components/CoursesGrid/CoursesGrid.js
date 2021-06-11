import React, { useContext } from "react"
import CourseCard from "../CourseCard/CourseCard"
import * as data from "../../data/data.json"
import styled from "styled-components"
import { Context } from "../../context/context"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { add } from "../../utils/utils"

const Section = styled.section`
  position: relative;
  margin: 0 auto;
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(4, 300px);
  justify-content: center;
  gap: 10px;
`

const CoursesGrid = () => {
  const { cartItems, wishlistItems } = useContext(Context)

  const courses = data.courses.map((course) => {
    const addToCart = () => {
      course.list = "cart"
      add(cartItems, course, "cart")
    }

    const addToWishlist = () => {
      course.list = "wishlist"
      add(wishlistItems, course)
    }

    return (
      <CourseCard
        key={course.id}
        {...course}
        addToCart={addToCart}
        addToWishlist={addToWishlist}
      />
    )
  })

  return (
    <Section>
      {courses}
      <ToastContainer />
    </Section>
  )
}

export default CoursesGrid
