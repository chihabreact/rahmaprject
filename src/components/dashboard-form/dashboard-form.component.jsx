import { useState } from "react"

import "./dashboard-form.styles.css"

import Input from "../input/input.component"
import TextArea from "../textarea/textarea.component"

import Button from "@mui/material/Button"
import { useNavigate } from "react-router-dom"

const defaultFormValues = {
    name: "",
    description: "",
    image: ""
}

const DashboardForm = () => {

  const [formFields, setFormFields] = useState(defaultFormValues);
  const { name, description, image } = formFields; 

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
                    value={name}
                    placeHolder="Name"
                    required
                    onChange={(event) => onChangeHandler(event)}
                />
            </div>
            <TextArea 
                label="Description*"
                name="description"
                value={description}
                placeholder="Description"
                required
                onChange={(event) => onChangeHandler(event)}
            />
            <Input 
                label="Image1*"
                name="image"
                type="file"
                value={image}
                placeHolder="Image"
                required
                onChange={(event) => onChangeHandler(event)}
            />
            <Input 
                label="Image2*"
                name="image"
                type="file"
                value={image}
                placeHolder="Image"
                required
                onChange={(event) => onChangeHandler(event)}
            />
            <Input 
                label="Image3*"
                name="image"
                type="file"
                value={image}
                placeHolder="Image"
                required
                onChange={(event) => onChangeHandler(event)}
            />
            <div className="dashboard-form-button-container">
                <Button variant="contained" style={{backgroundColor: "#00B300"}} className="add-button" onClick={() => onAddProductHandler()}>
                    Add Product
                </Button>
                <Button variant="contained" style={{backgroundColor: "white", color: "#00B300", border: "1px solid #00B300"}} className="add-button" onClick={() => onCancelHandler()}>
                    Cancel
                </Button>
            </div>
        </div>
    </>
  )
}

export default DashboardForm