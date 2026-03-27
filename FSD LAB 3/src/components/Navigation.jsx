import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="py-3 shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-4">
          <span className="text-primary">&lt;</span>
          DeveloperPortfolio
          <span className="text-primary">/&gt;</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3">
            <Nav.Link href="#home" className="fw-semibold">Home</Nav.Link>
            <Nav.Link href="#projects" className="fw-semibold">Projects</Nav.Link>
            <Nav.Link href="#contact" className="fw-semibold">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
