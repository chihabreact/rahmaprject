import "./dashboard.styles.css"

import { 
    Outlet,
    useLocation
} from "react-router-dom";

import DashboardNavigation from "../../components/dashboard-navigation/dashboard-navigation.component"

const Dashboard = () => {
  const { pathname } = useLocation();  
  let page = pathname.slice(11);
  if (pathname === "/dashboard" || pathname === "/dashboard/") window.location.href = "/dashboard/products";
  return (
    <div className="dashboard-container">
        <DashboardNavigation page={page}/>
        <div className="responsive-container">
            <div className="responsive">
              <Outlet />
            </div>
        </div>
    </div>
  )
}

export default Dashboard