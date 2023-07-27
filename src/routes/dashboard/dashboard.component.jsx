import "./dashboard.styles.css"

import ProductListDashboard from "../../components/product-list-dashboard/product-list-dashboard.component"

import logo from "../../assets/logo.jpg"

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from "@mui/material/Button";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
        <div className="responsive-container">
            <div className="responsive">
                <nav className="dashboard-nav-bar">
                    <div className="nav-bar-left">
                        <img className="logo-image-dashboard" src={logo} alt="LOGO" />
                        <div className="nav-link">Dashboard</div>
                        <div className="nav-link">Products</div>
                        <div className="nav-link">Form</div>
                    </div>
                    <div className="nav-bar-right">
                        <div>Admin</div>
                        <AccountCircleIcon />
                    </div>
                </nav>
            </div>
        </div>
        <div className="responsive-container">
            <div className="responsive">
                <div className="header-container">
                    <div className="left-section-header">
                        <h3>Products</h3>
                        <p className="header-paragraph">A list of all the Products</p>
                    </div>
                    <div className="right-section-header">
                        <Button variant="contained" style={{backgroundColor: "#00B300"}} className="add-button">Add Product</Button>
                    </div>
                </div>
                <div className="product-table-container">
                    <ProductListDashboard />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard