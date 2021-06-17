import React, { useContext, useEffect, useState } from "react"
import { Context } from "../../context/context"
import styled from "styled-components"
import { Button } from "reactstrap"
import CartItem from "../../components/CartItem"
import { remove } from "../../utils/utils"
import Title from "../../components/Title"
import PrimaryButton from "../../components/buttons/PrimaryButton"
import { Link } from "react-router-dom"
import app, { auth } from "../../firebase"
import Loading from "../../components/Loading"
import PrimaryLink from "../../components/PrimaryLink"

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

const TotalItems = styled.h3`
  font-size: 18px;
`

const TotalPrice = styled.h2`
  margin-top: 20px;
  font-size: 20px;
`

const Wrapper = styled.div`
  display: flex;
  width: 650px;
  margin: 0 auto;
  margin-top: 40px;
  justify-content: space-between;
  align-items: center;
`

const Cart = () => {
  const { setCartItems } = useContext(Context)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  let totalPrice = 0
  const amountOfCourses = data.length

  const ref = app.firestore().collection("users")

  const getCourses = () => {
    setLoading(true)
    ref
      .doc(auth.currentUser.uid)
      .get()
      .then((doc) => {
        setData(doc.data()["cartItems"])
      })
    setLoading(false)
  }

  useEffect(() => {
    getCourses()
  }, [])

  const clearAllCourses = () => {
    ref.doc(auth.currentUser.uid).update({ cartItems: [] })
  }

  const countTotalPrice = () => {
    data.forEach((item) => {
      totalPrice += parseFloat(item.price)
    })

    return totalPrice
  }

  const courses = data.map((item) => {
    const removeItem = (id) => {
      const newItems = data.filter((item) => item.id !== id)
      // const newItems = remove(cartItems, id)
      setData(newItems)
    }

    return <CartItem key={item.id} {...item} removeItem={removeItem} />
  })

  if (loading) {
    return <Loading />
  }

  if (courses.length === 0) {
    return <Title text="No courses added to cart" />
  }

  return (
    <>
      <Section>
        {courses}
        <StyledButton color="link" onClick={clearAllCourses}>
          Clear all
        </StyledButton>
        <Wrapper>
          <div>
            <TotalItems>{`${amountOfCourses} course(s)`}</TotalItems>
            <TotalPrice>{`Total: ${countTotalPrice()} euros`}</TotalPrice>
          </div>
          {/* <PrimaryButton text="Go to checkout">
            <Link to="/checkout" />
          </PrimaryButton> */}
          <PrimaryLink path="/checkout" text="Go to checkout"></PrimaryLink>
        </Wrapper>
      </Section>
    </>
  )
}

export default Cart
