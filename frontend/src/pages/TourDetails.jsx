import React, { useRef, useState } from "react";
import "../styles/TourDetails.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import tours from "../assets/data/tours";
import calculateAvgrating from "../utilities/avgRating";
import { AiFillStar } from "react-icons/ai";
import { RiMapPinUserFill, RiMapPin2Line, RiMoneyDollarCircleLine, RiGroupLine, RiMapPinTimeLine } from 'react-icons/ri';
import avatar from '../assets/images/avatar.jpg';
import Booking from "../components/Booking";

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(null);
  const tour = tours.find((tour) => tour.id === id);
  const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } =
    tour;
  const { totalRating, avgRating } = calculateAvgrating(reviews);
  const options = { day: "numeric", month: "long", year: "numeric"};
  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
    //later api call will take place
    alert(`${reviewText}, ${tourRating}`);
  }
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour__content">
                <img src={photo} alt="" />
                <div className="tour__info">
                  <h2>{title}</h2>
                  <div className="d-flex align-items-center gap-5">
                    <span className="tour__rating d-flex align-items-center gap-1">
                      <AiFillStar className="star" />{" "}
                      {calculateAvgrating.avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? (
                        "Not rated"
                      ) : (
                        <span>({reviews.length})</span>
                      )}
                    </span>
                    <span>
                      <RiMapPinUserFill /> {address}
                    </span>
                  </div>
                  <div className="tour__extra-details">
                    <span><RiMapPin2Line /> {city}</span>
                    <span><RiMoneyDollarCircleLine /> ${price}/per person</span>
                    <span><RiMapPinTimeLine />{distance} km</span>
                    <span><RiGroupLine /> {maxGroupSize}</span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>
                {/*====================tour review section start=================*/}
                <div className="tour__reviews mt-4">
                  <h4>Reviews ({reviews.length} reviews)</h4>
                  <Form onSubmit={handleSubmit}>
                    <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                      <span onClick={() => setTourRating(1)}>1 <AiFillStar /></span>
                      <span onClick={() => setTourRating(2)}>2 <AiFillStar /></span>
                      <span onClick={() => setTourRating(3)}>3 <AiFillStar /></span>
                      <span onClick={() => setTourRating(4)}>4 <AiFillStar /></span>
                      <span onClick={() => setTourRating(5)}>5 <AiFillStar /></span>
                    </div>
                    <div className="review__input">
                      <input type="text" ref={reviewMsgRef} placeholder="Share your reviews" required />
                      <button className="btn primary__btn text-white">Submit</button>
                    </div>
                  </Form>
                  <ListGroup className="user__reviews">
                    {
                      reviews.map(review => (
                        <div className="review__item">
                          <img src={avatar} alt="" />
                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5>Suvam</h5>
                                <p>
                                  {
                                    new Date().toLocaleDateString("en-US", options)
                                  }
                                </p>
                              </div>
                              <span className="d-flex align-items-center">
                                5<AiFillStar className="star" style={{color:"#faa935", fontSize: "1rem"}} />
                              </span>
                            </div>
                            <h6>Amazing tour</h6>
                          </div>
                        </div>
                      ))
                    }
                  </ListGroup>
                </div>
                {/*====================tour review section end=================*/}
              </div>
            </Col>
            <Col lg='4'>
              <Booking tour={tour} avgRating={avgRating} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TourDetails;
