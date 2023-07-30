import "./dashboard.styles.css"

import { 
    useParams,
    Link
} from "react-router-dom";

import DashboardProducts from "../../pages/dashboard-products/dashboard-products.component"
import DashboardForm from "../../pages/dashboard-form/dashboard-form.component"

import logo from "../../assets/logo.jpg"

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Dashboard = () => {
  let { page } = useParams();
  if (!page) page = "products";
  page = page.toLocaleLowerCase();

  let renderedPage;
  if (page === "products") {
    renderedPage = <DashboardProducts />
  } else if (page === "form") {
    renderedPage = <DashboardForm />
  }

//   const renderedPage = page === "products" ? <DashboardProducts /> : <DashboardForm />;

  return (
    <div className="dashboard-container">
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
        <div className="responsive-container">
            <div className="responsive">
                {
                    renderedPage
                    // renderedPage || notFoundPage
                }
            </div>
        </div>
    </div>
  )
}

export default Dashboard