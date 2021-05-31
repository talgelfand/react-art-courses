import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Teachers.scss";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  const fetchData = () => {
    axios.get(url).then((response) => {
      setTeachers(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const teachersList = teachers.map((teacher) => {
    return (
      <li key={teacher.id} className="teachers__item">
        <h3 className="teachers__item-title">{teacher.name}</h3>
        <p className="teachers__item-descr">
          {teacher.email}
          <br />
          {teacher.company.catchPhrase}
        </p>
      </li>
    );
  });

  return (
    <section className="teachers">
      <h1 className="teachers__title">Our teachers</h1>
      <ul className="teachers__list">{teachersList}</ul>
    </section>
  );
};

export default Teachers;
