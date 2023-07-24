import React from "react";
import Slider from "react-slick";
import avatar1 from "../assets/images/ava-1.jpg";
import avatar2 from "../assets/images/ava-2.jpg";
import avatar3 from "../assets/images/ava-3.jpg";

const slides = [
  {
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A repudiandae omnis eveniet explicabo itaque, veniam quidem ducimus tempora laborum.",
    name: "John Doe",
    image: avatar1,
    type: "customer",
  },
  {
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A repudiandae omnis eveniet explicabo itaque, veniam quidem ducimus tempora laborum.",
    name: "Lisa Linn",
    image: avatar2,
    type: "customer",
  },
  {
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A repudiandae omnis eveniet explicabo itaque, veniam quidem ducimus tempora laborum.",
    name: "David Rock",
    image: avatar3,
    type: "customer",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {slides.map((item, index) => (
        <div className="testimonial py-4 px-3" key={index}>
          <p>
            {item.details}
          </p>
          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={item.image} className="w-25 h-25 rounded-2" alt="" />
            <div>
              <h6 className="mb-0 mt-3">{item.name}</h6>
              <p>{item.type}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Testimonial;
