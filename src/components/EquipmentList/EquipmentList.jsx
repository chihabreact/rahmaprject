import { 
  useEffect, 
  useState 
} from "react";

import "./EquipmentList.style.scss";

import forwardIcon from "../../assets/icons8-forward-16.png"

import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/categories.selector"
import { selectProducts } from "../../store/products/products.selector"

import { useNavigate } from "react-router-dom";

import EquipmentItem from "../EquipmentItem/EquipmentItem";

const EquipmentList = () => {
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();
  const { categories } = useSelector(selectCategories);
  const { products } = useSelector(selectProducts);

  useEffect(() => {
    if (products && categories) setIsDataLoading(false);

    return;
  }, [products, categories])

  const onChangeCategory = (categoryId) => {
    if (selectedCategory === categoryId) {
      console.log(null);
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryId);
    }
  }

  const filteredEquipment = selectedCategory
  ? products.filter((product) => 
    product.attributes.category.data?.id === selectedCategory
  )
  : products;

  const onProductClickHandler = (productId) => {
    navigate(`/products/${productId}`);
  }

  return (
    <div className="categories-and-product-container">
      <div className="categories-container">
        <ul className="categories-list list">
          { 
          isDataLoading ? <div>...loading</div>: 
          categories.map((category) => (
            <li
              className="categories-list-item-container"
              key={category.id}
              onClick={() => onChangeCategory(category.id)}
            >
              <p>{category.attributes.title}</p>
              <img 
                src={forwardIcon} 
                alt="icon" 
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="product-container">
        <ul className="products-list list">
          {
          isDataLoading ? <div>...loading</div> :
          filteredEquipment.map((product) => (
            <EquipmentItem key={product.id} product={product} onClickHandler={onProductClickHandler}/>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EquipmentList;