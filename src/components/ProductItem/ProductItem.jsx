import { Typography } from "@mui/material";
import React from "react";
import "./Productitem.style.scss";

const ProductItem = ({ product }) => {
  const { name, img } = product;
  return (
    <div class="cards_item">
      <div class="card">
        <div class="card_image">
          <img src={img} alt="" />
        </div>
        <div class="card_content">
          <Typography variant="h2" color="white">
            {name}
          </Typography>
          <p class="card_text">
            Demo of pixel perfect pure CSS simple responsive card grid layout
          </p>
          <button class="btn card_btn">Read More</button>
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
