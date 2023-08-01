import React from "react";
import Cta from "../cta/Cta";
import logo from "../../assets/logo.jpg";
import "./navigation-bar.styles.css";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router";

const NavigationBar = ({ className="" }) => {
  return (
    <div className="navbar">
      <div className="links_logo">
        <img src={logo} alt="logo"></img>
        <Typography variant="h6" style={{whiteSpace: "nowrap"}}>ERRAHMA GROUP</Typography>
        <span></span>
      </div>
      <div className={`navbar-links ${className}`}>
        <p>our services</p>
        <p>who are we</p>
      </div>
      <Cta></Cta>
    </div>
  );
};

export default NavigationBar;
