import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import routes from "../routes";

const SiteNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>App Brand</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {routes.map((route) => {
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
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SiteNavbar;
