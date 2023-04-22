import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <>
      <Navbar variant="dark" bg="dark" expand="sm">
        {/* as prop set so that the link is rendered by React Bootstrap and it links to the route defined with React Router */}
        {/* to prop set so that it loads the route when we click on the link */}
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            Home
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navigation-bar" />
          <Navbar.Collapse id="navigation-bar" className="justify-content-end">
            <Nav>
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/articles">
                Articles
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
