import React from "react";

import "./EquipmentItem.style.scss";

import { API_URL } from "../../utils/request";

import { Typography } from "@mui/material";

const EquipmentItem = ({ item }) => {
  const title = item.attributes.title;
  const imageLink = API_URL + item.attributes.image1.data[0].attributes.formats.thumbnail.url;
  
  const ToItOwnPage = () => {
    // after clicking on the button it takes to for product descrions that have more informations about the product
  };
  return (
    <div className="card">
      <div className="card_image">
        <img src={imageLink} alt={title} />
      </div>
      <div className="card_content">
        <Typography variant="h4" color="white">
          {title}
          {/* {title.length < 5 ? title : title.slice(0, 20) + "..."} */}
        </Typography>
        <button className="btn card_btn" onClick={ToItOwnPage}>
          Read More
        </button>
      </div>
    </div>
  );
};

export default EquipmentItem;
