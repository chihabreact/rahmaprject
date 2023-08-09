import { useState } from "react"

import "./add-product-dashboard-form.styles.css"

import Input from "../input/input.component"
import TextArea from "../textarea/textarea.component"

import Button from "@mui/material/Button"
import { useNavigate } from "react-router-dom"

import { addProduct } from "../../utils/request"

const defaultTextFormFields = {
    title: "",
    description: ""
}

const defaultImagesFormFields = {
    image1: "",
    image2: "",
    image3: ""
}

const AddProductDashboardForm = () => {

  const [textFormFields, setTextFormFields] = useState(defaultTextFormFields);
  const [imagesFormFields, setImagesFormFields] = useState(defaultImagesFormFields);
  const [productFromCredentials, setProductFromCredentials] = useState(true);

  const { 
    title, 
    description
  } = textFormFields; 

  const {
    image1, 
    image2, 
    image3 
  } = imagesFormFields;

  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTextFormFields({...textFormFields, [name]: value });
  }

  const onImageChangeHandler = (event) => {
    const selectedImage = event.target.files[0];
    console.log(event.target.name);
    console.log(event.target.files[0]);
    setImagesFormFields({...imagesFormFields, [event.target.name]: selectedImage});
  }

  const onAddProductHandler = async () => {
    const productResponse = await addProduct(title, description, image1, image2, image3);

    if (!productResponse) {
      setProductFromCredentials(false);
      console.error("something went wrong");
    } else {
      if (!productFromCredentials) setProductFromCredentials(true);
      setTextFormFields(defaultTextFormFields);
      setImagesFormFields(defaultImagesFormFields);
      navigate("/dashboard/products");
    }
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
        <p className={`add-product-form-credentials ${!productFromCredentials && ".add-product-form-wrong-credentials"}`}>Wrong Credentials</p>
        <div>
            <div className="top-input-container">
                <Input
                    className="dashboard-input-container"
                    label="Title*"
                    name="title"
                    type="text"
                    value={title}
                    placeHolder="Title"
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
                name="image1"
                type="file"
                // value={image1}
                placeHolder="Image"
                required
                onChange={(event) => onImageChangeHandler(event)}
            />
            <Input 
                label="Image2*"
                name="image2"
                type="file"
                // value={image2}
                placeHolder="Image"
                required
                onChange={(event) => onImageChangeHandler(event)}
            />
            <Input 
                label="Image3*"
                name="image3"
                type="file"
                // value={image3}
                placeHolder="Image"
                required
                onChange={(event) => onImageChangeHandler(event)}
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

export default AddProductDashboardForm