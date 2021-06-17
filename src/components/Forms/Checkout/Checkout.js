import { CardElement, ElementsConsumer } from "@stripe/react-stripe-js"
import React, { useEffect, useState } from "react"
import { Form } from "reactstrap"
import app from "../../../firebase"
import PrimaryButton from "../../buttons/PrimaryButton"
import CardSection from "../../CardSection"
import CartItem from "../../CartItem"
import Loading from "../../Loading"

const Checkout = ({ stripe, elements }) => {
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

  const courses = data.map((course) => {
    return <CartItem key={course.id} {...course} />
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement)
    const result = await stripe.createToken(card)
    if (result.error) {
      console.error(result.error.message)
    } else {
      console.info(result.token)
    }
  }

  if (loading) {
    return <Loading />
  }

  return (
    <>
      {courses}
      <Form onSubmit={handleSubmit}>
        <CardSection />
        <PrimaryButton margintop centered text="Buy now" />
      </Form>
    </>
  )
}

const InjectedCheckout = () => {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <Checkout stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  )
}

export default InjectedCheckout
