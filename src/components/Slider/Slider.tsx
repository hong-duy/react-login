import React from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import '../Slider/style.scss'

const SimpleSlider = (props: any) => {

  const settings = {
    className: 'slider',
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    rows: 1,
    responsive: [
      {
        breakpoint: 1198,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1
        }
      }
    ]
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <div className="item">
          <h3>1</h3>
        </div>
        <div className="item">
          <h3>2</h3>
        </div>
        <div className="item">
          <h3>3</h3>
        </div>
        <div className="item">
          <h3>4</h3>
        </div>
        <div className="item">
          <h3>5</h3>
        </div>
        <div className="item">
          <h3>6</h3>
        </div>
        <div className="item">
          <h3>7</h3>
        </div>
        <div className="item">
          <h3>8</h3>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;