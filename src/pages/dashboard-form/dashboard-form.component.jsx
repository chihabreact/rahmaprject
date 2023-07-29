import { useState } from "react"

import "./dashboard-form.styles.css"

import Input from "../../components/input/input.component"
import TextArea from "../../components/textarea/textarea.component"

import Button from "@mui/material/Button"
import { useNavigate } from "react-router-dom"

const defaultFormValues = {
    name: "",
    description: "",
    price: "",
    image: ""
}

const DashboardForm = () => {

  const [formFields, setFormFields] = useState(defaultFormValues);
  const { name, description, price, image } = formFields; 

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
                    label="Name*"
                    name="name"
                    type="text"
                    value={name}
                    placeHolder="Name"
                    required
                    onChange={(event) => onChangeHandler(event)}
                />
                <Input 
                    className="dashboard-input-container"
                    label="Price*"
                    name="price"
                    type="number"
                    value={price}
                    placeHolder="Price"
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
                label="Image*"
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