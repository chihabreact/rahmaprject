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
    <div className="cards_container">
      <div className="card">
        <div className="card_image">
          <img src={img} alt="" />
        </div>
        <div className="card_content">
          <Typography color="white">{name}</Typography>
          <button className="btn card_btn" onClick={GoToProducts}>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
