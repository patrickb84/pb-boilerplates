import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { useAppContext } from '../providers/AppContextProvider';

const NavBar = () => {
  const { user, logout } = useAppContext();

  return (
    <Navbar bg='dark' variant='dark' expand='md' fixed='top'>
      <Container fluid>
        <Navbar.Brand href='/'>
          <i className='fa-solid fa-cat-space' /> Notebook
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto me-1'>
            <LinkContainer to='/' exact>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to='/login'>
              <Nav.Link>Login</Nav.Link>
            </LinkContainer> */}
            <LinkContainer to='/posts'>
              <Nav.Link>Posts</Nav.Link>
            </LinkContainer>
          </Nav>

          {!user ? (
            <Link to='/login' className='btn btn-primary'>
              Login
            </Link>
          ) : (
            <Button variant='secondary' onClick={logout}>
              Logout
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
