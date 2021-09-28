import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import AccountController from "../../controllers/Account.Controller";

const Login = () => {
  const { signInEmail } = AccountController();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let user = await signInEmail(email, password);
      console.log(await user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="py-5 h-100 bg-dark">
      <div className="my-4 h-100 d-flex align-items-center justify-content-center">
        <div>
          <div className="card card-body mb-5" style={{ width: "500px" }}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
