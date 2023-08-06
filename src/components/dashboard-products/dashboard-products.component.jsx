import "./dashboard-products.styles.css"

import { useNavigate } from "react-router-dom"

import Button from "@mui/material/Button"
import ProductListDashboard from "../product-list-dashboard/product-list-dashboard.component"

const DashboardProducts = () => {
  const navigate = useNavigate();

  const onAddProductHandler = () => {
    navigate("/dashboard/add-product");        
  }

  return (
    <>
        <div className="header-container">
            <div className="left-section-header">
                <h3>Products</h3>
                <p className="header-paragraph">A list of all the Products</p>
            </div>
            <div className="right-section-header">
                <Button variant="contained" style={{backgroundColor: "#00B300"}} className="add-button" onClick={() => onAddProductHandler()}>Add Product</Button>
            </div>
        </div>
        <div className="product-table-container">
            <ProductListDashboard />
        </div>
    </>
  )
}

export default DashboardProducts