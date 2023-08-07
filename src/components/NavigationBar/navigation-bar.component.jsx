import Cta from "../cta/Cta";
import logo from "../../assets/logo.jpg";
import "./navigation-bar.styles.css";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavigationBar = ({ className="" }) => {
  const navigate = useNavigate();
  
  const onImageClickHandler = () => {
    navigate("/");
  }

  return (
    <div className={`navbar`}>
      <div className="links_logo">
        <img className="logo-image" src={logo} alt="logo" onClick={() => onImageClickHandler()}></img>
        <Typography variant="h6" style={{whiteSpace: "nowrap"}}>ERRAHMA GROUP</Typography>
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
