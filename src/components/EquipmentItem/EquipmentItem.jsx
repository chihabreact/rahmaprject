import "./EquipmentItem.style.scss";

import { API_URL } from "../../utils/request";

const EquipmentItem = ({ product, onClickHandler }) => {
  return (
    <li
      className="products-list-item-container"
    >
      <div
        className="products-list-item"
        key={product.id}
      >
        {product.attributes.image1.data[0].attributes.formats.small ?
          <img
            src={API_URL + product.attributes.image1.data[0].attributes.formats.small.url} 
            alt={product.attributes.title}
            onClick={() => onClickHandler(product.id)}
            className="product-image"
          />
          :
          <img
            src={API_URL + product.attributes.image1.data[0].attributes.formats.thumbnail.url} 
            alt={product.attributes.title}
            onClick={() => onClickHandler(product.id)}
            className="product-image"
          />
        }
        <p>{product.attributes.title}</p>
      </div>
    </li>
  );
};

export default EquipmentItem;