import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

//import { useLogout } from '../hooks/useLogout'
//import { useAuthContext } from '../hooks/useAuthContext'



function CustomNav() {
  // const { user } = useAuthContext()
  // const { logout } = useLogout()
  // const handleClick = () => {
  //   logout()
  // }
  return (
    <Navbar expand="md" sticky="top" className="nav">
      <Container>
        <Navbar.Brand href="/" className="navHeader">Tide Together</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} className="navLink" to="/">Home</Nav.Link>
            <Nav.Link as={Link} className="navLink" to="/about">About</Nav.Link>
            <Nav.Link as={Link} className="navLink" to="/conservation">Conservation</Nav.Link>
            <Nav.Link as={Link} className="navLink" to="/contact">Contact</Nav.Link>
            <NavDropdown title="Sponsor" id="basic-nav-dropdown" className="navLink">
              <NavDropdown.Item className="sponsDropDown"as={Link} to="/tiers">Tiers</NavDropdown.Item>
              <NavDropdown.Item className="sponsDropDown"as={Link} to="/sponsor">Sponsorship</NavDropdown.Item>
            </NavDropdown>
            {/* {user ? <div>
              <button onClick={handleClick}>Log Out</button>
            </div> : ''} */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNav;