import React from "react";
import "./EquipmentItem.style.scss";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";

const EquipmentItem = ({ item }) => {
  const { name, imageLink } = item;
  const ToItOwnPage = () => {
    // after clicking on the button it takes to for product descrions that have more informations about the product
  };
  return (
    // <div className="cards_item">
    <div className="card">
      <div className="card_image">
        <img src={imageLink} alt="" />
      </div>
      <div className="card_content">
        <Typography variant="h4" color="white">
          {name}
        </Typography>
        <button className="btn card_btn" onClick={ToItOwnPage}>
          Read More
        </button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default EquipmentItem;
