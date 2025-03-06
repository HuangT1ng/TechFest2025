import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';


import './css/Footer.css'; // Import CSS for styling

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="footer fixed-bottom">
      <Container>
        <Nav className="mr-auto">
          <Nav.Link href="#">License</Nav.Link>
          <Nav.Link href="#">Copyright © {new Date().getFullYear()} MyDeepEye</Nav.Link>
          <Nav.Link href="#">Terms of Service</Nav.Link>
          <Nav.Link href="#">Privacy Policy</Nav.Link>
        </Nav>
        
        <hr className="footer-divider" />
        <p className="text-center mt-3 mb-0">Connect with us on social media</p>
      </Container>
    </Navbar>
  );
};

export default Footer;