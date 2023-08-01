import "./products-detailss.styles.css"

import { Typography, Button } from "@mui/material"
import CheckIcon from '@mui/icons-material/Check';
import StoreIcon from '@mui/icons-material/Store';

import NavigationBar from "../NavigationBar/navigation-bar.component"

import logo from "../../assets/landcruiser.jpg"
import item3 from "../../assets/item3.jpg"
import { useNavigate } from "react-router-dom";

const ProductsDetails = () => {
  const navigate = useNavigate();
  
  const onClickHandler = (event) => {
    event.preventDefault();
    navigate("/products")
  }

  return (
    <div className="product-details-container">
      <NavigationBar className="hide-nav-link"/>
      <div className="product-details">
        <div className="images-container">
          <div className="main-image-container">
            <img src={item3} alt="product" className="main-image"/>
          </div>
          <div className="secondary-images-container">
            <img src={item3} alt="product" className="secondary-image"/>
            <img src={item3} alt="product" className="secondary-image"/>
            <img src={item3} alt="product" className="secondary-image"/>
          </div>
        </div>
        <div className="product-information-container">
          <Typography variant="h4" className="product-name">Toyota Land Cruiser</Typography>
          <Typography variant="h6" style={{ margin: "20px 0px 10px 0px" }}>Price: 
            <Typography variant="h6" style={{ 
              display: "inline", 
              color: "#E25D4C",
              fontWeight: "lighter" 
            }}> $ 100,000</Typography>
          </Typography>
          <Typography variant="h6" style={{ margin: "0px 0px 20px 0px" }}>About this Item:
            <Typography variant="p" style={{
              display: "block",
              fontWeight: "lighter",
              fontSize: "1rem"
            }}>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised</Typography>
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
            }}>Category</Typography>: Machine</Typography>
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
  )
}

export default ProductsDetails