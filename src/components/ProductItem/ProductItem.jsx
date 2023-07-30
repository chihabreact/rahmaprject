import { Typography } from "@mui/material";
import React from "react";
import "./Productitem.style.scss";
import { useNavigate } from "react-router";

const ProductItem = ({ product }) => {
  const { name, img } = product;

  const navigate = useNavigate();
  const GoToProducts = () => {
    navigate("Products");
  };

  return (
    <div className="cards_item">
      <div className="card">
        <div className="card_image">
          <img src={img} alt="" />
        </div>
        <div className="card_content">
          <Typography variant="h2" color="white">
            {name}
          </Typography>
          <p className="card_text">
            Demo of pixel perfect pure CSS simple responsive card grid layout
          </p>
          <button className="btn card_btn" onClick={GoToProducts}>
            Read More
          </button>
        </div>
      </div>
    </div>
    // <div className="Item__container">
    //   <img src={img} alt="" />
    //   <Typography>{name}</Typography>
    // </div>
  );
};

export default ProductItem;
