import React from "react";
import Slider from "react-slick";
import { logo, logo1, logo2, logo3, logo4 } from "../../assets/logos/index";
import "./LogosSilder.style.scss";

const LogosSilder = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="logo__container">
      <Slider {...settings}>
        <div className="slide-item">
          <img src={logo} alt="logo1" className="slider-image" />
        </div>
        <div className="slide-item">
          <img src={logo1} alt="logo2" className="slider-image" />
        </div>
        <div className="slide-item">
          <img src={logo2} alt="logo3" className="slider-image" />
        </div>
        <div className="slide-item">
          <img src={logo3} alt="logo4" className="slider-image" />
        </div>
        <div className="slide-item">
          <img src={logo4} alt="logo5" className="slider-image" />
        </div>
      </Slider>
    </div>
  );
};

export default LogosSilder;
