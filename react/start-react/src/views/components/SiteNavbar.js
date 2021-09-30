import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { primaryNavs } from '../../routes';
import AccountController from '../../logic/Account.Controller';
import { Link } from 'react-router-dom';

const SiteNavbar = () => {
  const user = null;

  return (
    <Navbar bg='dark' variant='dark' expand='md' fixed='top'>
      <Container fluid>
        <Navbar.Brand href='/'>Fire Starter</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            {primaryNavs.map(route => {
              return (
                <LinkContainer exact key={route.name} to={route.path}>
                  <Nav.Link>{route.name}</Nav.Link>
                </LinkContainer>
              );
            })}
          </Nav>
          {/* {user ? <NavActiveUser /> : <NavSignIn />} */}
          <NavActiveUser />
          <NavSignIn />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const NavSignIn = () => {
  return (
    <>
      <Link className='btn btn-primary ms-2' to='/sign-in'>
        Sign In
      </Link>
    </>
  );
};

const NavActiveUser = () => {
  const { signOutUser } = AccountController();

  return (
    <Dropdown align='end' className='ms-2'>
      <Dropdown.Toggle variant='secondary' size='sm' id='dropdown-basic'>
        <i className='far fa-user fa-lg' />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href='/account'>Account</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={signOutUser}>Sign Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SiteNavbar;
