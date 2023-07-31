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
                        <Link to="/dashboard/form" className={`nav-link ${page === "form" ? "colored-nav-bar" : ""}`}>
                            <div>Form</div>
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