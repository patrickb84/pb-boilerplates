import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='sm' fixed='top'>
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
            <LinkContainer to='/posts'>
              <Nav.Link>Posts</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
