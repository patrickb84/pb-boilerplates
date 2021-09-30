import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import AccountController from '../../logic/Account.Controller';

const Login = () => {
  const { signInEmail, activeUser } = AccountController();
  let history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    try {
      signInEmail(email, password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='py-5 h-100 bg-dark'>
      <div className='my-4 h-100 d-flex align-items-center justify-content-center'>
        <div>
          <div className='card card-body mb-5' style={{ width: '500px' }}>
            {activeUser && <small className="bg-light">{activeUser.email}</small>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  onChange={e => setEmail(e.target.value)}
                />
                <Form.Text className='text-muted'>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  onChange={e => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                <Form.Check type='checkbox' label='Check me out' />
              </Form.Group>
              <Button variant='primary' type='submit'>
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
