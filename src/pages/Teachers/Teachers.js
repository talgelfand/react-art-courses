import React from "react";

import "./Teachers.scss";

const Teachers = () => {
  return (
    <section className="teachers">
      <h1 className="teachers__title">Our teachers</h1>
      <h2 className="teachers__subtitle">
        Here will be the list of teachers rendered from teachers.json
      </h2>
      <ul className="teachers__list">
        <li className="teachers__item">
          <h3 className="teachers__item-title">John Doe</h3>
          <p className="teachers__item-descr">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            repellendus deleniti cupiditate autem quisquam id vel reprehenderit
            maiores quam, tempora, unde quia vero eius sequi excepturi placeat
            dolores a nisi?
          </p>
        </li>
        <li className="teachers__item">
          {" "}
          <h3 className="teachers__item-title">John Doe</h3>
          <p className="teachers__item-descr">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            repellendus deleniti cupiditate autem quisquam id vel reprehenderit
            maiores quam, tempora, unde quia vero eius sequi excepturi placeat
            dolores a nisi?
          </p>
        </li>
        <li className="teachers__item">
          {" "}
          <h3 className="teachers__item-title">John Doe</h3>
          <p className="teachers__item-descr">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            repellendus deleniti cupiditate autem quisquam id vel reprehenderit
            maiores quam, tempora, unde quia vero eius sequi excepturi placeat
            dolores a nisi?
          </p>
        </li>
        <li className="teachers__item">
          {" "}
          <h3 className="teachers__item-title">John Doe</h3>
          <p className="teachers__item-descr">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            repellendus deleniti cupiditate autem quisquam id vel reprehenderit
            maiores quam, tempora, unde quia vero eius sequi excepturi placeat
            dolores a nisi?
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Teachers;
