import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../../assets/images/logo-bg-si-min.png";
import ContactModal from "../../pages/contact/Contact";
import "./NavBar.css";
export default function NavBar() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Navbar
      variant="dark"
      expand="lg"
      className="bg-bg-dark fixed-top"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse.show"
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand>
          <NavLink className="nav-link" to="/">
            <img
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top logo-header"
              alt="Logo BG SHOOTING INSTRUCTION"
              title="Logo BG SHOOTING INSTRUCTION"
            />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>

            <LinkContainer to="testimonials">
              <Nav.Link>Testimonials</Nav.Link>
            </LinkContainer>

            {/* <NavLink className="nav-link" to="/">
              Home
            </NavLink> */}
            {/* <NavLink className="nav-link" to="about">
              About
            </NavLink>
            <NavLink className="nav-link" to="testimonials">
              Testimonials
            </NavLink> */}

            <span
              className="nav-link modal-contact"
              onClick={() => setModalShow(true)}
            >
              Contact
            </span>
          </Nav>
        </Navbar.Collapse>

        <ContactModal show={modalShow} onHide={() => setModalShow(false)} />
      </Container>
    </Navbar>
  );
}
