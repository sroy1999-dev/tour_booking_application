import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../styles/Footer.css';

const quick__links = [
  {
    path: "/home",
    display: "Home"
  },
  {
    path: "/about",
    display: "About"
  },
  {
    path: "/tours",
    display: "Tours"
  }
]

const nav__links = [
  {
    path: "/gallery",
    display: "Gallery"
  },
  {
    path: "/login",
    display: "Login"
  },
  {
    path: "/register",
    display: "Register"
  }
]

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='3'>
            <div className="logo">
              <img src={logo} alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, ipsum?</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;