import React from "react";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { AiFillStar } from "react-icons/ai";
import "../styles/Booking.css";
import calculateAvgrating from "../utilities/avgRating";

const Booking = ({ tour, avgRating }) => {
  const { price, reviews } = tour;
  const handleOnChange = () => {

  }
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
        <Form className="booking__info-form">
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
    </div>
  );
};

export default Booking;
