import React from "react";
import "./OurClinets.style.scss";
import { Slider, Typography } from "@mui/material";
import LogosSilder from "../../components/companies-logo-Silder/LogosSilder";
const OurClinets = () => {
  return (
    <div>
      <div className="OurClinents__container">
        <Typography
          variant="h2"
          fontWeight="bold"
          padding={4}
          textAlign="center"
        >
          OUR CLIENTS
        </Typography>
        <Typography
          color="gray"
          variant="h6"
          textAlign="center"
          sx={{ paddingLeft: "4rem", paddingRight: "4rem", fontSize: "1.5rem" }}
        >
          Clients Rely on Us. We have built strong relationships with a diverse
          range of clients, providing them with reliable and high-quality
          equipment to help them succeed in their ventures. From small
          businesses to large corporations across various industries, we are
          committed to meeting their equipment needs
        </Typography>
      </div>
      <LogosSilder></LogosSilder>
    </div>
  );
};

export default OurClinets;
