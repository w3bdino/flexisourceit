import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';
import './header.scss';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container>
      <Navbar light expand="md">
        <NavbarBrand href="/">Adrenalin</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Culture</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Work</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Clients</NavLink>
            </NavItem>      
            <NavItem>
              <NavLink href="/">Services</NavLink>
            </NavItem>         
            <NavItem>
              <NavLink href="/">Careers</NavLink>
            </NavItem>       
            <NavItem>
              <NavLink href="/">Contact</NavLink>
            </NavItem>                                       
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
}

export default Header;