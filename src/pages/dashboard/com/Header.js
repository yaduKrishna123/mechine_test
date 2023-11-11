import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './header.css'

function Header() {
  return (
    <div>
      
      <div className="box">

      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img
              src="https://en.wikialpha.org/mediawiki/images/archive/7/7b/20230802052529%21The_Canadian_Home.png"
              alt="Tch horizondal logo"
              className="TCH-horizondal-logo ms-5"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* Add your navigation links here */}
            </Nav>
            <Nav>
              <Nav.Link href="tel:+19052061444">
                <i className="fa-solid fa-phone" style={{ color: 'blue' }}></i>
                +1 (905) 206-1444
                <p className="text-warperheader"></p> 
              </Nav.Link>
              <Nav.Link href="mailto:your@email.com">
                <i className="fa-regular fa-envelope" style={{ color: 'blue' }}></i><p className="text-warperheader">
               &nbsp; your@email.com</p> 
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



      </div>
      
    </div>
  )
}

export default Header