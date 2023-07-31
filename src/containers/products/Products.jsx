import { Typography } from "@mui/material";
import React from "react";
import "./Products.style.scss";
import ProductList from "../../components/ProductList/ProductList";
const Products = () => {
  return (
    <div>
      <div className="product__container">
        <Typography variant="h2" fontWeight="bold" padding={4}>
          EQUIPMENT FOR EVERY NEED
        </Typography>
        <Typography color="secondary">
          We offer a wide range of high-quality products, from cars and trucks
          to generators and heavy machinery, all well-maintained for reliability
          and longevity. Our competitive pricing makes it easy to find the right
          equipment to fit your needs and budget.
        </Typography>
      </div>
      <ProductList></ProductList>
    </div>
  );
};

export default Products;
