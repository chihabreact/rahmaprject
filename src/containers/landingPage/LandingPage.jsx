import { Button, Typography } from "@mui/material";
import React from "react";
import Cta from "../../components/cta/Cta";
import "./LandingPage.style.css";
import DS7 from "../../assets/DS7.jpg";
import Slide from "../../components/SimpleSlider/Slide";
const LandingPage = () => {
  return (
    <div>
      <div className="container">
        <div className="container__left">
          <Typography variant="h2">
            <span>The Trusted</span> Source for Cars, Trucks, and Heavy
            Equipment.
          </Typography>
          <Typography>
            We offer a wide selection of top-quality vehicles and machinery for
            sale, backed by our knowledgeable team and exceptional customer
            service.
          </Typography>
          <div className="container__button">
            <Cta></Cta>
            <Button
              sx={{
                borderRadius: "20px", // Set your desired border radius value here
                // Add any other custom styles here if needed
              }}
              variant="outlined"
              color="warning"
              size="large"
            >
              SERVICES
            </Button>
          </div>
        </div>
        <div className="container__right">
          <div className="img__container">
            <Slide></Slide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
