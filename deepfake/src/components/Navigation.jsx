import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap';


const Navigation = () => {
  return (
      <Navbar data-bs-theme="dark" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">🎮 BeatFake</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-purple font-semibold text-lg hover:text-gray-200 transition">Home</Nav.Link>
            <Nav.Link href="#features" className="text-grey  font-semibold text-lg hover:text-gray-200 transition">Features</Nav.Link>
            <Nav.Link href="#gamify" className="text-grey font-semibold text-lg hover:text-gray-200 transition">Play a Game</Nav.Link>
            <Nav.Link href="#about"className="text-grey font-semibold text-lg hover:text-gray-200 transition">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      
  
  );
}

export default Navigation;
