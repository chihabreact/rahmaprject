import React from "react";
import img1 from "../../assets/item1.png";
import img2 from "../../assets/item2.png";
import img3 from "../../assets/item3.jpg";
import "./ProductList.style.scss";
import ProductItem from "../../components/ProductItem/ProductItem";
const ProductList = () => {
  let products = [
    {
      id: crypto.randomUUID(),
      name: "toyota",
      img: img1,
    },
    {
      id: crypto.randomUUID(),
      name: "toyota",
      img: img1,
    },
    {
      id: crypto.randomUUID(),
      name: "machines",
      img: img2,
    },
    {
      id: crypto.randomUUID(),
      name: "lands",
      img: img3,
    },
  ];

  return (
    <div className="product__list">
      {products.map((product) => {
        return <ProductItem key={product.id} product={product}></ProductItem>;
      })}
    </div>
  );
};

export default ProductList;
