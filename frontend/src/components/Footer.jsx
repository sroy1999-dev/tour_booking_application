import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import {
  RiYoutubeLine,
  RiGithubFill,
  RiFacebookCircleLine,
  RiInstagramLine,
  RiMapPinLine,
  RiMailLine,
  RiPhoneFill
} from "react-icons/ri";
import "../styles/Footer.css";

const quick__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const nav__links = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem, ipsum?
              </p>
              <div className="social__media__links d-flex align-items-center gap-4">
                <span>
                  <Link to="#">
                    <RiYoutubeLine />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <RiGithubFill />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <RiFacebookCircleLine />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <RiInstagramLine />
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Discover</h5>
            <ListGroup className="footer__quick-links">
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Quick links</h5>
            <ListGroup className="footer__quick-links">
              {nav__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Contact</h5>
            <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span><RiMapPinLine /></span>
                  Address:
                </h6>
                <p className="mb-0">Mysore, Karnataka</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span><RiMailLine /></span>
                  Email:
                </h6>
                <p className="mb-0">roysuvam1999@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span><RiPhoneFill /></span>
                  Mobile:
                </h6>
                <p className="mb-0">+91 7609815319</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='12' className="text-center pt-5">
            <p className="copyright">Copyright &copy; {new Date().getFullYear()} Suvam Roy. All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
