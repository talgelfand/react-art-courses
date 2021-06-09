import React, { useRef, useState, useContext } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Alert,
  Card,
  CardBody,
} from "reactstrap";
import styled from "styled-components";
import { Context } from "../../../context/context";

const StyledCard = styled(Card)`
  margin-top: 30px;
`;

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

const StyledLink = styled(Link)`
  display: block;
  margin-top: 20px;
  font-size: 15px;
  color: var(--dark-color);
  &:hover {
    color: var(--accent-color);
  }
`;

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useContext(Context);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  };

  return (
    <StyledCard>
      <CardBody>
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
          <StyledLink>Forgot password?</StyledLink>
          <StyledButton disabled={loading} type="submit">
            Log in
          </StyledButton>
        </Form>
      </CardBody>
    </StyledCard>
  );
};

export default Login;
