import React from "react";
import Slider from "react-slick";
import "./SimpleSlider.scss";
import DS7 from "../../assets/DS7.jpg";
import landingpage1 from "../../assets/landingpage2 (1).jpg";
import landingpage2 from "../../assets/landingpage2 (2).jpg";
import { WidthFull } from "@mui/icons-material";

export default function Slide() {
  const images = [
    DS7,
    landingpage1,
    landingpage2,
    // Add more image URLs here
  ];
  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    WidthFull: false,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <div className="image-container">
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
