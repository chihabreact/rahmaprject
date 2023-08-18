import React, { useState } from "react";

import "./EquipmentList.style.scss";

import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/categories.selector"
import { selectProducts } from "../../store/products/products.selector"

import EquipmentItem from "../EquipmentItem/EquipmentItem";

const EquipmentList = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { categories } = useSelector(selectCategories);
  const { products } = useSelector(selectProducts);

  const filteredEquipment = selectedCategory
  ? products.filter((product) => 
    product.attributes.category.data?.id === selectedCategory
  )
  : products;

  return (
    <div>
      {/* List of categories */}
      <ul className="categoires__list">
        {categories.map((category) => (
          <li
            className="categories__list__item"
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.attributes.title}
          </li>
        ))}
      </ul>

      {/* List of equipment based on selected category */}
      <div className="Equipment__container">
        {filteredEquipment.map((product) => {
          return <EquipmentItem key={product.id} item={product} />
        })} 
      </div>
    </div>
  );
};

export default EquipmentList;
