import React from "react";
import "./WorkExp.style.scss";
import { Typography } from "@mui/material";
const WorkExp = () => {
  return (
    <div className="exp__container">
      <div className="exp__item">
        <Typography variant="h4">
          We have a dedicated and experienced team ready to assist you with all
          your equipment needs.
        </Typography>
        <Typography variant="h1" fontWeight="bold">
          30+
        </Typography>
      </div>
      <div className="exp__item">
        <Typography variant="h4">
          Our company has years of experience in providing quality equipment and
          services to our clients.
        </Typography>
        <Typography variant="h1" fontWeight="bold">
          28+
        </Typography>
      </div>
      <div className="exp__item">
        <Typography variant="h4">
          We are proud to have served a vast number of satisfied customers,
          ranging from small businesses to large{" "}
        </Typography>
        <Typography variant="h1" fontWeight="bold">
          500+
        </Typography>
      </div>
    </div>
  );
};

export default WorkExp;
