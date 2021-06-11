import { toast } from "react-toastify"

const add = (list, course) => {
  if (!list.includes(course)) {
    toast(`Added to ${course.list === "wishlist" ? "wishlist" : "cart"}`)
    list.push(course)
  } else {
    toast.error("This course is already added")
  }
}

const remove = (list, id) => {
  list.filter((course) => course.id !== id)
}

const search = (courses, initialSearch, searchParam) => {
  return courses.filter((course) => {
    return searchParam.some((item) => {
      return (
        course[item]
          .toString()
          .toLowerCase()
          .indexOf(initialSearch.toLowerCase()) > -1
      )
    })
  })
}

export { add, remove, search }
