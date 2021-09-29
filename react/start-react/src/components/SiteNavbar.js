import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { primaryNavs } from "../routes";
import AccountController from "../controllers/Account.Controller";

const SiteNavbar = () => {
  const { signOut } = AccountController();

  return (
    <Navbar bg="dark" variant="dark" expand="md" fixed="top">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>App Brand</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {primaryNavs.map((route) => {
              return (
                <LinkContainer
                  key={route.name}
                  to={route.path}
                  exact={route.exact}
                >
                  <Nav.Link>{route.name}</Nav.Link>
                </LinkContainer>
              );
            })}
          </Nav>

          <LinkContainer to="/sign-in">
            <Button variant="primary" className="ms-2">
              Sign In
            </Button>
          </LinkContainer>
          <Button variant="secondary" onClick={signOut} className="ms-1">
            Sign Out
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SiteNavbar;
