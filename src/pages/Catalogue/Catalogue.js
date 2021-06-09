import React, { useState } from "react";
import { Form, Input } from "reactstrap";
import CatalogueItem from "../../components/CatalogueItem";
import * as data from "../../data/data.json";
import styled from "styled-components";
import { search } from "../../utils/utils";
import Title from "../../components/Title";

const Search = styled(Input)`
  display: block;
  margin: 0 auto;
  margin-top: 200px;
  max-width: 400px;
`;

const Catalogue = () => {
  const [initialSearch, setInitialSearch] = useState("");
  const [searchParam] = useState(["title"]); // search only by title

  const searchedCourses = search(data.courses, initialSearch, searchParam).map(
    (course) => {
      return <CatalogueItem key={course.id} {...course} />;
    }
  );

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
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
  );
};

export default Catalogue;
