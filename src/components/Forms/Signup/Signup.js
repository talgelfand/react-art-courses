import React, { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
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

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useContext(Context);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/login");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <Alert color="danger">{error}</Alert>}
      <FormGroup>
        <StyledLabel for="email">Email:</StyledLabel>
        <StyledInput innerRef={emailRef} type="email" id="email" required />
      </FormGroup>
      <FormGroup>
        <StyledLabel for="password">Password:</StyledLabel>
        <StyledInput
          innerRef={passwordRef}
          type="password"
          id="password"
          required
        />
      </FormGroup>
      <FormGroup>
        <StyledLabel for="password-confirm">Password confirmation:</StyledLabel>
        <StyledInput
          innerRef={passwordConfirmRef}
          type="password"
          id="password-confirm"
          required
        />
      </FormGroup>
      <StyledButton disabled={loading} type="submit">
        Sign up
      </StyledButton>
    </Form>
  );
};

export default Signup;
