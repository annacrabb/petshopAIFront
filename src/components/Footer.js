import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bluecrab from '../assets/bluecrab.png'; 

function Footer() {
  return (
    <footer>
      <Container>
        <footer className="my-4">
          <Nav className="justify-content-center">
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
          <div className="text-center">
            <Nav.Link as={Link} to='/admin'>
              <img src={bluecrab} alt="Tide Together Trademark" style={{ maxWidth: '100px' }} />
            </Nav.Link>
          </div>
        </footer>
      </Container>
    </footer>
  );
}

export default Footer;
