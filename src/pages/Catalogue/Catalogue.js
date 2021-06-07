import React, { useState } from "react";
import { Form, Input } from "reactstrap";
import CatalogueItem from "../../components/CatalogueItem";
import * as data from "../../data/data.json";
import styled from "styled-components";
import { search } from "../../utils/utils";

const Search = styled(Input)`
  display: block;
  margin: 0 auto;
  margin-top: 200px;
  max-width: 400px;
`;

const Title = styled.h1`
  margin-top: 100px;
  text-align: center;
  color: var(--dark-color);
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
    <section className="catalogue">
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
        <Title>No courses were found</Title>
      ) : (
        searchedCourses
      )}
    </section>
  );
};

export default Catalogue;
