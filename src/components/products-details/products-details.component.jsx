import { 
  useEffect,
  useReducer
} from "react";


import { 
  useNavigate,
} from "react-router-dom";

import "./products-details.styles.css"

import { Typography, Button } from "@mui/material"
import CheckIcon from '@mui/icons-material/Check';
import StoreIcon from '@mui/icons-material/Store';

import NavigationBar from "../NavigationBar/navigation-bar.component"

import { useSelector } from "react-redux";
import { selectProducts } from "../../store/products/products.selector";

import { API_URL } from "../../utils/request.js";

import { 
  INITIAL_STATE,
  PRODUCT_ACTION_TYPES, 
  productReducer, 
} from "../../utils/reducer/product/product.reducer";

const ProductsDetails = () => {
  const [state, dispatch] = useReducer(productReducer, INITIAL_STATE);
  const navigate = useNavigate();
  const { products } = useSelector(selectProducts);

  const productId = Number(window.location.pathname.split("/")[2]);

  if (isNaN(productId)) {
    navigate("/products");
  }

  useEffect(() => {
    if (
      products !== null && 
      products !== undefined &&
      products.length !== 0
    ) {
      const isProductExist = Array.from(products).find((product) => productId === product.id);
      console.log(isProductExist);
      
      if (!isProductExist) {
        navigate("/products");
      }
      const targetProduct = Array.from(products).filter(product => product.id === productId)[0];
      // setProduct(targetProduct);
      dispatch({
        type: PRODUCT_ACTION_TYPES.SET_MAIN_PRODUCT, 
        payload: {
          product: targetProduct,
          mainImageUrl: API_URL + targetProduct.attributes.image1.data[0].attributes.formats.small.url
        }
      });
    }
    
    return;
  }, [products]);

  const onClickHandler = (event) => {
    event.preventDefault();
    navigate("/products")
  }

  const onImageClickHandler = (src) => {
    console.log(src);
    dispatch({
      type: PRODUCT_ACTION_TYPES.SET_MAIN_IMAGE, 
      payload: src
    });
  }

  return (
    state.product &&
    <div className="product-details-container">
      <NavigationBar className="hide-nav-link"/>
      <div className="product-details">
        <div className="images-container">
          <div className="main-image-container">
            <img 
              src={state.mainImage} 
              alt="product" 
              className="main-image"
            />
          </div>
          <div className="secondary-images-container">
          {state.product.attributes.image1.data[0].attributes.formats.small ? 
              <img 
                src={API_URL + state.product.attributes.image1.data[0].attributes.formats.small.url} 
                alt="product" 
                className="secondary-image"
                onClick={() => onImageClickHandler(API_URL + state.product.attributes.image1.data[0].attributes.formats.small.url)}
              />
              :
              <img 
                src={API_URL + state.product.attributes.image1.data[0].attributes.formats.thumbnail.url} 
                alt="product" 
                className="secondary-image"
                onClick={() => onImageClickHandler(API_URL + state.product.attributes.image1.data[0].attributes.formats.thumbnail.url)}
              />
            }
            {state.product.attributes.image2.data[0].attributes.formats.small ? 
              <img 
                src={API_URL + state.product.attributes.image2.data[0].attributes.formats.small.url} 
                alt="product" 
                className="secondary-image"
                onClick={() => onImageClickHandler(API_URL + state.product.attributes.image2.data[0].attributes.formats.small.url)}
              />
              :
              <img 
                src={API_URL + state.product.attributes.image2.data[0].attributes.formats.thumbnail.url} 
                alt="product" 
                className="secondary-image"
                onClick={() => onImageClickHandler(API_URL + state.product.attributes.image2.data[0].attributes.formats.thumbnail.url)}
              />
            }
            {state.product.attributes.image3.data[0].attributes.formats.small ? 
              <img 
                src={API_URL + state.product.attributes.image3.data[0].attributes.formats.small.url} 
                alt="product" 
                className="secondary-image"
                onClick={() => onImageClickHandler(API_URL + state.product.attributes.image3.data[0].attributes.formats.small.url)}
              />
              :
              <img 
                src={API_URL + state.product.attributes.image3.data[0].attributes.formats.thumbnail.url} 
                alt="product" 
                className="secondary-image"
                onClick={() => onImageClickHandler(API_URL + state.product.attributes.image3.data[0].attributes.formats.thumbnail.url)}
              />
            }
          </div>
        </div>
        <div className="product-information-container">
          <Typography variant="h4" className="product-name">{state.product.attributes.title}</Typography>
          <Typography variant="h6" style={{ margin: "0px 0px 20px 0px" }}>About this Item:
            <Typography variant="p" style={{
              display: "block",
              fontWeight: "lighter",
              fontSize: "1rem"
            }}>{state.product.attributes.description}</Typography>
          </Typography>
          <Typography variant="h6" style={{ 
            margin: "0px 0px 20px 0px",
            display: "flex",
            gap: "5px",
            }}>
            <CheckIcon style={{ 
              backgroundColor: "#D55C4E",
              borderRadius: "100%" 
            }}></CheckIcon>
            <Typography variant="p" style={{
              fontWeight: "lighter",
              fontSize: "1rem"
            }}><Typography variant="p" style={{
              fontWeight: "bold",
            }}>Available</Typography>: In Stock</Typography>
          </Typography>
          <Typography variant="h6" style={{ 
            margin: "0px 0px 20px 0px",
            display: "flex",
            gap: "5px",
            }}>
            <CheckIcon style={{ 
              backgroundColor: "#D55C4E",
              borderRadius: "100%" 
            }}></CheckIcon>
            <Typography variant="p" style={{
              fontWeight: "lighter",
              fontSize: "1rem"
            }}><Typography variant="p" style={{
              fontWeight: "bold",
            }}>Category</Typography>: {state.product.attributes.category.data?.attributes.title}</Typography>
          </Typography>
          <Typography variant="h6" style={{ 
            margin: "0px 0px 20px 0px",
            display: "flex",
            gap: "5px",
            }}>
            <CheckIcon style={{ 
              backgroundColor: "#D55C4E",
              borderRadius: "100%" 
            }}></CheckIcon>
            <Typography variant="p" style={{
              fontWeight: "lighter",
              fontSize: "1rem"
            }}><Typography variant="p" style={{
              fontWeight: "bold",
            }}>Shipping Area</Typography>: 58 Wilaya</Typography>
          </Typography>
          <Button variant="outlined" style={{
            color: "#D55C4E",
            borderColor: "#D55C4E",
            display: "flex",
            justifyContent: "space-evenly",
          }} onClick={(event) => onClickHandler(event)}>
            <StoreIcon></StoreIcon>
            <Typography variant="p" style={{
              fontWeight: "lighter",
              fontSize: "1rem"
            }}>Back to Store</Typography>
          </Button>
        </div>
      </div>
    </div>
    // }?W
  )
}

export default ProductsDetails