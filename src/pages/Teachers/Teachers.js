import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/Loading";

import "./Teachers.scss";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = "https://jsonplaceholder.typicode.com/users";

  const fetchData = () => {
    axios.get(url).then((response) => {
      setTeachers(response.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const teachersList = teachers.map((teacher) => {
    const { id, name, email, company } = teacher;
    return (
      <li key={id} className="teachers__item">
        <h3 className="teachers__item-title">{name}</h3>
        <p className="teachers__item-descr">
          {email}
          <br />
          {company.catchPhrase}
        </p>
      </li>
    );
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="teachers">
      <h1 className="teachers__title">Our teachers</h1>
      <ul className="teachers__list">{teachersList}</ul>
    </section>
  );
};

export default Teachers;
