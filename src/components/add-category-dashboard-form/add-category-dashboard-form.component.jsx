import { useState } from "react"

import "./add-category-dashboard-form.styles.css"

import Input from "../input/input.component"

import Button from "@mui/material/Button"
import { useNavigate } from "react-router-dom"

import { addCategory } from "../../utils/request";

const AddCategoryDashboardForm = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const onTitleChangeHandler = (event) => {
    const { value } = event.target;
    setTitle(value);
  }

  const onImageChangeHandler = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  }

  const onAddCategoryHandler = async (event) => {
    const categoryResponse = await addCategory(title, image);
    if (!categoryResponse) throw new Error("Something went wrong");
    setTitle("");
    setImage(null);
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
                onChange={(event) => onImageChangeHandler(event)}
            />
            <div className="dashboard-form-button-container">
                <Button variant="contained" style={{backgroundColor: "#00B300"}} className="add-button" onClick={() => onAddCategoryHandler()}>
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