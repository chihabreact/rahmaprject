import React from "react";
import Slider from "react-slick";
import "./SimpleSlider.css";
import DS7 from "../../assets/DS7.jpg";
import landingpage1 from "../../assets/landingpage2 (1).jpg";
import landingpage2 from "../../assets/landingpage2 (2).jpg";
import { WidthFull } from "@mui/icons-material";

export default function Slide() {
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
	};
	return (
		<Slider {...settings}>
			<div>
				<img
					className='img'
					src={DS7}
					alt='ds7'
				/>
			</div>
			<div>
				<img
					className='img'
					src={landingpage1}
					alt='ds7'
				/>
			</div>
			<div>
				<img
					className='img'
					src={landingpage2}
					alt='ds7'
				/>
			</div>
		</Slider>
	);
}
