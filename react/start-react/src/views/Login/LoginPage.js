import { Card } from 'react-bootstrap';
import LoginForm from './LoginForm';

const LoginPage = () => {
  return (
    <div className='bg-secondary h-100 py-5 d-flex align-items-center justify-content-center'>
      <Card style={{ width: 400 }} className="mb-5">
        <Card.Body>
          <LoginForm />
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginPage;
