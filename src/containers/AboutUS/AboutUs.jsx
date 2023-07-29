import React from "react";
import "./AboutUs.style.scss";
import { Divider, Typography } from "@mui/material";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import aboutUsPic from "..//..//assets/aboususpic.jpg";
import WorkExp from "../../components/workEXP/WorkExp";
const AboutUs = () => {
  return (
    <div>
      <div className="text__container">
        <div className="text__container__left">
          <Typography variant="h2">
            From Humble Beginnings to Industry Leaders:{" "}
            <span> Our Journey and Visionnts</span>
          </Typography>
        </div>
        <div className="text__container__right">
          <Typography>
            is not just a title, it's a testament to our company's history and
            mission. Founded 1995 by MR BACHIR DEBBAB, ERAHMA GROUP started as a
            small family-owned business with a passion for providing quality
            machinery and equipment to our customers. Through hard work
          </Typography>
        </div>
      </div>
      <VideoPlayer></VideoPlayer>
      <div className="text__container --border">
        <div className="text__container__left">
          <Typography variant="h2">
            Your Partner in <span>Projects</span>
          </Typography>
          <img src={aboutUsPic} alt="" />
        </div>
        <div className="text__container__right">
          <Typography fontWeight="bold" color="black" variant="h6">
            dedication, and a commitment to excellence, we grew our business to
            become one of the industry leaders in automotive and heavy machinery
            industries and export and import industry. Today, we offer a wide
            range of services, including equipment sales, maintenance, and
            repair, and we pride ourselves on providing top-notch customer
            service to all of our clients. Our vision for the future is to
            continue to innovate, expand our offerings, and provide the best
            possible solutions for our customers' needs.
          </Typography>
          <Divider variant="middle" />
          <Typography variant="h6" color="grey">
            Errahma Group was founded in 1995 as a small equipment sales
            company. Over the years, our dedication to providing high-quality
            products and exceptional customer service has allowed us to grow
            into a leading provider of equipment solutions in the industry.
            Today, we work with some of the largest oil field companies and
            contractors, providing them with a wide range of equipment and
            services to support their operations. We are proud of our journey
            and remain committed to delivering excellence in everything we do.
          </Typography>

          <Typography color="black" variant="h4">
            "we strive to provide a comprehensive selection of equipment to meet
            all your business needs. Our goal is to be your one-stop-shop for
            all your machinery requirements, offering a wide range of products
            to suit every project, from small-scale operations to large
            construction projects. We are committed to ensuring that our
            customers have access to the best equipment on the market, and we
            continuously expand our inventory to keep up with the latest
            industry trends and innovations. Whether you're looking to buy or
            rent equipment, we have the expertise and resources to help you find
            the perfect solution for your business."
          </Typography>
        </div>
      </div>
      <WorkExp></WorkExp>
    </div>
  );
};

export default AboutUs;
