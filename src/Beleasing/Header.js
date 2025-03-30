import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

//icon

const Header = () => {
  return (
    <div>
      {/* hdr */}
      <Navbar expand="lg" className="bg-body-tertiary p-0 align-items-center shadow-lg fixed-top" >
        <Container className=''>
          <Navbar.Brand href="/" className='fs-1 me-auto text-color_hdr px-md-3 py-md-2'  style={{ fontFamily: 'MyCustomFont' }}>DriveOra</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto"></Nav>
            <Nav className="">
              <Nav.Link href="/" className=' p-md-3 bele-hov fw mt-2'>HOME</Nav.Link>
              <Nav.Link href="/terms-and-conditions" className=' p-md-3 bele-hov fw mt-2'>TERMS & CONDITION</Nav.Link>
              <NavDropdown
                title="OFFER"
                id="basic-nav-dropdown"
                className="p-md-3 bele-hov fw custom-dropdown"
              >
                <div className="custom-dropdown-menu">
                  <NavDropdown.Item href="/sedan">🚘 Sedan – Smooth & Stylish</NavDropdown.Item>
                  <NavDropdown.Item href="/hatchback">🚙 Hatchback – Compact & Efficient</NavDropdown.Item>
                  <NavDropdown.Item href="/combi">🚖 Combi – Spacious & Versatile</NavDropdown.Item>
                  <NavDropdown.Item href="/suv">🚜 SUV – Powerful & Bold</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/all-cars" className="text-warning fw-bold">
                    🔥 View All Cars
                  </NavDropdown.Item>
                </div>
              </NavDropdown>

              <Nav.Link href="/about" className=' p-md-3 bele-hov fw mt-2'>ABOUT</Nav.Link>
              <Nav.Link href="/privacy-policy" className=' p-md-3 bele-hov fw mt-2'>PRIVACY POLICY</Nav.Link>
              <Nav.Link href="/contact" className=' p-md-3 bele-hov fw mt-2'>CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header;