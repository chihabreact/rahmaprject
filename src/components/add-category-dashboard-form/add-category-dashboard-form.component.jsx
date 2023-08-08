import { useState } from "react"

import "./add-category-dashboard-form.styles.css"

import Input from "../input/input.component"

import Button from "@mui/material/Button"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const API_URL = "http://localhost:1337";

const AddCategoryDashboardForm = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const onTitleChangeHandler = (event) => {
    const { value } = event.target;
    setTitle(value);
  }

  const onChangeImageHandler = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  }

  const getImageId = async (image) => {
    const formData = new FormData();
    formData.append("files", image);
    try {
      const imageData = await axios.post(`${API_URL}/api/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkxNTE1NDQzLCJleHAiOjE2OTQxMDc0NDN9.R0fmjGqVPLnOytbnagKZpOWr9dJ89Z6sAQ5FbGn3CDE`
        }
      });
      const imageId = imageData.data[0].id;
      return imageId;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  const onAddProductHandler = async (event) => {
    const imageId = await getImageId(image);
    if (!imageId) return;
    
    try {
      const sendData = await axios.post(`${API_URL}/api/categories`, {
        "data": {
          title,
          image: imageId
        }
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkxNTE1NDQzLCJleHAiOjE2OTQxMDc0NDN9.R0fmjGqVPLnOytbnagKZpOWr9dJ89Z6sAQ5FbGn3CDE`
        }
      });
      console.log(sendData);
    } catch (err) {
      console.log(err);
    }
    // navigate("/dashboard/products");
  }

  const onCancelHandler = () => {
    navigate("/dashboard/products");
  }
  
  return (
    <>
        <div className="header-dashboard-form">
            <h3>Product Infomation</h3>
            <p className="header-paragraph">Add new product</p>
        </div>
        <div>
            <div className="top-input-container">
                <Input
                    className="dashboard-input-container"
                    label="Title*"
                    name="title"
                    type="text"
                    value={title}
                    placeHolder="Name"
                    required
                    onChange={(event) => onTitleChangeHandler(event)}
                />
            </div>
            <Input 
                label="Image*"
                name="image"
                type="file"
                // accept="image/*"
                // value={image?.name}
                placeHolder="Image"
                required
                onChange={(event) => onChangeImageHandler(event)}
            />
            <div className="dashboard-form-button-container">
                <Button variant="contained" style={{backgroundColor: "#00B300"}} className="add-button" onClick={() => onAddProductHandler()}>
                    Add Category
                </Button>
                <Button variant="contained" style={{backgroundColor: "white", color: "#00B300", border: "1px solid #00B300"}} className="add-button" onClick={() => onCancelHandler()}>
                    Cancel
                </Button>
            </div>
        </div>
    </>
  )
}

export default AddCategoryDashboardForm