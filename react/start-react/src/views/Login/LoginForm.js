import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useAppContext } from "../../providers/AppContextProvider";

const LoginForm = () => {
  const appContext = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      appContext.login(email, password);
    } catch (error) {
      if (error.code === "INCORRECT_PASSWORD") {
        console.error(error.message);
        return;
      }
      if (error.code === "INCORRECT_EMAIL") {
        console.error(error.message);
        return;
      }
      console.error("Undefined error.", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;
