import React, { useState } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSelect = (eventKey) => {
    // Handle selection logic based on eventKey
    console.log('Selected item:', eventKey);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="../src/image/logo-moboom.png" // Adjust the path to your logo
            alt="MoBooM"
            className="h-12"
            style={{ height: '20px' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">All Products</Nav.Link>
            <NavDropdown
              title="Categories"
              id="basic-nav-dropdown"
              show={dropdownOpen}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
              onSelect={handleSelect}
            >
              <NavDropdown.Item eventKey="casual_sneakers">Casual Sneakers</NavDropdown.Item>
              <NavDropdown.Item eventKey="laptops">Laptops</NavDropdown.Item>
              <NavDropdown.Item eventKey="fragrances">Fragrances</NavDropdown.Item>
              <NavDropdown.Item eventKey="home_decor">Home Decor</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#store">Store</Nav.Link>
            <Nav.Link href="#account">Account</Nav.Link>
            <Nav.Link href="#wishlist">Wish List</Nav.Link>
            <Nav.Link href="#basket">
            Basket <i className="fa fa-shopping-basket"></i> 
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
