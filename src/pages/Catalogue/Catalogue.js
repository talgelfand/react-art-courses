import React, { useEffect, useState } from "react"
import { Form, Input } from "reactstrap"
import CatalogueItem from "../../components/CatalogueItem"
import styled from "styled-components"
import { search } from "../../utils/utils"
import Title from "../../components/Title"
import app from "../../firebase"
import Loading from "../../components/Loading"

const Search = styled(Input)`
  display: block;
  margin: 0 auto;
  margin-top: 200px;
  max-width: 400px;
`

const Catalogue = () => {
  const [initialSearch, setInitialSearch] = useState("")
  const [searchParam] = useState(["title"]) // search only by title
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

  const searchedCourses = search(data, initialSearch, searchParam).map(
    (course) => {
      return <CatalogueItem key={course.id} {...course} />
    }
  )

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <Search
          type="search"
          name="search-input"
          id="search-input"
          placeholder="Search"
          value={initialSearch}
          onChange={(e) => setInitialSearch(e.target.value)}
        />
      </Form>
      {searchedCourses.length === 0 ? (
        <Title text="No courses were found" />
      ) : (
        searchedCourses
      )}
    </>
  )
}

export default Catalogue
