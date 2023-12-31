/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/TourCard.css';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FiMapPin } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';
import calculateAvgrating from '../utilities/avgRating';

const TourCard = ({tour}) => {
  const { id, title, price, reviews, photo, featured, city } = tour;
  const { totalRating, avgRating } = calculateAvgrating(reviews);
  return (
    <div className='tour__card'>
        <Card>
            <div className="tour__img">
                <img src={photo} alt="" />
                {featured && <span>Featured</span>}
            </div>
            <CardBody>
            <div className="card__top d-flex align-items-center justify-content-between">
                <span className='tour__location d-flex align-items-center gap-1'>
                    <FiMapPin className='pin' /> {city}
                </span>
                <span className='tour__rating d-flex align-items-center gap-1'>
                    <AiFillStar className='star' /> {avgRating === 0 ? null : avgRating}
                    {totalRating === 0 ? "Not rated" : <span>({reviews.length})</span>}
                </span>
            </div>
            <h5 className='tour__title'><Link to={`/tours/${id}`}>{title}</Link></h5>
            <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
                <h5>${price}<span>/person</span></h5>
                <button className='btn booking__btn'>
                    <Link to={`/tours/${id}`}>Book now</Link>
                </button>
            </div>
            </CardBody>
        </Card>
        
    </div>
  )
}

export default TourCard;