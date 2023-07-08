import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import heroImage01 from '../assets/images/hero-img01.jpg';
import heroImage02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImage from '../assets/images/world.png';
import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import '../styles/Home.css';

const Home = () => {
  return (
    <>
      {/*-----------------hero section------------------*/}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Know before you go'} />
                  <img src={worldImage} alt="" />
                </div>
                <h1>Travelling opens doors to creating <span className='highlight'>memories</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam consequuntur pariatur qui error velit iure officia excepturi, et illum maiores aliquam consectetur dolor assumenda atque! Autem voluptatem perspiciatis ducimus quia?</p>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImage01} alt="" />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-4">
                <video src={heroVideo} autoPlay loop muted alt="" />
              </div>
            </Col>
            <Col lg='2'>
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
            <Col lg='3'>
              <h5 className='services__subtitle'>What we serve</h5>
              <h2 className='services__title'>We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/*-------------------featured tour section start----------------*/}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={'Explore'} />
              <h2 className='featured__tour-title'>Our featured tours</h2>
            </Col>
          </Row>
        </Container>
      </section>
      {/*-------------------featured tour section end------------------*/}
    </>
  )
}

export default Home;