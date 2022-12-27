import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import propTypes from 'prop-types';

export default function header(props) {
  return (
    <div>
            <Navbar bg="black" variant="dark">
        <Container>
          <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">{props.navItem1}</Nav.Link>
            <Nav.Link href="#features">{props.navItem2}</Nav.Link>
            <Nav.Link href="#pricing">{props.navItem3}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

header.propTypes = {
  title: propTypes.string.isRequired,
  navItem1: propTypes.string.isRequired,
  navItem2: propTypes.string.isRequired,
  navItem3: propTypes.string.isRequired,
}

header.defaultProps = {
  title: 'Set Title here',
  navItem1: "Add Nav Item",
  navItem2: "Add Nav Item",
  navItem3: "Add Nav Item",

}

