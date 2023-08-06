import "./dashboard-navigation.styles.css";

import { 
    Link
} from "react-router-dom";

import logo from "../../assets/logo.jpg"

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const DashboardNavigation = ({ page }) => {
  
  return (
        <div className="responsive-container">
            <div className="responsive">
                <nav className="dashboard-nav-bar">
                    <div className="nav-bar-left">
                        <Link to="/dashboard/products" className="logo-image-dashboard-container">
                            <img className="logo-image-dashboard" src={logo} alt="LOGO" />
                        </Link>
                        <Link to="/dashboard/products" className={`nav-link ${page === "products" ? "colored-nav-bar" : ""}`}>
                            <div>Products</div>
                        </Link>
                        <Link to="/dashboard/add-product" className={`nav-link ${page === "add-product" ? "colored-nav-bar" : ""} add-product`}>
                            <div>Add Product</div>
                        </Link>
                        <Link to="/dashboard/add-category" className={`nav-link ${page === "add-category" ? "colored-nav-bar" : ""}`}>
                            <div>Add Category</div>
                        </Link>
                    </div>
                    <div className="nav-bar-right">
                        <div>Admin</div>
                        <AccountCircleIcon />
                    </div>
                </nav>
            </div>
        </div>
  )
}

export default DashboardNavigation