import React from "react";
import img1 from "../../assets/item1.png";
import "./ProductList.style.scss";
const ProductList = () => {
  let products = [
    {
      id: crypto.randomUUID(),
      name: "toyota",
      img: img1,
    },
    {
      id: crypto.randomUUID(),
      name: "machines",
      img: img1,
    },
    {
      id: crypto.randomUUID(),
      name: "lands",
      img: img1,
    },
  ];

  return (
    <div className="product__list">
      {products.map((product) => {
        return (
          <div>
            <img src={product.img} alt={product.name} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
