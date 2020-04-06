import React from 'react';
import { Nav, NavItem, Container } from 'reactstrap';
import './footer.scss';

const Footer = () => {
  return (
    <Container>
      <Nav className="footer navbar navbar-expand-sm text-center">
        <NavItem href="#">Dino Robles | Web Developer | webdino.r@gmail.com</NavItem>
      </Nav>
    </Container> 
  )
}

export default Footer;