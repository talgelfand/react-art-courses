import React, { useRef, useState, useContext } from "react";
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

const PasswordReset = () => {
  const emailRef = useRef();
  const { resetPassword } = useContext(Context);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }
    setLoading(false);
  };

  return (
    <StyledCard>
      <CardBody>
        {error && <Alert color="danger">{error}</Alert>}
        {message && <Alert color="success">{message}</Alert>}
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <StyledLabel for="email">Email:</StyledLabel>
            <StyledInput innerRef={emailRef} type="email" id="email" />
          </FormGroup>
          <StyledButton disabled={loading} type="submit">
            Reset
          </StyledButton>
        </Form>
      </CardBody>
    </StyledCard>
  );
};

export default PasswordReset;
