import React, { useRef, useState, useContext } from "react";
import { Redirect } from "react-router";
import { Form, FormGroup, Input, Label, Button, Alert } from "reactstrap";
import styled from "styled-components";
import { Context } from "../../../context/context";

const StyledLabel = styled(Label)`
  margin-top: 20px;
`;

const StyledInput = styled(Input)`
  margin-top: 10px;
`;

const StyledButton = styled(Button)`
  display: block;
  margin: 0 auto;
  margin-top: 30px;
  background-color: var(--accent-color);
  border: var(--accent-color);
`;

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useContext(Context);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      return <Redirect to="/" />;
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <Alert color="danger">{error}</Alert>}
      <FormGroup>
        <StyledLabel for="email">Email:</StyledLabel>
        <StyledInput innerRef={emailRef} type="email" id="email" />
      </FormGroup>
      <FormGroup>
        <StyledLabel for="password">Password:</StyledLabel>
        <StyledInput innerRef={passwordRef} type="password" id="password" />
      </FormGroup>
      <StyledButton disabled={loading} type="submit">
        Log in
      </StyledButton>
    </Form>
  );
};

export default Login;
