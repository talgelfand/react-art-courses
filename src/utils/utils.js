import { toast } from "react-toastify";

// const { cartItems, wishlistItems } = useContext(Context);

// const addToCart = (course) => {
//   if (!cartItems.includes(course)) {
//     toast.info("Added to cart");
//     cartItems.push(course);
//   } else {
//     toast.error("This course is already in the cart");
//   }
// };

const add = (list, course) => {
  if (!list.includes(course)) {
    toast("Added");
    list.push(course);
  } else {
    toast.error("This course is already added");
  }
};

const remove = (list, id) => {
  list.filter((course) => course.id !== id);
};

const search = (courses, initialSearch, searchParam) => {
  return courses.filter((course) => {
    return searchParam.some((item) => {
      return (
        course[item]
          .toString()
          .toLowerCase()
          .indexOf(initialSearch.toLowerCase()) > -1
      );
    });
  });
};

export { add, remove, search };
