import React, { useContext, useEffect, useState } from "react"
import { Redirect, useParams } from "react-router-dom"
import { Context } from "../../context/context"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Title from "../../components/Title"
import PrimaryButton from "../../components/buttons/PrimaryButton"
import { add } from "../../utils/utils"
import styled from "styled-components"
import app from "../../firebase"
import Loading from "../../components/Loading"

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  width: 1000px;
  margin: 0 auto;
  margin-top: 50px;
  justify-content: space-between;
  align-items: stretch;
`

const Image = styled.img`
  width: 400px;
  object-fit: cover;
`

const Span = styled.span`
  font-weight: bold;
`

const Subtitle = styled.h2`
  font-weight: normal;
  font-size: 20px;
`
const Text = styled.p`
  margin-top: 20px;
`

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`

const SingleCourse = () => {
  const { myCourses, user } = useContext(Context)
  const [course, setCourse] = useState({})
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  const { cartItems, wishlistItems } = useContext(Context)

  const ref = app.firestore().collection("courses")

  const getCourse = () => {
    setLoading(true)
    ref
      .doc(id)
      .get()
      .then((doc) => {
        setCourse(doc.data())
        setLoading(false)
      })
  }

  useEffect(() => {
    getCourse()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!course) {
    return <Redirect to="/error" />
  }

  const addToCart = () => {
    course.list = "cart"
    add(cartItems, myCourses, course, user)
  }

  const addToWishlist = () => {
    course.list = "wishlist"
    add(wishlistItems, myCourses, course, user)
  }

  if (loading) {
    return <Loading />
  }

  const { title, image, duration, requirements, price } = course

  return (
    <>
      <Title text={title} />
      <Content>
        <Image src={image} alt={title} />
        <div>
          <Subtitle>
            <Span>Duration: </Span>
            {duration}
          </Subtitle>
          <Subtitle>
            <Span>Requirements: </Span>
            {requirements || "none"}
          </Subtitle>
          <Subtitle>
            <Span>Price: </Span>
            {`${price} euros`}
          </Subtitle>
          <Text>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? But who has any right to find fault with a man
            who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultant pleasure?
          </Text>
          <Wrapper>
            <PrimaryButton text="Add to cart" clickEvent={addToCart} />
            <PrimaryButton text="Add to wishlist" clickEvent={addToWishlist} />
          </Wrapper>
        </div>
      </Content>
      <ToastContainer />
    </>
  )
}

export default SingleCourse
