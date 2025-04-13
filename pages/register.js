'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/lib/authenticate";
import { Button, Form, Alert, Card } from "react-bootstrap";

export default function Register() {
  const router = useRouter();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [warning, setWarning] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await registerUser(userName, password, password2);
      router.push("/login");
    } catch (err) {
      setWarning(err.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card className="mt-5">
      <Card.Body>
        <h2>Register</h2>
        <p>Register for an account:</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="userName">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              disabled={isSubmitting}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isSubmitting}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password2">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              disabled={isSubmitting}
              required
            />
          </Form.Group>

          {warning && (
            <Alert variant="danger">
              {warning}
            </Alert>
          )}

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Registering..." : "Register"}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
