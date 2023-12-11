import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar() {
  return (
    <div>
      <Navbar bg="#dae2f8" expand="lg" style={{backgroundColor:'Beige',fontSize:'larger'}} >
        <Container fluid>
          <Link to="/" className="Logo">
            <img
              alt=""
              src="/images/Logo.jpg"
              width="100"
              height="100"
              backgroundColor="Beige"
              className="d-inline-block align-top logo-image navBarLogoImg"
            />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 navbar-nav-scroll">
              <Nav.Link as={Link} to="/" className="Links navBarItemStyle">
                HOME
              </Nav.Link>
              <Nav.Link as={Link} to="/Pets" className="Links navBarItemStyle">
                PETS
              </Nav.Link>
              <Nav.Link as={Link} to="/Adopt" className="Links navBarItemStyle">
                ADOPT
              </Nav.Link>
             
              <Nav.Link  href="#aboutSection" className="Links navBarItemStyle">
                ABOUT US
              </Nav.Link>
              
            </Nav>
            <Nav className='loginButton'>
              <Nav.Link as={Link} to="/Login" className="btn">
                LOGIN / REGISTER
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
