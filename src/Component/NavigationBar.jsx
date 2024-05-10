import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar expand="lg" className="navbar navbar-dark NavBar ">
      <Container>
        <img src="Logo.png" alt="Logo" width="100" height="100" className="d-inline-block align-top" />
        <Navbar.Brand href="/">Roll the Dice</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavigationBar;
