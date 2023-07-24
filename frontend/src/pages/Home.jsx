import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Counter from "react-number-counter";
import heroImage01 from "../assets/images/hero-img01.jpg";
import heroImage02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImage from "../assets/images/world.png";
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../featured-tours/FeaturedTourList";
import experienceImg from "../assets/images/experience.png";
import MasonryImage from "../image-gallery/MasonryImage";
import Testimonial from "../Testimonial/Testimonial";
import NewsLetter from "../shared/NewsLetter";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      {/*-----------------hero section------------------*/}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know before you go"} />
                  <img src={worldImage} alt="" />
                </div>
                <h1>
                  Travelling opens doors to creating{" "}
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ullam consequuntur pariatur qui error velit iure officia
                  excepturi, et illum maiores aliquam consectetur dolor
                  assumenda atque! Autem voluptatem perspiciatis ducimus quia?
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImage01} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} autoPlay loop muted alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImage02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/*-----------------hero section end---------------*/}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/*-------------------featured tour section start----------------*/}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/*-------------------featured tour section end------------------*/}
      {/*-------------------experience section------------------------ */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With all our experience <br />
                  we will serve you
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
                  <br />
                  Cupiditate nulla quia non officia numquam minus expedita quos
                  similique, odit animi!
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>
                    <Counter start={0} end={20} delay={200} repeat />k
                  </span>
                  <h6>Successful trips</h6>
                </div>
                <div className="counter__box">
                  <span>
                    <Counter start={0} end={10} delay={200} repeat />k
                  </span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>
                    <Counter start={0} end={25} delay={200} repeat />
                  </span>
                  <h6>Years of experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/*-------------------experience section end-------------------- */}
      {/*-------------------gallery section start-----------------------*/}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">Visit our customers' gallery</h2>
            </Col>
            <Col lg="12">
              <MasonryImage />
            </Col>
          </Row>
        </Container>
      </section>
      {/*-------------------gallery section end-----------------------*/}
      {/*-------------------testimonial section start---------------- */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={`Fans' love`} />
              <h2 className="testimonials__title">What do our fans say about us</h2>
            </Col>
            <Col lg='12'>
              <Testimonial />
            </Col>
          </Row>
        </Container>
      </section>
      {/*-------------------testimonial section end------------------ */}
      {/*-------------------Newsletter section start----------------- */}
      <NewsLetter />
      {/*-------------------Newsletter section end------------------- */}
    </>
  );
};

export default Home;
