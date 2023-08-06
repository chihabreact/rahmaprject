import { useState } from "react"

import "./add-category-dashboard-form.styles.css"

import Input from "../input/input.component"

import Button from "@mui/material/Button"
import { useNavigate } from "react-router-dom"

const defaultFormValues = {
    title: "",
    image: ""
}

const AddCategoryDashboardForm = () => {

  const [formFields, setFormFields] = useState(defaultFormValues);
  const { title, image } = formFields; 

  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value });
  }

  const onAddProductHandler = () => {
    navigate("/dashboard/products");
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
                    onChange={(event) => onChangeHandler(event)}
                />
            </div>
            <Input 
                label="Image1*"
                name="image"
                type="file"
                value={image}
                placeHolder="Image"
                required
                onChange={(event) => onChangeHandler(event)}
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