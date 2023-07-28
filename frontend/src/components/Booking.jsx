import React, { useState } from "react";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useNavigate } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import { RiCloseLine } from 'react-icons/ri';
import "../styles/Booking.css";
import calculateAvgrating from "../utilities/avgRating";

const Booking = ({ tour, avgRating }) => {
  const { price, reviews } = tour;
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    userId:'01',
    email: 'example@gmail.com',
    fullname: '',
    mobile: '',
    bookAt: '',
    guestSize:1,
  });
  const handleOnChange = (e) => {
    setCredentials(prev => ({
      ...prev,
      [e.target.id]:e.target.value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
    navigate('/thank-you');
  }
  const serviceFee = 10;
  const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFee);
  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          ${price} <span>/person</span>
        </h3>
        <span className="tour__rating d-flex align-items-center gap-1">
          <AiFillStar className="star" />{" "}
          {calculateAvgrating.avgRating === 0 ? null : avgRating} ({reviews.length})
        </span>
      </div>
      {/*=====================booking form start========================== */}
      <div className="booking__form">
        <h5>Details</h5>
        <Form className="booking__info-form" onSubmit={handleSubmit}>
            <FormGroup>
                <input type="text" placeholder="Full name" id="fullname" required onChange={handleOnChange} />
            </FormGroup>
            <FormGroup>
                <input type="tel" placeholder="Mobile no" id="mobile" required onChange={handleOnChange} />
            </FormGroup>
            <FormGroup className="d-flex align-items-center gap-3">
                <input type="date" placeholder="" id="bookAt" required onChange={handleOnChange} />
                <input type="number" placeholder="Number of travellers" id="guestSize" required onChange={handleOnChange} />
            </FormGroup>
        </Form>
      </div>
      {/*=====================booking form end============================ */}
      {/*=====================booking bottom start======================== */}
      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0 d-flex justify-content-between align-items-center">
            <h5 className="d-flex align-items-center gap-1">${price} <RiCloseLine /> 1 person</h5>
            <span>${price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 d-flex justify-content-between align-items-center">
            <h5>Service charge</h5>
            <span>${serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total d-flex justify-content-between align-items-center">
            <h5>Total</h5>
            <span>${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>
        <Button className="btn primary__btn w-100 mt-4" onClick={handleSubmit}>Book now</Button>
      </div>
      {/*=====================booking bottom end========================== */}
    </div>
  );
};

export default Booking;
