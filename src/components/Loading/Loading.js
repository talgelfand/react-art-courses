import React from "react";
import { Spinner } from "reactstrap";

import "./Loading.scss";

const Loading = () => {
  return (
    <section className="loading">
      <Spinner
        type="grow"
        color="primary"
        className="loading__spinner"
        children=""
      />
      <Spinner
        type="grow"
        color="primary"
        className="loading__spinner"
        children=""
      />
      <Spinner
        type="grow"
        color="primary"
        className="loading__spinner"
        children=""
      />
    </section>
  );
};

export default Loading;
