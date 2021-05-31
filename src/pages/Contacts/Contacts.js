import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

import "./Contacts.scss";

const Contacts = () => {
  return (
    <section className="contacts">
      <h1 className="contacts__title">Contact us</h1>
      <h2>Here will be a contact form</h2>
      <Card className="contacts__card">
        <CardBody>
          <CardTitle>Contact Details</CardTitle>
          <ul>
            <li>
              <span>E-mail: </span>
              <a href="mailto: artacademy@gmail.com">art.academy@gmail.com</a>
            </li>
            <li>
              <span>Phone: </span> <a href="tel:+37122345678">+371 22345678</a>
            </li>
            <li>
              <span>Instagram: </span> @artacademy
            </li>
            <li>
              <span>Facebook: </span> Art Academy
            </li>
          </ul>
        </CardBody>
      </Card>
    </section>
  );
};

export default Contacts;
