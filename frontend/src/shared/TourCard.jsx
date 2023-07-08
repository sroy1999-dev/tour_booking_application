import React from 'react';
import '../styles/TourCard.css';

const TourCard = ({tour}) => {
  const { id, title, city, distance, price, maxGroupSize, desc, reviews, avgRating, photo, featured } = tour;
  return (
    <div>TourCard</div>
  )
}

export default TourCard;