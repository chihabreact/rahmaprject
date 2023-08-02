import React, { useState } from "react";
import Cta from "../cta/Cta";
import logo from "../../assets/logo.jpg";
import "./navigation-bar.styles.css";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router";

const NavigationBar = ({ className="" }) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  
  const onImageClickHandler = () => {
    navigate("/");
  }
  
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`navbar ${showMenu ? "show-menu" : ""}`}>
      <div className="links_logo">
        <img className="logo-image" src={logo} alt="logo" onClick={() => onImageClickHandler()}></img>
        <Typography variant="h6" style={{whiteSpace: "nowrap"}}>ERRAHMA GROUP</Typography>
        <span className="menu-button" onClick={toggleMenu}>
          <div className={`menu-line line1 ${showMenu ? "line1" : ""}`} />
          <div className={`menu-line line2 ${showMenu ? "line2" : ""}`} />
          <div className={`menu-line line3 ${showMenu ? "line3" : ""}`} />
        </span>
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
