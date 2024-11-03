import React from "react";
import { Navbar, Nav, Form, FormControl, Button, Dropdown } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";

import img1 from '../../src/image/ar.png'

const Header = () => {
  return (
    <Navbar  expand="lg" className="p-2" style={{backgroundColor:"#1e1f52"}}>
      {/* Left side - Company Logo and Name */}
      <Navbar.Brand href="/">
        <img
          src={img1}
          width="100"
          height="20"
          className="d-inline-block align-top mt-2"
          alt="Company Logo"
        />
       
      </Navbar.Brand>

      {/* Toggle button for mobile */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      {/* Center and Right side */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto w-100 d-flex justify-content-between">
          {/* Center - Search bar */}
          <Form className="d-flex mx-auto w-40">
            <FormControl 
              type="search"
              placeholder="Enter product name"
              className="me-2 fs-7"
              aria-label="Search"
            />
            {/* Make search button smaller */}
            <Button variant="outline-info" className="px-2 text-white" style={{width:'25%'}}>
              Search
            </Button>
          </Form>

          {/* Right side - Cart and Profile Icons */}
          <div className="d-flex align-items-center">
            {/* Cart Button */}
            <Button variant="outline-light" className="me-3">
              <FaShoppingCart size={16} />
            </Button>

            {/* Profile Dropdown */}
            <Dropdown align="end">
              <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                <FaUser size={16} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="">Profile</Dropdown.Item>
                <Dropdown.Item href="/login">Sign In </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="/signup">Sign up</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
