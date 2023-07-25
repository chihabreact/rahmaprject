import React from "react";
import './AboutUs.style.scss'
import { Typography } from "@mui/material";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
const AboutUs = () => {
	return (
		<div>
			<div className="text__container">
				<div className="text__container__left">
					<Typography variant="h2">From Humble Beginnings to Industry Leaders: <span> Our Journey and Visionnts</span></Typography>
				</div>
				<div className="text__container__right">
					<Typography>is not just a title, it's a testament to our company's history and mission. Founded 1995 by MR BACHIR DEBBAB, ERAHMA GROUP started as a small family-owned business with a passion for providing quality machinery and equipment to our customers. Through hard work</Typography>
				</div>
			</div>
				<VideoPlayer></VideoPlayer>
		</div>
	);
};

export default AboutUs;
