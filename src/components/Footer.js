import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <Container>
        <footer className="py-3 my-4">
          <Nav className="justify-content-center mb-3">
            <Nav.Link>
              <Link to='/' className="nav-link text-body-secondary">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/about' className="nav-link text-body-secondary">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/conservation' className="nav-link text-body-secondary">Conservation</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/contact' className="nav-link text-body-secondary">Contact</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/sponsor' className="nav-link text-body-secondary">Sponsor</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/acknowledgements' className="nav-link text-body-secondary">Acknowledgements</Link>
            </Nav.Link>
          </Nav>
          <hr/>
          
          <p className="text-center text-body-secondary">&copy; 2024 Tide Together, Inc</p>
        </footer>
      </Container>
    </footer>
  );
}

export default Footer;
