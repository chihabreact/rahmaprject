import { useState } from "react"

import "./add-category-dashboard-form.styles.css"

import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

import Input from "../input/input.component"
import Button from "@mui/material/Button"

import { setCategories } from "../../store/categories/categories.action"

import { 
  addCategory,
  getCategories
} from "../../utils/request";

const AddCategoryDashboardForm = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [categoryFromCredentials, setCategoryFromCredentials] = useState(true);
  const [successFormSubmission, setSuccessFormSubmission] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onTitleChangeHandler = (event) => {
    const { value } = event.target;
    setTitle(value);
  }

  const onImageChangeHandler = (event) => {
    const selectedImage = event.target.files[0];
    event.target.value = null;
    setImage(selectedImage);
  }

  const updateCategoriesState = async () => {
    const categoriesResponse = await getCategories();
    if (categoriesResponse) {
      dispatch(setCategories(categoriesResponse));
    } 
  }

  const onAddCategoryHandler = async (event) => {
    const categoryResponse = await addCategory(title, image);
    
    if (!categoryResponse) {
      setCategoryFromCredentials(false);
      console.error("Something went wrong");
    } else {
      if (!categoryFromCredentials) setCategoryFromCredentials(true);

      setSuccessFormSubmission(true);
      setTitle("");
      setImage(null);

      await updateCategoriesState();

      const timeoutId = setTimeout(() => {
        setSuccessFormSubmission(false);
      }, 2000);
    
      return () => {
        clearTimeout(timeoutId);
      };
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
        <p className={`add-category-form-credentials ${!categoryFromCredentials && "add-category-form-wrong-credentials"}`}>Wrong Credentials</p>
        <p className={`add-category-form-credentials ${successFormSubmission && "successful-form-submission"}`}>Category added successfully</p>
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