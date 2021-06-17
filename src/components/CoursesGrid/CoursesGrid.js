import React, { useContext, useEffect, useState } from "react"
import CourseCard from "../CourseCard/CourseCard"
import styled from "styled-components"
import { Context } from "../../context/context"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { add } from "../../utils/utils"
import Loading from "../Loading"
import app from "../../firebase"

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
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const ref = app.firestore().collection("courses")

  const getCourses = () => {
    setLoading(true)
    ref.onSnapshot((querySnapshot) => {
      const courses = []
      querySnapshot.forEach((doc) => {
        courses.push(doc.data())
      })

      setData(courses)
      setLoading(false)
    })
  }

  useEffect(() => {
    getCourses()
  }, [])

  console.table(data)

  if (loading) {
    return <Loading />
  }

  const courses = data.map((course) => {
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
      {courses || <Loading />}
      <ToastContainer />
    </Section>
  )
}

export default CoursesGrid
