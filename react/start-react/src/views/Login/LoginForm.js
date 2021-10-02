import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useAppContext } from '../../providers/AppContextProvider';

const LoginForm = () => {
  const { login } = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    setError(null);
    try {
      login(email, password);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <Form>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type='email'
          placeholder='Enter email'
          onChange={e => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Password'
          onChange={e => setPassword(e.target.value)}
        />
      </Form.Group>

      {error && <div className='small mb-3 text-danger'>{error.message}</div>}

      <Button variant='primary' onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;
