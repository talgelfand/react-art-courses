const add = (list, course) => {
  list.push(course);
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
