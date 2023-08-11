import "./dashboard.styles.css"

import { useState, useEffect } from "react";
import { 
    Outlet,
    useLocation
} from "react-router-dom";

import DashboardNavigation from "../../components/dashboard-navigation/dashboard-navigation.component"

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) window.location.href = "/login";
    
    setIsLoading(false);
    return;
  }, []);
  
  const { pathname } = useLocation();  
  let page = pathname.slice(11);
  if (pathname === "/dashboard" || pathname === "/dashboard/") window.location.href = "/dashboard/products";

  return (
    <>
      {
        isLoading ? (
          <div>Loading...</div>
        ) : (
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
    </>
  )
}

export default Dashboard